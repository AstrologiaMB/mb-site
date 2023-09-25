"use server";

import { getLeaderBoard } from "@/app/users/action";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

async function BestScores({ className, ...props }: Props) {
  const leaderboard = await getLeaderBoard();
  return (
    <div className={`text-left ${className}`} {...props}>
      <h2 className="font-bold">Mejores puntajes</h2>
      {leaderboard &&
        leaderboard.map((leader, index) => {
          if (leader.scores) {
            return (
              <div key={index} className="flex justify-between">
                <p>{leader.name}</p>
                <span>
                  {
                    leader.scores!.find((score) => score.game === "AstroQuiz")
                      ?.points
                  }
                </span>
              </div>
            );
          }
        })}
    </div>
  );
}

export default BestScores;
