import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function SplashScreen({ children }: Props) {
  return (
    <div className="bg-mb-gray flex h-screen flex-col items-center justify-center text-white">
      {children}
    </div>
  );
}

export default SplashScreen;
