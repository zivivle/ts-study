"use client";

import Image from "next/image";
import mainImage from "../../../public/images/main_image.png";
import QuizDetailSection from "./_components/QuizDetailSection/QuizDetailSection";
import { QUIZZES } from "@/mock/quiz.mock";
import { useState } from "react";

const QuizPage = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

  const handleNextQuiz = () => {
    if (currentQuizIndex < QUIZZES.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100dvh]">
      <Image
        className="mb-[1rem]"
        src={mainImage}
        alt="mainImage"
        width={300}
        height={150}
      />
      <QuizDetailSection
        quiz={QUIZZES[currentQuizIndex]}
        onNextQuiz={handleNextQuiz}
      />
    </div>
  );
};

export default QuizPage;
