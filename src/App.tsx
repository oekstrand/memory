import { useState } from "react";

const pegs = {
  "00": "Sauce",
  "01": "Seed",
  "02": "Sun",
  "03": "Sumo",
  "04": "Sir",
  "05": "Soul",
  "06": "Sushi",
  "07": "Ski",
  "08": "Sofa",
  "09": "Soap",
  "10": "Dice",
  "11": "Dad",
  "12": "DNA",
  "13": "Adam",
  "14": "Thor",
  "15": "Adele",
  "16": "DJ",
  "17": "Dog",
  "18": "TV",
  "19": "Tuba",
  "20": "Nose",
  "21": "Net",
  "22": "Nun",
  "23": "Nemo",
  "24": "Nero",
  "25": "Nail",
  "26": "Nacho",
  "27": "Ink",
  "28": "Knife",
  "29": "NBA",
  "30": "Mouse",
  "31": "Mat",
  "32": "Moon",
  "33": "Mummy",
  "34": "Mario",
  "35": "Mole",
  "36": "Match",
  "37": "Mickey",
  "38": "Mafia",
  "39": "Map",
  "40": "Rose",
  "41": "Radio",
  "42": "Rain",
  "43": "Rum",
  "44": "Error",
  "45": "Ariel",
  "46": "Arch",
  "47": "Rocky",
  "48": "Roof",
  "49": "Harp",
  "50": "Lasso",
  "51": "Lady",
  "52": "Lion",
  "53": "Lime",
  "54": "Hillary",
  "55": "Lily",
  "56": "Leech",
  "57": "Leek",
  "58": "Lava",
  "59": "Lip",
  "60": "Cheese",
  "61": "Cheetah",
  "62": "Genie",
  "63": "Jam",
  "64": "Cherry",
  "65": "Chilli",
  "66": "Yo-yo",
  "67": "Chick",
  "68": "Chef",
  "69": "Ship",
  "70": "Goose",
  "71": "Cat",
  "72": "Gun",
  "73": "Gum",
  "74": "Car",
  "75": "Koala",
  "76": "Cage",
  "77": "Cake",
  "78": "Coffee",
  "79": "Cube",
  "80": "Vase",
  "81": "Foot",
  "82": "Fan",
  "83": "Foam",
  "84": "Fire",
  "85": "Fly",
  "86": "Fish",
  "87": "Fig",
  "88": "FIFA",
  "89": "Phoebe",
  "90": "Bus",
  "91": "Bat",
  "92": "Piano",
  "93": "Beam",
  "94": "Beer",
  "95": "Apple",
  "96": "Bush",
  "97": "Book",
  "98": "Beef",
  "99": "Pope",
};

const pegMap = new Map(Object.entries(pegs));
type Mode = "zero" | "twenty" | "forty" | "sixty" | "eighty";
const NumberPanel = ({ number }: { number: string }) => {
  return <div className="bg-slate-800 text-white text-7xl p-10 rounded-xl shadow-lg">{number}</div>;
};

const getNextRandomNumberFromZeroToNinetyNine = (mode: Mode) => {
  //Get number based on mode
  const start = mode === "zero" ? 0 : mode === "twenty" ? 20 : mode === "forty" ? 40 : mode === "sixty" ? 60 : 80;
  const end = start + 20;
  const newNumber = Math.floor(Math.random() * (end - start) + start);

  //Ensure that there are always to digits in the number
  return newNumber < 10 ? "0" + newNumber : newNumber.toString();
};

function App() {
  const [currentNumber, setCurrentNumber] = useState(getNextRandomNumberFromZeroToNinetyNine("zero"));
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [invalidAnswers, setInvalidAnswers] = useState(0);
  const [lastAnswer, setLastAnswer] = useState("");
  const [lastCorrectAnswer, setLastCorrectAnswer] = useState("");
  const [mode, setMode] = useState<Mode>("zero");

  const onButtonClick = () => {
    const correct = pegMap.get(currentNumber.toString()) || "";
    if (correct === currentAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setInvalidAnswers(invalidAnswers + 1);
    }
    setLastAnswer(currentAnswer);
    setLastCorrectAnswer(correct);

    setCurrentNumber(getNextRandomNumberFromZeroToNinetyNine(mode));
    setCurrentAnswer("");
  };

  return (
    <main className="bg-slate-700 h-screen text-center flex flex-col space-y-10">
      <header className="h-48 flex flex-row self-center space-x-2 p-4">
        <div className="sm:flex  sm:space-x-10 mr-10">
          <div className="flex ">
            <input id={"zero"} name="notification-method" type="radio" checked={mode === "zero"} onChange={() => setMode("zero")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label htmlFor={"zero"} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
              0-20
            </label>
          </div>
          <div className="flex ">
            <input id={"twenty"} name="notification-method" type="radio" checked={mode === "twenty"} onChange={() => setMode("twenty")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label htmlFor={"twenty"} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
              20-40
            </label>
          </div>
          <div className="flex ">
            <input id={"forty"} name="notification-method" type="radio" checked={mode === "forty"} onChange={() => setMode("forty")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label htmlFor={"forty"} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
              40-60
            </label>
          </div>
          <div className="flex ">
            <input id={"sixty"} name="notification-method" type="radio" checked={mode === "sixty"} onChange={() => setMode("sixty")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label htmlFor={"sixty"} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
              60-80
            </label>
          </div>
          <div className="flex ">
            <input id={"eighty"} name="notification-method" type="radio" checked={mode === "eighty"} onChange={() => setMode("eighty")} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label htmlFor={"eighty"} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
              80-100
            </label>
          </div>
        </div>
        <span className="text-green-600">Correct answers: {correctAnswers}</span>
        <span className="text-red-600">Incorrect answers: {invalidAnswers}</span>
      </header>
      <section className="flex justify-center">{<NumberPanel number={currentNumber} />}</section>
      <footer className="flex flex-row self-center space-x-2">
        <input
          type="text"
          value={currentAnswer}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onButtonClick();
            }
          }}
          onChange={(e) => {
            //Ensure that the answer is always in lower case with first letter in upper case
            const value = e.target.value;
            setCurrentAnswer(value.charAt(0).toUpperCase() + value.slice(1));
          }}
          className="rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-0  focus:ring-0  sm:text-sm sm:leading-6"
        />
        <button onClick={onButtonClick} className="bg-green-800 text-white text-2xl px-2  rounded-xl shadow-lg">
          &gt;
        </button>
      </footer>
      <footer className="text-white pt-24 flex flex-col items-center">
        <div className="bg-slate-500 p-8 rounded-xl shadow-2xl">
          {lastAnswer === lastCorrectAnswer ? <h1 className="text-3xl text-green-500 font-medium">Correct!</h1> : <h1 className="text-3xl text-red-500 font-medium">Incorrect!</h1>}
          <div>Your answer: {lastAnswer}</div>
          <div>Correct answer: {lastCorrectAnswer}</div>
        </div>
      </footer>
    </main>
  );
}

export default App;
