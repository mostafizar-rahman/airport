import React from "react";
import { format } from "date-fns";

const DateField = ({ date, selectedOption, selectedDay }) => {
  return (
    <div className="">
      <div
        className={`flex flex-col justify-center ${
          selectedOption === "multyCity"
            ? "w-full border-none"
            : "w-1/2 border-r"
        }  px-3 py-1  text-secondary`}
      >
        <div>
          <small className="text-sm">Departure</small>
          <div>
            {date === "defaultDate" ? (
              <div>
                <h2 className="text-xl  leading-8   font-medium">
                  {format(selectedDay, "dd MMM ")}
                  <span className="text-base">
                    {format(selectedDay, "yy")}
                  </span>
                </h2>
                <span className="text-xs"> {format(selectedDay, "EEEE")}</span>
              </div>
            ) : (
              <h2 className="text-xl  leading-8   font-medium">
                Select a date
              </h2>
            )}
          </div>
        </div>
      </div>
      {selectedOption !== "multyCity" && (
        <div className="flex flex-col justify-center w-1/2 px-3 py-1  text-secondary">
          <div>
            <small className="text-sm">Return</small>
            {selectedOption === "roundTrip" ? (
              <div>
                <h2 className="text-xl  leading-8   font-medium">
                  {format(selectedDay, "dd MMM ")}
                  <span className="text-base">{format(selectedDay, "yy")}</span>
                </h2>
                <span className="text-xs inline-block">Wednesday</span>
              </div>
            ) : (
              <div>
                <span className="text-sm font-medium">Not Applicable</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateField;
