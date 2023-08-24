import React, { useEffect, useRef, useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
  addDays,
} from "date-fns";
import { HiOutlinePlus } from "react-icons/hi";

import RadioButton from "./Components/Commons/RadioButton/RadioButton";
import SelectField from "./Components/Commons/SelectField/SelectField";
import DateField from "./Components/Commons/DateField/DateField";
import PersonCountField from "./Components/Commons/PersonCountField/PersonCountField";
import Calendar from "./Components/Commons/Calendar/Calendar";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("oneWay");
  const [copiedMultyCity, setCopiedMultyCity] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const multyCityRef = useRef(null);
  const copyElementRef = useRef();

  const today = startOfToday();
  const prevDate = addDays(new Date(),  1);
  const [selectedDay, setSelectedDay] = useState(today);
  const [returnDate, setReturnDate] = useState(prevDate);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
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

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCopiedMultyCity = () => {
    const newMultyCityRef = multyCityRef.current.innerHTML;
    console.log(newMultyCityRef);

    newMultyCityRef.onclick = multyCityRef.current.onclick;
    console.log(click);

    copyElementRef.current.appendChild(newMultyCityRef);
    // newMultyCityRef.onClick = click;

    // const clonedElementsCopy = [...copiedMultyCity];
    // clonedElementsCopy.push(newMultyCityRef);
    // setCopiedMultyCity(clonedElementsCopy);
  };

  console.log(copiedMultyCity);

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
            <SelectField radiobuttonValue={selectedOption} />
            <DateField
              selectedDay={selectedDay}
              selectedOption={selectedOption}
              previousMonth={previousMonth}
              nextMonth={nextMonth}
              days={days}
              firstDayCurrentMonth={firstDayCurrentMonth}
              setSelectedDay={setSelectedDay}
              returnDate={returnDate}
              setReturnDate={setReturnDate}
            />

            <PersonCountField />
          </div>
        </div>
        {/* --- Copyed elements */}
        {selectedOption === "multyCity" && (
          // copiedMultyCity.map((html, index) => (
          //   <div
          //     className="pb-3"
          //     key={index}
          //     dangerouslySetInnerHTML={{ __html: html }}
          //   />
          // ))
          <div ref={copyElementRef}></div>
        )}

        {/* -- Default field for multy city radio button */}
        {selectedOption === "multyCity" && (
          <div ref={multyCityRef} className=" pb-4">
            <div className="grid grid-cols-12 gap-3">
              <SelectField radiobuttonValue={selectedOption} />
              <div
                onClick={() => setDropDown(!dropDown)}
                className={`cursor-pointer relative flex flex-col justify-center col-span-12 md:col-span-6 lg:col-span-3 border rounded-[1rem] px-3 py-1  text-secondary ${
                  dropDown ? "bg-gray-100" : ""
                }`}
              >
                <div>
                  <small className="text-sm">Departure</small>

                  <h2 className="text-xl  leading-8   font-medium">
                    Select a date
                  </h2>
                </div>
                <div
                  className={`absolute border-t  w-[20rem]  z-10 bg-white drop-shadow-2xl cursor-default rounded-md  top-full -left-7  md:left-0 ${
                    dropDown ? "block" : "hidden"
                  }`}
                >
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
              </div>

              <div className="flex flex-col justify-center border rounded-[1rem] px-3 py-1 cursor-pointer text-secondary col-span-12 md:col-span-6 lg:col-span-3">
                <div className="mx-4 cursor-pointer w-max ">
                  <p
                    onClick={handleCopiedMultyCity}
                    className="text-sm flex items-center font-bold text-primary hover:text-white transition-all duration-200 hover:bg-primary  px-3   py-1 border rounded-md border-primary "
                  >
                    <HiOutlinePlus />
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
