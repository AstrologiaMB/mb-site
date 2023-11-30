import Clock from "@/app/components/organisms/clock/clock";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Dashboard({ children }: Props) {
  return (
    <div className="inline-block gap-3 rounded-lg">
      <div className="flex">
        <span className="flex gap-3">
          <span>⏱️</span>
          <Clock />
          <span>|</span>
          {children}
        </span>
      </div>
    </div>
  );
}
