import { generateDatesFromYear } from "../utils/generate-dates-from-year";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYear();

const minimumSummaryDateSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDateSize - summaryDates.length;

console.log(summaryDates);

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return (
            <HabitDay 
            key={date.toString()} 
            amount={5}
            completed={Math.round(Math.random() * 5 )}
            />
       )})}


        {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_ , i)=>{
            return(
                
                    <div key={i} className="w-10 h-10 bg-zinc-900 border-zinc-800 border-2 rounded-lg opacity-40 cursor-not-allowed" />
               
            )
        })}
      </div>
    </div>
  );
}