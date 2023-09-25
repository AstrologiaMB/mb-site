"use client";

import { useEffect, useState, useTransition } from "react";
import { getQuestionPool, type Quiz } from "@/app/utils/questions-with-answers";
import QuizPart from "./quiz";
import Dashboard from "./dashbaord";
import { updateLeaderboard } from "@/app/users/action";

type Props = {
  userName: string;
  sessionId: string;
};

/**
 * POINTS
 * BASE: 10
 * TIME TO BONUS: 30 sec (by 5)
 * RETURN TOTAL
 */

export default function AstroQuiz({ userName, sessionId }: Props) {
  const [points, setPoints] = useState(0);
  const [questionStartedAt, setQuestionStartedAt] = useState(new Date());
  const [questionsPool, setQuestionsPool] = useState<Quiz[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Quiz | null>(null);
  const [pending, startTransition] = useTransition();
  const BASE_POINTS = 0;
  const EXTRA_POINTS = 6;

  const finishGame = () => {
    startTransition(() => {
      updateLeaderboard(sessionId, points);
    });
  };

  /**
   * Assign the first element from the question pool to the current Quiz question
   * Shift he first element of the curren pool
   */
  const updatePool = () => {
    setQuestionStartedAt(new Date());
    console.log(questionsPool);
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
    setPoints((prev) => Math.max(0, prev - 5));
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
  };

  const onQuizNext = () => {
    updatePool();
  };

  useEffect(() => {
    setQuestionsPool(() => {
      const questions = getQuestionPool().slice(0, 5);
      console.log(questions.length);
      setCurrentQuestion(questions[0]);

      return questions.slice(0, 5).splice(1);
    });
  }, []);

  return (
    <div className="flex w-full grow flex-col items-center justify-between">
      <header className="mt-16 grid w-full grid-cols-3">
        <span className="text-left">{userName}</span>
        <h1 className="text-center">Astro Quiz</h1>
        <div className="text-right">
          <Dashboard>
            <span>Puntos: </span>
            <span>{points}</span>
          </Dashboard>
        </div>
      </header>

      {currentQuestion ? (
        <QuizPart
          key={currentQuestion.id}
          onFail={onQuizfail}
          onSuccess={onQuizSuccess}
          onNext={onQuizNext}
          question={currentQuestion.question}
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correctAnswer}
        />
      ) : (
        <p>TUS PUNTOS: {points}</p>
      )}
      <div></div>
    </div>
  );
}
