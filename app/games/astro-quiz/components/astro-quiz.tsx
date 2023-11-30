"use client";

import { useEffect, useState, useTransition } from "react";
import { type Quiz } from "@/app/utils/questions-with-answers";
import QuizPart from "./quiz";
import Dashboard from "./dashbaord";
import { MDB_UpdateUserGame } from "@/app/users/action";
import { generatePool } from "@/app/utils/zodiac";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

type Props = {
  userName: string;
};

/**
 * POINTS
 * BASE: 10
 * TIME TO BONUS: 30 sec (by 5)
 * RETURN TOTAL
 */

export default function AstroQuiz({ userName }: Props) {
  const [points, setPoints] = useState(0);
  const [questionStartedAt, setQuestionStartedAt] = useState(new Date());
  const [clockKey, setClockKey] = useState(Math.random());
  const [questionsPool, setQuestionsPool] = useState<Quiz[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Quiz | null>(null);
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const { data: session, status } = useSession();

  const BASE_POINTS = 10;
  const EXTRA_POINTS = 6;

  const finishGame = () => {
    startTransition(async () => {
      try {
        if (session?.user?.email) {
          await MDB_UpdateUserGame(session?.user?.email, points);
          router.push("/games/astro-quiz/leaderboard");
        }
      } catch {
        console.log("Error");
      }
    });
  };

  /**
   * Assign the first element from the question pool to the current Quiz question
   * Shift he first element of the curren pool
   */
  const updatePool = () => {
    setQuestionStartedAt(new Date());
    if (questionsPool && questionsPool.length > 0) {
      setCurrentQuestion(() => questionsPool[0]);
    } else {
      setCurrentQuestion(null);
      finishGame();
    }

    setQuestionsPool(() => {
      if (questionsPool) {
        return questionsPool.slice(1);
      }

      return null;
    });

    setClockKey(Math.random());
  };

  const onQuizfail = () => {
    setPoints((prev) => Math.max(0, prev - 0));
    setTimeout(() => {
      updatePool();
    }, 1500);
  };

  const onQuizSuccess = () => {
    const currentDate = new Date().valueOf();

    // Boost reward, users can get an extra of 6 points per Question if they select the correct answer within the first 30 seconds.
    const elapsedTime: number = Math.min(
      30,
      (currentDate - questionStartedAt.valueOf()) / 1000,
    );
    const calculatedPoints =
      BASE_POINTS + (EXTRA_POINTS - Math.floor(elapsedTime / 5));
    setPoints((prev) => prev + calculatedPoints);

    setTimeout(() => {
      updatePool();
    }, 1500);
  };

  const skipQuestion = () => {
    if (questionsPool) {
      const questions = [...questionsPool];
      const firstQuestion = currentQuestion;

      if (firstQuestion) {
        questions.push(firstQuestion);

        setCurrentQuestion(questions[0]);
        setQuestionStartedAt(new Date());
        setQuestionsPool(() => {
          setCurrentQuestion(questions[0]);

          return questions.splice(1);
        });

        setClockKey(Math.random());
      }
    }
  };

  const setGame = () => {
    setQuestionsPool(() => {
      let questions = generatePool();
      setCurrentQuestion(questions[0]);

      return questions.splice(1);
    });

    setPoints(0);

    setQuestionStartedAt(new Date());

    setClockKey(Math.random());
  };

  useEffect(() => {
    setGame();

    (function (d) {
      var config = {
          kitId: "zub8uxw",
          scriptTimeout: 3000,
          async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
          h.className =
            h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
      h.className += " wf-loading";
      tk.src = "https://use.typekit.net/" + config.kitId + ".js";
      tk.async = true;
      // @ts-ignore
      tk.onload = tk.onreadystatechange = function () {
        // @ts-ignore
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
          // @ts-ignore
          Typekit.load(config);
        } catch (e) {}
      };
      // @ts-ignore
      s.parentNode.insertBefore(tk, s);
    })(document);
  }, []);

  return (
    <div className="flex w-full grow flex-col items-center md:justify-between">
      <header className="mt-10 flex w-full flex-col items-center md:mt-16 md:flex-row md:justify-between">
        {/*
        <button
          onClick={() =>
            signOut({ redirect: false }).then(() => {
              router.push("/");
            })
          }
        >
          Logout
        </button>
         */}
        <span className="text-left font-mono text-xl md:text-2xl">
          {userName}
        </span>
        <div className="flex gap-[6px] text-right font-mono text-xl md:text-2xl">
          {questionsPool && <span>#️⃣</span>}
          <span>{questionsPool ? `${20 - questionsPool.length}/20` : ""}</span>
          <span>|</span>
          <Dashboard key={clockKey}>
            <span>Puntos:{points}</span>
          </Dashboard>
        </div>
      </header>
      {currentQuestion && (
        <div>
          <QuizPart
            key={currentQuestion.id}
            onFail={onQuizfail}
            onSuccess={onQuizSuccess}
            question={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
          />
          <div className="mt-[52px] flex flex-col items-center font-mono">
            <a
              href="#"
              className="bold text-md font-medium md:text-[18px]"
              onClick={(event) => {
                event.preventDefault();
                skipQuestion();
              }}
            >
              Saltear pregunta ➡️
            </a>
            <a
              className="text-md mt-4 md:text-[18px]"
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setGame();
              }}
            >
              Comenzar nueva partida 🔄
            </a>
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
}
