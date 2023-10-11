import Clock from "@/app/components/organisms/clock/clock";
import { ReactNode } from "react";
import BestScores from "./best-scores";

type Props = {
  children: ReactNode;
};

export default function Dashboard({ children }: Props) {
  return (
    <div className="inline-block rounded-lg border-2 border-black bg-white p-6 font-mono text-2xl">
      <div className="grid grid-cols-2">
        <span>Tiempo:</span>

        <Clock />
        {children}
      </div>
    </div>
  );
}
