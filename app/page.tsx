import Image from "next/image";
import SplashScreen from "./components/organisms/splash-screen";

export default function Home() {
  return (
    <SplashScreen>
      <p className="mb-16">
        <a className="text-mb-green underline" href="/games/astro-quiz">
          GAME
        </a>
      </p>
    </SplashScreen>
  );
}
