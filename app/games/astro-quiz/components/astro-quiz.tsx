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
  }, []);

  return (
    <div className="flex w-full grow flex-col items-center justify-between">
      <header className="mt-16 grid w-full grid-cols-2">
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
        <span className="text-left font-mono text-2xl">{userName}</span>
        <div className="text-right">
          <Dashboard key={clockKey}>
            <span>Puntos: {points}</span>
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
          <div className="mt-[72px] flex flex-col items-center font-mono">
            <a
              href="#"
              className="bold text-[18px] font-medium"
              onClick={(event) => {
                event.preventDefault();
                skipQuestion();
              }}
            >
              Saltear pregunta
            </a>
            <a
              className="mt-4 text-[18px]"
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setGame();
              }}
            >
              Comenzar nueva partida
            </a>
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
}
