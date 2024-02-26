import { useState } from "react";
import { CountryQuiz } from "./CountryQuiz";
import { QuizComplete } from "../common/QuizComplete";

const countriesInSouthAmerica = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"];
type Result = { correct: number; incorrect: number };
export const SouthAmericaPage = () => {
  const [result, setResult] = useState<Result>();

  if (result !== undefined) {
    return <QuizComplete result={result} />;
  }

  return <CountryQuiz countries={countriesInSouthAmerica} onComplete={(correct, incorrect) => setResult({ incorrect, correct })} />;
};
