import React, { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import {
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  isBefore,
  format,
  isAfter,
} from "date-fns";

const ReturnCalendar = ({
  previousMonth,
  nextMonth,
  days,
  firstDayCurrentMonth,
  returnDate,
  setReturnDate,
}) => {
  console.log(returnDate);
  const currentDate = new Date();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="p-4">
      <div className="">
        <div className="flex items-center">
          <h2 className="flex-auto font-semibold text-gray-900">
            {format(firstDayCurrentMonth, "MMMM yyyy")}
          </h2>
          <button
            type="button"
            onClick={previousMonth}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <HiOutlineArrowLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            onClick={nextMonth}
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <HiOutlineArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="grid grid-cols-7 mt-2 text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIdx === 0 && colStartClasses[getDay(day)],
                "py-1.5"
              )}
            >
              <button
                disabled={isBefore(day, currentDate) && true}
                type="button"
                onClick={() => setReturnDate(day)}
                className={classNames(
                  isBefore(day, currentDate) &&
                    "bg-gray-200 cursor-not-allowed",
                  isEqual(day, returnDate) && "text-white bg-primary",
                  !isEqual(day, returnDate) && isToday(day) && "text-primary",

                  !isEqual(day, returnDate) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-900",
                  !isEqual(day, returnDate) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-400",
                //   isEqual(day, returnDate) && isToday(day) && "bg-primary",
                //   isEqual(day, returnDate) && !isToday(day) && "bg-primary",
                  !isEqual(day, returnDate) && "hover:bg-gray-200",
                  (isEqual(day, returnDate) || isToday(day)) && "font-semibold",
                  "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                )}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default ReturnCalendar;
