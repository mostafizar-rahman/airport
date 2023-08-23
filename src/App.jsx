import React, { useRef, useState } from "react";
import axios from "axios";
import RadioButton from "./Components/Commons/RadioButton/RadioButton";
import SelectField from "./Components/Commons/SelectField/SelectField";
import DateField from "./Components/Commons/DateField/DateField";
import PersonCountField from "./Components/Commons/PersonCountField/PersonCountField";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  isBefore,
} from "date-fns";

import Calendar from "./Components/Commons/Calendar/Calendar";
const App = () => {
  const [selectedOption, setSelectedOption] = useState("oneWay");
  const [copiedMultyCity, setCopiedMultyCity] = useState([]);
  const multyCityRef = useRef(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  console.log(copiedMultyCity);

  const handleCopiedMultyCity = () => {
    const newMultyCityRef = multyCityRef.current.cloneNode(true);
    setCopiedMultyCity([...copiedMultyCity, newMultyCityRef]);
  };

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);

  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <section className="container mt-16 bg-white">
      <div
        className="w-full  relative  rounded-xl pt-5 px-6 my-5 "
        style={{ boxShadow: "0px 0px 20px 2px rgba(0,0,0,0.3)" }}
      >
        <div className="flex">
          <button className="px-8 py-3 text-xl font-bold text-primary bg-transparent  border-b-2 border-primary hover:text-primary transition-all">
            Flight
          </button>
          <button className="px-8 py-3 text-xl   bg-transparent   hover:text-primary transition-all">
            Hotel
          </button>
          <button className="px-8 py-3 text-xl  bg-transparent   hover:text-primary transition-all">
            Tour
          </button>
        </div>
        {/* -Radio button */}
        <div className="flex pb-2 space-x-4 pt-4">
          <RadioButton
            label="One Way"
            value="oneWay"
            checked={selectedOption === "oneWay"}
            onChange={handleOptionChange}
          />
          <RadioButton
            label="Round Trip"
            value="roundTrip"
            checked={selectedOption === "roundTrip"}
            onChange={handleOptionChange}
          />
          <RadioButton
            label="Multy City"
            value="multyCity"
            checked={selectedOption === "multyCity"}
            onChange={handleOptionChange}
          />
        </div>
        {/* -- Select Field */}
        <div className="pt-4 pb-3">
          <div className="grid grid-cols-12 gap-3">
            <SelectField />
            <div className="relative col-span-12 md:col-span-6 lg:col-span-3">
              <DateField
                date={"defaultDate"}
                selectedDay={selectedDay}
                selectedOption={selectedOption}
              />
              <Calendar
                previousMonth={previousMonth}
                nextMonth={nextMonth}
                currentMonth={currentMonth}
                days={days}
                format={format}
                firstDayCurrentMonth={firstDayCurrentMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              />
            </div>

            <PersonCountField />
          </div>
        </div>
        {/* --- Copyed elements */}
        {/* {copiedMultyCity.length && copiedMultyCity.map((d)=> <div>{d}</div> )} */}
        {/* -- Default field for multy city radio button */}
        {selectedOption === "multyCity" && (
          <div ref={multyCityRef} className=" pb-4">
            <div className="grid grid-cols-12 gap-3">
              <SelectField />
              <DateField selectedOption={selectedOption} />
              <div className="flex flex-col justify-center border rounded-[1rem] px-3 py-1 cursor-pointer text-secondary col-span-12 md:col-span-6 lg:col-span-3">
                <div class="mx-4 cursor-pointer w-max ">
                  <p
                    onClick={handleCopiedMultyCity}
                    class="text-sm flex items-center font-bold text-primary hover:text-white transition-all duration-200 hover:bg-primary  px-3   py-1 border rounded-md border-primary "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>{" "}
                    Add Another city
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default App;
