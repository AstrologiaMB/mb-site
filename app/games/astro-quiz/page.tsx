import SplashScreen from "@/app/components/organisms/splash-screen";
import { cookies } from "next/headers";
import { getSessionData } from "@/app/users/action";
import FakeQuestions from "./components/fake-questions";
import AstroQuiz from "./components/astro-quiz";
import { determineZodiacSign } from "@/app/utils/zodiacSignCalculator";
import BestScores from "./components/best-scores";

async function RapidTest() {
  const sessionId = cookies().get("session")?.value;
  let sessionData;
  if (sessionId) {
    sessionData = await getSessionData(sessionId);
  }

  return sessionData && sessionId ? (
    <>
      <BestScores />
      <AstroQuiz
        userName={`${sessionData.name} - ${determineZodiacSign(
          sessionData.dateOfBirth,
        )}`}
        sessionId={sessionId}
      />
    </>
  ) : (
    <FakeQuestions />
  );
}

export default RapidTest;
