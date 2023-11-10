import AstroQuiz from "./components/astro-quiz";
import { determineZodiacSign } from "@/app/utils/zodiacSignCalculator";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import SplashScreen from "@/app/components/organisms/splash-screen";

async function AstroQuizGame() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <SplashScreen>
        <AstroQuiz
          userName={`${session?.user?.name} ${determineZodiacSign(
            session?.user?.dateOfBirth,
          )}`}
        />
      </SplashScreen>
    );
  }
}

export default AstroQuizGame;
