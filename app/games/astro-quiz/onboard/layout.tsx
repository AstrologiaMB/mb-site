"use client";

import SplashScreen from "@/app/components/organisms/splash-screen";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function GamesLayout({ children }: Props) {
  return (
    <SplashScreen fullScreen className="bg-mb-dark-gray font-sans text-white">
      {children}
    </SplashScreen>
  );
}

export default GamesLayout;
