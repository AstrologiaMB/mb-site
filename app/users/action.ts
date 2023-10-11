"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { hash } from "bcrypt";
import { type User as UserType } from "@/types/users";
import { kv } from "@vercel/kv";
import UID from "uid-safe";
import connectDB from "@/lib/mongodb";
import User, { IUser } from "@/lib/models/user";
import type { VercelRequest, VercelResponse } from "@vercel/node";

type Leaderboard = {
  name: string;
  scores?: [{ game: string; points: number }];
};

type GameLeaderboard = {
  userName: string;
  points: number;
};

const SALT_ROUNDS = 10;
const UID_LENGTH = 18;

const DB_KEY_NAME = "users";

export async function addUser(formData: FormData) {
  const users: UserType[] | null = await kv.get(DB_KEY_NAME);
  const newUser: UserType = Object.fromEntries(
    formData as Iterable<[UserType, FormDataEntryValue]>,
  );

  const userFound = users?.filter((item) => item.email === newUser.email);

  try {
    if (userFound && userFound?.length > 0) {
      throw new Error("User already exist");
    }
    newUser.password = await hash(newUser.password, SALT_ROUNDS);
    newUser.sessionId = await UID(UID_LENGTH);

    const res = await kv.set(
      DB_KEY_NAME,
      users ? [...users, newUser] : [newUser],
    );
    const oneDay = 24 * 60 * 60 * 1000;
    cookies().set("session", newUser.sessionId, {
      expires: Date.now() + 30 * oneDay,
    });
    revalidatePath("/");
    return { message: res };
  } catch (error) {
    return { message: "There was an error" };
  }
}

export async function getUsers() {
  const res = await kv.get(DB_KEY_NAME);
}

export async function getSessionData(sesssionId: string) {
  try {
    const users: UserType[] | null = await kv.get(DB_KEY_NAME);

    if (!users) return users;

    const user = users.filter(
      (userItem) => userItem.sessionId === sesssionId,
    )[0];

    if (!user) return null;

    return {
      email: user.email,
      name: user.name,
      dateOfBirth: user.dateOfBirth,
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Updates Leaderboard
 * @param sesssionId
 * @param points
 * @returns
 */
export async function updateLeaderboard(sesssionId: string, points: number) {
  try {
    const users: UserType[] | null = await kv.get(DB_KEY_NAME);
    const sessionData = getSessionData(sesssionId);

    if (!users) return users;

    const user = users.filter(
      (userItem) => userItem.sessionId === sesssionId,
    )[0];

    if (!user) return null;

    const updatedUsers = users.map((userItem) => {
      const hasScores = userItem.scores !== undefined;
      if (userItem.sessionId === sesssionId)
        return {
          ...userItem,
          scores: hasScores
            ? userItem.scores?.map((score) => {
                if (score.game === "AstroQuiz") {
                  return {
                    ...score,
                    points: Math.max(points, score.points),
                  };
                }
              })
            : [
                {
                  game: "AstroQuiz",
                  points: points,
                },
              ],
        };
      return userItem;
    });

    const res = await kv.set(DB_KEY_NAME, updatedUsers);

    revalidatePath("/games/astro-quiz");
  } catch (error) {
    throw error;
  }
}

export async function MDB_UpdateUserGame(sessionId: string, points: number) {
  console.log(sessionId, points);
  try {
    const filter = { sessionId };
    const user = await User.findOne(filter);

    if (!user) {
      return;
    }

    const existingGame = user.scores?.find(
      (score: any) => score.game === "AstroQuiz",
    );

    if (!existingGame || points > existingGame.points) {
      user.scores = user.scores.filter(
        (score: any) => score.game !== "AstroQuiz",
      );
      user.scores.push({ game: "AstroQuiz", points });
      const updatedUser = await user.save();
      revalidatePath("/games/astro-quiz");
    }
  } catch (error) {
    console.log(error);
    return { message: (error as Error).message };
  }
}

export async function getLeaderBoard(game: string) {
  try {
    const users: UserType[] | null = await kv.get(DB_KEY_NAME);

    const leaderBoard = users?.reduce(
      (arr: GameLeaderboard[], currentValue: UserType) => {
        const userPoints = currentValue.scores?.find(
          (score) => score.game === game,
        )?.points;

        if (userPoints) {
          arr.push({
            userName: currentValue.name,
            points: userPoints,
          });
        }
        return arr;
      },
      [],
    );

    return leaderBoard?.sort((a, b) => {
      if (a.points > b.points) return -1;
      if (a.points < b.points) return 1;
      return 0;
    });
  } catch (error) {}
}

export async function MDB_GetLeaderboard() {
  await connectDB();
  console.log("called");
  try {
    const gameLeaderBoard = await User.aggregate([
      {
        $unwind: "$scores",
      },
      {
        $match: {
          "scores.game": "AstroQuiz",
        },
      },
      {
        $project: {
          _id: 0, // Exclude the _id field
          name: 1, // Include the name field
          "scores.game": 1, // Include the 'scores.game' field
          "scores.points": 1, // Include the 'scores.points' field
        },
      },
      {
        $sort: {
          "scores.points": -1, // Sort by 'scores.points' in ascending order
        },
      },
    ]);

    return gameLeaderBoard;
  } catch (error) {
    return { message: (error as Error).message };
  }
}

export async function MDB_GetSessionData(sessionId: string) {
  try {
    console.log("connecting DB");
    await connectDB();
    console.log("connected DB");
    const userFound = await User.findOne({ sessionId: sessionId })
      .select("email name dateOfBirth")
      .exec();

    if (!userFound || userFound.length === 0) {
      throw new Error("Session not found.");
    }

    console.log("user found");
    return userFound;
  } catch (error) {
    return { message: (error as Error).message };
  }
}

export async function MDB_addUser(formData: FormData) {
  try {
    const userData: UserType = Object.fromEntries(
      formData as Iterable<[UserType, FormDataEntryValue]>,
    );

    const userFound = await User.find({ email: userData.email }).select(
      "email",
    );

    if (userFound.length > 0) {
      throw new Error("Email already in use.");
    }

    userData.password = await hash(userData.password, SALT_ROUNDS);
    userData.sessionId = await UID(UID_LENGTH);
    const newUser: IUser = new User(userData);
    const savedUser = await newUser.save();
    const oneDay = 24 * 60 * 60 * 1000;
    cookies().set("session", newUser.sessionId as string, {
      expires: Date.now() + 30 * oneDay,
    });
    revalidatePath("/");
    return { message: "OK" };
  } catch (error) {
    return { message: (error as Error).message };
  }
}
