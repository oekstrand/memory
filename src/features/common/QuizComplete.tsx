import { Link } from "@tanstack/react-router";

interface QuizCompleteProps {
  result: {
    correct: number;
    incorrect: number;
  };
}

export const QuizComplete = ({ result }: QuizCompleteProps) => {
  return (
    <div className="h-full flex flex-row">
      <main className="h-full flex flex-col items-center space-y-24 flex-grow">
        <header className="text-gray-100 text-4xl">You have completed the quiz!</header>
        <section className="text-gray-200">
          <div className="text-2xl">Correct: {result.correct}</div>
          <div className="text-2xl">Incorrect: {result.incorrect}</div>
        </section>
        <button>
          <Link to="/" className="bg-gray-300 w-36 rounded-lg shadow-lg p-4 text-xl h-8 text-slate-700 text-center">
            Home
          </Link>
        </button>
      </main>
    </div>
  );
};
