"use client";

import { MDB_GetLeaderboard, getLeaderBoard } from "@/app/users/action";
import { useEffect, useState, useTransition } from "react";
import { HTMLAttributes } from "react";
import { signOut, useSession } from "next-auth/react";
import { PuffLoader } from "react-spinners";

interface Props extends HTMLAttributes<HTMLDivElement> {}

function BestScores({ ...props }: Props) {
  const [pending, startTransition] = useTransition();
  const [leaderBoard, setLeaderBoard] =
    useState<{ name: string; scores: { game: string; points: number } }[]>();
  const getLeaderBoard = async () => {
    const leaderboard = (await MDB_GetLeaderboard()) as {
      name: string;
      scores: { game: string; points: number };
    }[];

    return leaderboard;
  };
  const { data: session, status } = useSession();

  useEffect(() => {
    startTransition(async () => {
      try {
        const leaderBoard = await getLeaderBoard();
        setLeaderBoard(leaderBoard);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return (
    <div className={`mb-8 w-full text-left font-mono`} {...props}>
      {!leaderBoard && <PuffLoader className="mx-auto" color="#9C7DDF" />}
      {leaderBoard &&
        leaderBoard.map((leader, index) => {
          if (
            leader.scores &&
            (index < 10 || leader.name === session?.user.name)
          ) {
            return (
              <div
                key={index}
                className={`flex justify-between border-t-[1px] border-solid border-white pb-2 pt-4 text-xl ${
                  index === leaderBoard.length - 1 ? "border-b-[1px]" : ""
                }`}
              >
                <p>
                  <span className="mr-3">{index + 1}</span>
                  <span>
                    {session?.user.name === leader.name ? "⭐️ " : ""}
                    {leader.name}
                  </span>
                </p>
                <span>Puntos:{leader.scores.points.toString()}</span>
              </div>
            );
          }
        })}
    </div>
  );
}

export default BestScores;
