"use client";

import { MouseEvent, useState } from "react";
import Button from "@/app/components/atoms/button";

type Props = {
  question: string;
  options: string[];
  correctAnswer: string;
  onFail: () => void;
  onSuccess: () => void;
  onNext?: () => void;
};

export default function Quiz({
  question,
  options,
  correctAnswer,
  onFail,
  onSuccess,
  onNext,
}: Props) {
  const [selectedOption, setSelectedOption] = useState("");
  const dirty = selectedOption.length > 0;
  const isCorrectAnswer = selectedOption === correctAnswer;

  const handleClick = (option: string) => {
    setSelectedOption(option);

    if (option === correctAnswer) {
      onSuccess();
    } else {
      onFail();
    }
  };

  const selectButtonVariant = (
    iterationOption: string,
  ): "success" | "fail" | "primary" | "hint" => {
    //button touched
    if (dirty) {
      //clicked button
      if (isCorrectAnswer) {
        if (iterationOption === correctAnswer) {
          return "success";
        } else {
          return "primary";
        }
      } else {
        if (iterationOption === correctAnswer) {
          return "hint";
        }

        if (iterationOption === selectedOption) {
          return "fail";
        }
      }
    }

    return "primary";
  };

  const handleOnNext = (event: MouseEvent) => {
    event.preventDefault;
    if (onNext) onNext();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-[60px] text-center font-serif text-4xl">{question}</h1>
      <div className="flex w-[300px] flex-col items-center gap-4">
        {options.map((option, index) => (
          <Button
            className="w-full"
            onClick={() => {
              handleClick(option);
            }}
            key={`opt-${index}`}
            variant={selectButtonVariant(option)}
            disabled={dirty}
          >
            {selectButtonVariant(option) === "fail" && (
              <span className="bumping mr-2">😵</span>
            )}
            {selectButtonVariant(option) === "success" && (
              <span className="bumping mr-2">🤩</span>
            )}
            {option}
          </Button>
        ))}
        {onNext && (
          <a
            href="#"
            className={`font-mono ${
              dirty
                ? "opacity-1 pointer-events-auto"
                : "pointer-events-none opacity-0"
            } mt-6`}
            onClick={handleOnNext}
          >
            Siguiente &gt;
          </a>
        )}
      </div>
    </div>
  );
}
