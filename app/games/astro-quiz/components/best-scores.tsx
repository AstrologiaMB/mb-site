"use server";

import { MDB_GetLeaderboard, getLeaderBoard } from "@/app/users/action";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

async function BestScores({ className, ...props }: Props) {
  const leaderboard = (await MDB_GetLeaderboard()) as {
    name: string;
    scores: { game: string; points: number };
  }[];
  console.log(leaderboard);
  return (
    <div className={`mb-8 text-left font-mono ${className}`} {...props}>
      <h2 className="mb-6 font-serif text-3xl">Mejores puntajes</h2>
      {leaderboard &&
        leaderboard.map((leader, index) => {
          if (leader.scores) {
            return (
              <div key={index} className="flex justify-between">
                <p>{leader.name}</p>
                <span>{leader.scores.points.toString()}</span>
              </div>
            );
          }
        })}
    </div>
  );
}

export default BestScores;
