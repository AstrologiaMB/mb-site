import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function SplashScreen({ children }: Props) {
  return (
    <main className="bg-mb-gray flex h-screen flex-col items-center justify-center text-white">
      {children}
    </main>
  );
}

export default SplashScreen;
