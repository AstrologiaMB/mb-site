import Image from "next/image";
import SplashScreen from "./components/organisms/splash-screen";

export default function Home() {
  return (
    <SplashScreen>
      <p className="mb-16">
        POR ACADEMIA DE{" "}
        <a className="text-mb-green underline" href="#">
          ASTROLOGÍA AVANZADA MB
        </a>
      </p>
    </SplashScreen>
  );
}
