import southAmericaHigh from "@amcharts/amcharts5-geodata/region/world/southAmericaHigh";
import { useLayoutEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";

import * as am5map from "@amcharts/amcharts5/map";
interface MapQuizProps {
  onComplete: (correct: number, incorrect: number) => void;
  countries: string[];
}
export const CountryQuiz = ({ onComplete, countries }: MapQuizProps) => {
  const [remainingCountries, setRemainingCountries] = useState(countries);
  const [nofCorrectAnswers, setNofCorrectAnswers] = useState(0);
  const [nofIncorrectAnswers, setNofIncorrectAnswers] = useState(0);

  // Set a random country to be the correct answer in usestate
  const [correctAnswer, setCorrectAnswer] = useState(remainingCountries[Math.floor(Math.random() * remainingCountries.length)]);

  useLayoutEffect(() => {
    const checkAnswer = (answer: string) => {
      console.log(answer, correctAnswer);
      if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        setNofCorrectAnswers((value) => value + 1);
        setRemainingCountries((countries) => countries.filter((country) => country !== answer));
        if (remainingCountries.length === 0) {
          onComplete(nofCorrectAnswers, nofIncorrectAnswers);
        }
        setCorrectAnswer(remainingCountries[Math.floor(Math.random() * remainingCountries.length)]);
      } else {
        setNofIncorrectAnswers((value) => value + 1);
      }
    };
    const root = am5.Root.new("chartdiv");
    const colors = am5.ColorSet.new(root, {});
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoNaturalEarth1(),
      })
    );

    const saSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: southAmericaHigh,
        exclude: ["AQ"],
      })
    );

    saSeries.mapPolygons.template.setAll({
      tooltipText: "",
      interactive: true,
      cursorOverStyle: "pointer",
      fill: am5.color(0xaaaaaa),
      templateField: "polygonSettings",
    });

    saSeries.mapPolygons.template.events.on("click", (ev) => {
      const dataItem = ev.target.dataItem;
      const data = dataItem?.dataContext as { name: string };
      checkAnswer(data.name);
    });
    //   });

    saSeries.mapPolygons.template.states.create("hover", {
      fill: colors.getIndex(1),
    });

    return () => {
      root.dispose();
    };
  }, [correctAnswer, nofCorrectAnswers, nofIncorrectAnswers, onComplete, remainingCountries]);

  return (
    <div className="h-full flex flex-row">
      <main className="h-full flex flex-col items-center space-y-24 flex-grow">
        <header className="text-gray-100 text-4xl">Click on {correctAnswer}</header>
        <div id="chartdiv" className="w-full flex-grow h-full"></div>
      </main>
      <aside className="bg-slate-700 px-12 flex flex-col h-full ">
        <header className="text-4xl text-gray-100">Results</header>
        <section className="text-gray-200">
          <div>Correct: {nofCorrectAnswers}</div>
          <div>Incorrect: {nofIncorrectAnswers}</div>
        </section>
      </aside>
    </div>
  );
};
