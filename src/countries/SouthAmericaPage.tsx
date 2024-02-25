import { useState } from "react";
import { MapQuiz } from "./Map";

const countriesInSouthAmerica = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"];
type Result = { correct: number; incorrect: number };
export const SouthAmericaPage = () => {
  const [result, setResult] = useState<Result>();

  if (result !== undefined) {
    return (
      <div className="h-full flex flex-row">
        <main className="h-full flex flex-col items-center space-y-24 flex-grow">
          <header className="text-gray-100 text-4xl">You have completed the quiz!</header>
          <section className="text-gray-200">
            <div className="text-2xl">Correct: {result.correct}</div>
            <div className="text-2xl">Incorrect: {result.incorrect}</div>
          </section>
        </main>
        <aside className="bg-slate-700 px-12 flex flex-col h-full "></aside>
      </div>
    );
  }

  return <MapQuiz countries={countriesInSouthAmerica} onComplete={(correct, incorrect) => setResult({ incorrect, correct })} />;
};
