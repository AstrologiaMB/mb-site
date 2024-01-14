import SplashScreen from "./components/organisms/splash-screen";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import Button from "./components/atoms/button";
import ClientFont from "./components/atoms/client-font";
// /games/astro-quiz
// /auth/signin
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <SplashScreen fullScreen background>
      <ClientFont />
      <Image
        className="mb-8"
        src="/AstroQuizIso.svg"
        width={790}
        height={157}
        alt="Picture of the author"
      />
      <h1 className="mb-16 text-center font-mono text-[20px] text-white">
        POR ACADEMIA DE{" "}
        <a
          className="inline-block text-mb-green"
          href="https://mariablaquier.com/"
          target="_blank"
        >
          ASTROLOGÍA AVANZADA MB
        </a>
      </h1>
      <p className="mb-4">
        {session ? (
          <Button variant="cta">
            <a className="inline-block px-[74px] py-4" href="/games/astro-quiz">
              Jugar
            </a>
          </Button>
        ) : (
          <Button variant="cta">
            <a className="inline-block px-[74px] py-4" href="/auth/signin">
              Comenzar
            </a>
          </Button>
        )}
      </p>
    </SplashScreen>
  );
}
