import Image from "next/image";
import Button from "@/app/components/atoms/button";
import SplashScreen from "@/app/components/organisms/splash-screen";

function RapidTest() {
  return (
    <SplashScreen>
      <Image
        className="mb-16"
        src="/astroquiz.svg"
        width={140}
        height={140}
        alt="Picture of the logo"
      />
      <Image
        className="mb-10"
        src="/AstroQuizIso.svg"
        width={660}
        height={130}
        alt="Astro Quiz Isotype"
      />
      <p className="mb-16">
        POR ACADEMIA DE{" "}
        <a className="text-mb-green underline" href="#">
          ASTROLOGÍA AVANZADA MB
        </a>
      </p>
      <Button>Jugar</Button>
    </SplashScreen>
  );
}

export default RapidTest;
