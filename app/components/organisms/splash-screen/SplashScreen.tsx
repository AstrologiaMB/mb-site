import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function SplashScreen({ children }: Props) {
  return (
    <main className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center">
      {children}
    </main>
  );
}

export default SplashScreen;
