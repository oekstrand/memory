import { Quiz } from "../common/Quiz";

const quizDataForSouthAmerica = [
  { question: "What is the capital of Argentina?", answer: "Buenos Aires", memoryRule: "There is new air flowing out from the chicken in the eye of the guy" },
  { question: "What is the capital of Bolivia?", answer: "Sucre", memoryRule: "The urn is filled with sugar" },
  { question: "What is the capital of Brazil?", answer: "Brasilia", memoryRule: "Sounds like Brazil" },
  { question: "What is the capital of Chile?", answer: "Santiago", memoryRule: "Saint Jag, I eat a Chilli and become a saint" },
  { question: "What is the capital of Colombia?", answer: "Bogota", memoryRule: "Bow Guitar, the cool cow is playing a guitar and uses it as a bow" },
  { question: "What is the capital of Ecuador?", answer: "Quito", memoryRule: "The water splashing out in the pacific can be turned off by" },
  { question: "What is the capital of Guyana?", answer: "Georgetown", memoryRule: "George Bush is carrying Princess Diana on his head" },
  { question: "What is the capital of Paraguay?", answer: "Asuncion", memoryRule: "The parents of the little baby is raising the baby into air, ascending" },
  { question: "What is the capital of Peru?", answer: "Lima", memoryRule: "The mountain that the mountain climber is climbing up is filled with Pears and Limes" },
  { question: "What is the capital of Suriname?", answer: "Paramaribo", memoryRule: "The squeezed little creature doesn't want to be there and says come and go Para mi ribboat" },
  { question: "What is the capital of Uruguay?", answer: "Montevideo", memoryRule: "The Euro Guy has a video shop where there is a mount of videos in a pile" },
  { question: "What is the capital of Venezuela?", answer: "Caracas", memoryRule: "The venetian guy is holding a maracas" },
];

export const SouthAmericaCitiesPage = () => {
  return <Quiz title="South American Capitals" quizData={quizDataForSouthAmerica} />;
};
