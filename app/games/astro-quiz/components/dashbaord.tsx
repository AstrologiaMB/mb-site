import Clock from "@/app/components/organisms/clock/clock";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Dashboard({ children }: Props) {
  return (
    <div className="inline-block gap-3 rounded-lg font-mono text-2xl">
      <div className="grid grid-cols-2">
        <span className="flex gap-3">
          <span>⏱️</span>
          <Clock />
          <span>|</span>
        </span>
        {children}
      </div>
    </div>
  );
}
