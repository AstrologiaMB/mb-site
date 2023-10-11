"use server";

import Link from "next/link";
import BestScores from "../components/best-scores";

function LeaderBoard() {
  return (
    <div>
      <BestScores className="mb-4" />
      <Link className="font-mono" href="/games/astro-quiz">
        &lt; Volver a jugar
      </Link>
    </div>
  );
}

export default LeaderBoard;
