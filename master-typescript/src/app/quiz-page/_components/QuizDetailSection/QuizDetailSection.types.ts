export type IQuiz = {
  id: number;
  title: string;
  description: string;
  answer: string;
};

export type IQuizDetailSectionProps = {
  quiz: IQuiz;
  onNextQuiz: () => void;
};
