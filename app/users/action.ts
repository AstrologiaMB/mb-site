"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { hash } from "bcrypt";
import { type User } from "@/types/users";
import { kv } from "@vercel/kv";
import UID from "uid-safe";

type Leaderboard = {
  name: string;
  scores?: [{ game: string; points: number }];
};

const SALT_ROUNDS = 10;
const UID_LENGTH = 18;

const DB_KEY_NAME = "users";

export async function addUser(formData: FormData) {
  const users: User[] | null = await kv.get(DB_KEY_NAME);
  const newUser: User = Object.fromEntries(
    formData as Iterable<[User, FormDataEntryValue]>,
  );

  const userFound = users?.filter((item) => item.email === newUser.email);

  try {
    if (userFound && userFound?.length > 0) {
      throw new Error("User already exist");
    }
    newUser.password = await hash(newUser.password, SALT_ROUNDS);
    newUser.sessionId = await UID(UID_LENGTH);
    console.log(newUser);
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
    const users: User[] | null = await kv.get(DB_KEY_NAME);

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
  console.log("wtf");
  try {
    const users: User[] | null = await kv.get(DB_KEY_NAME);
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

export async function getLeaderBoard() {
  try {
    const users: User[] | null = await kv.get(DB_KEY_NAME);

    const leaderBoard = users?.reduce(
      (arr: Leaderboard[], currentValue: User) => {
        if (currentValue.scores) {
          arr.push({
            name: currentValue.name,
            scores: currentValue.scores,
          });
        }
        return arr;
      },
      [],
    );

    return leaderBoard;
  } catch (error) {}
}
