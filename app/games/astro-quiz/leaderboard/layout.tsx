"use client";

import SplashScreen from "@/app/components/organisms/splash-screen";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

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
