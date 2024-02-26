import { useState } from "react";
import { Button } from "./Button";
import { TextBox } from "./TextBox";
import { QuizComplete } from "./QuizComplete";

interface QuizProps {
  title: string;
  quizData: { question: string; answer: string; memoryRule: string }[];
}

export const Quiz = ({ title, quizData }: QuizProps) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [invalidAnswers, setInvalidAnswers] = useState(0);
  const [answerInput, setAnswerInput] = useState("");
  const [lastAnswerWasCorrect, setLastAnswerWasCorrect] = useState(true);
  const [index, setIndex] = useState(0);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswerInput(event.target.value);
  };

  if (index > quizData.length - 1) {
    return <QuizComplete result={{ correct: correctAnswers, incorrect: invalidAnswers }} />;
  }

  const currentQuestion = quizData[index].question;
  const currentAnswer = quizData[index].answer;
  const lastMemoryRule = quizData[index - 1]?.memoryRule;
  const lastCorrectAnswer = quizData[index - 1]?.answer;

  const onButtonClick = () => {
    if (currentAnswer === answerInput) {
      setCorrectAnswers(correctAnswers + 1);
      setLastAnswerWasCorrect(true);
    } else {
      setInvalidAnswers(invalidAnswers + 1);
      setLastAnswerWasCorrect(false);
    }
    setAnswerInput("");
    setIndex(index + 1);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <div className="h-full flex flex-row">
      <main className="h-full flex flex-col items-center space-y-24 flex-grow">
        <header className="text-gray-100 text-4xl">{title} </header>
        <div className="w-full h-full items-center flex flex-col">
          <div className="text-gray-200 text-2xl mb-2">{currentQuestion}</div>
          <TextBox label="" placeholder="" type="text" id="answer" name="answer" value={answerInput} onChange={onInputChange} onKeyDown={onKeyDown} />
          <Button title="OK" onClick={onButtonClick} className="mt-3" />
          {index !== 0 && (
            <div className=" mt-24 bg-slate-600 shadow-lg rounded-xl px-12 pt-4 pb-8 text-xl w-96">
              <div className={`${lastAnswerWasCorrect ? "text-green-500" : "text-red-500"} font-medium`}>{lastAnswerWasCorrect ? "Correct!" : "Incorrect!"}</div>

              <div className="text-gray-300 mt-2">
                <div>Correct Answer: {lastCorrectAnswer}</div>
                <div className="mt-4"> Memory Rule</div>
                <div className="italic text-sm text-white text-wrap max-w-96">{lastMemoryRule}</div>
              </div>
            </div>
          )}
        </div>
      </main>
      <aside className="bg-slate-700 px-12 flex flex-col h-full ">
        <header className="text-4xl text-gray-100">Results</header>
        <section className="text-gray-200">
          <div>Correct: {correctAnswers}</div>
          <div>Incorrect: {invalidAnswers}</div>
        </section>
      </aside>
    </div>
  );
};
