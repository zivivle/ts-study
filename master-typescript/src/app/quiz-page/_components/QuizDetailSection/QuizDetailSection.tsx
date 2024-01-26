"use client";

import { useState } from "react";
import type { IQuizDetailSectionProps } from "./QuizDetailSection.types";

const QuizDetailSection = ({ quiz, onNextQuiz }: IQuizDetailSectionProps) => {
  const { title, description, answer } = quiz;
  const [showAnswerState, setShowAnswerState] = useState(false);
  const isAnswerHidden = showAnswerState === false;

  return (
    <div className="flex flex-col justify-center items-center border-gray-500 border-[1px] p-10">
      <div className=" text-[2rem]">Quiz 1. {title}</div>
      <div className=" text-[1.5rem]">{description}</div>
      {isAnswerHidden ? (
        <button
          onClick={() => {
            setShowAnswerState(true);
          }}
          className="border-[2px] border-black rounded-2xl px-8 py-4 text-[1.5rem] mt-10 hover:bg-amber-100"
        >
          정답은 바로?!
        </button>
      ) : (
        <>
          <div className="mt-8 text-[2rem] font-semibold">{answer}</div>
          <button
            onClick={() => {
              onNextQuiz();
              setShowAnswerState(true);
            }}
            className="border-[2px] border-black rounded-2xl px-4 py-2 text-[1.2rem] mt-10 hover:bg-amber-100"
          >
            Next Quiz &gt;&gt;
          </button>
        </>
      )}
    </div>
  );
};

export default QuizDetailSection;
