import React, { useState } from "react";
import { format, isAfter, isToday } from "date-fns";
import Calendar from "../Calendar/Calendar";
import ReturnCalendar from "../../ReturnCalender/ReturnCalender";

const DateField = ({
  selectedOption,
  selectedDay,
  previousMonth,
  nextMonth,
  days,
  firstDayCurrentMonth,
  setSelectedDay,
  returnDate,
  setReturnDate,
}) => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  const handleReturnDropdown = () => {
    if (dropDown) {
      setDropDown(false);
    }
    setDropDown2(!dropDown2);
  };
  const handleDepartureDropdown = () => {
    if (dropDown2) {
      setDropDown2(false);
    }
    setDropDown(!dropDown);
  };

  return (
    <div className="flex  border rounded-[1rem] col-span-12 md:col-span-6 lg:col-span-3 cursor-pointer">
      <div
        onClick={handleDepartureDropdown}
        className={`relative flex flex-col justify-center ${
          selectedOption === "multyCity"
            ? "w-full border-none"
            : "w-1/2 border-r"
        }  px-3 py-1  text-secondary ${dropDown ? "bg-gray-100" : ""}`}
      >
        <div>
          <small className="text-sm">Departure</small>
          <div>
            <div>
              <h2 className="text-xl  leading-8   font-medium">
                {format(selectedDay, "dd MMM ")}
                <span className="text-base">{format(selectedDay, "yy")}</span>
              </h2>
              <span className="text-xs"> {format(selectedDay, "EEEE")}</span>
            </div>
          </div>
        </div>
        <div
          className={`absolute border-t  w-[20rem]  z-10 bg-white drop-shadow-2xl cursor-default rounded-md  top-full -left-7  md:left-0 ${
            dropDown ? "block" : "hidden"
          }`}
        >
          <Calendar
            previousMonth={previousMonth}
            nextMonth={nextMonth}
            days={days}
            firstDayCurrentMonth={firstDayCurrentMonth}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        </div>
      </div>

      {selectedOption !== "multyCity" && (
        <div
          className={`relative flex flex-col justify-center w-1/2 px-3 py-1  text-secondary ${
            dropDown2 ? "bg-gray-100" : ""
          }`}
        >
          <div>
            {selectedOption === "roundTrip" ? (
              <div onClick={handleReturnDropdown}>
                <small className="text-sm">Return</small>
                <h2 className="text-xl  leading-8   font-medium">
                  {format(returnDate, "dd MMM ")}
                  <span className="text-base">{format(returnDate, "yy")}</span>
                </h2>
                <span className="text-xs inline-block"> {format(returnDate, "EEEE")}</span>
              </div>
            ) : (
              <div>
                <small className="text-sm">Return</small>
                <br />
                <span className="text-sm font-medium">Not Applicable</span>
              </div>
            )}
          </div>
          <div
            className={`absolute border-t  w-[20rem]  z-10 bg-white drop-shadow-2xl cursor-default rounded-md  top-full -left-7  md:left-0 ${
              dropDown2 ? "block" : "hidden"
            }`}
          >
            <ReturnCalendar
              previousMonth={previousMonth}
              nextMonth={nextMonth}
              days={days}
              firstDayCurrentMonth={firstDayCurrentMonth}
              returnDate={returnDate}
              setReturnDate={setReturnDate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateField;
