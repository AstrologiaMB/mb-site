import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  fullScreen?: boolean;
  background?: boolean;
};

function SplashScreen({ children, className, fullScreen, background }: Props) {
  return (
    <main
      className={`mx-auto flex h-screen ${
        !fullScreen && "max-w-7xl"
      } flex-col items-center justify-center ${
        background && "bg-[url('/BG.png')] bg-cover"
      } ${className}`}
    >
      {children}
    </main>
  );
}

export default SplashScreen;
