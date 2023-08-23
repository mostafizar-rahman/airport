import React, { useState } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import RadioButton from "../RadioButton/RadioButton";
const PersonCountField = () => {
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("economy");
  const [dropDown, setDropDown] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const totalPerson = adultsCount + childrenCount + infantCount;

  // ---- Adults Count
  const handleAdultsCount = (value) => {
    if (value === "minus") {
      setAdultsCount((current) => {
        if (current === 1) {
          return 1;
        } else {
          return current - 1;
        }
      });
    }
    if (value === "plus") {
      setAdultsCount((current) => {
        if (totalPerson === 9) {
          return current;
        } else {
          return current + 1;
        }
      });
    }
  };
  // ----- Children Count
  const handleChildrenCount = (value) => {
    if (value === "minus") {
      setChildrenCount((current) => {
        if (current === 0) {
          return 0;
        } else {
          return current - 1;
        }
      });
    }
    if (value === "plus") {
      setChildrenCount((current) => {
        if (totalPerson === 9) {
          return current;
        } else {
          return current + 1;
        }
      });
    }
  };

  // ------- Infant Count
  const handleInfantCount = (value) => {
    if (value === "minus") {
      setInfantCount((current) => {
        if (current === 0) {
          return 0;
        } else {
          return current - 1;
        }
      });
    }
    if (value === "plus") {
      setInfantCount((current) => {
        if (totalPerson === 9) {
          return current;
        } else {
          return current + 1;
        }
      });
    }
  };

  return (
    <div onClick={() => setDropDown(!dropDown)} className={`relative flex flex-col justify-center border rounded-[1rem] px-3 py-1 cursor-pointer text-secondary col-span-12 md:col-span-6 lg:col-span-3 ${dropDown?"bg-gray-100":''}`}>
      <div >
        <small className="text-sm">Travellers & Booking Class</small>
        <h2 className="text-xl  leading-8   font-medium">
          {totalPerson} Traveler
        </h2>
        <span className="text-xs">Economy</span>
      </div>
      <div
        className={`${
          dropDown ? "block" : "hidden"
        } absolute border-t  w-[20rem]  z-10 bg-white drop-shadow-2xl cursor-default rounded-md  top-full left-0`}
      >
        <div className="w-full px-4 py-2">
          <div className=" space-y-2 w-full pb-3 border-b border-b-primary">
            {totalPerson === 9 && (
              <p class="text-red-500 text-xs font-bold leading-2">
                Maximum 9 passengers are allowed per booking, Please make
                another booking for additional passengers or try to reach us.{" "}
              </p>
            )}

            <h3 className="text-sm font-bold text-primary">Travelers</h3>
            <div className=" w-full flex items-center justify-between">
              <div class="flex flex-col">
                <h3 class="text-secondary">Adults</h3>
                <p class="text-black text-xs">12 years +</p>
              </div>
              <div class="flex items-center space-x-3 justify-between">
                <button
                  onClick={() => handleAdultsCount("minus")}
                  class="bg-gray-200 rounded-full p-1"
                >
                  <HiOutlineMinusSm />
                </button>
                <p class="text-primary font-bold text-lg">{adultsCount}</p>
                <button
                  onClick={() => handleAdultsCount("plus")}
                  class="bg-gray-200 rounded-full p-1"
                >
                  <HiOutlinePlusSm />
                </button>
              </div>
            </div>
            <div class=" w-full flex items-center justify-between mt-2">
              <div class="flex flex-col">
                <h3 class="text-secondary">Children</h3>
                <p class="text-black text-xs">2-12 years</p>
              </div>
              <div class="flex items-center space-x-3 justify-between">
                <button
                  onClick={() => handleChildrenCount("minus")}
                  class="bg-gray-200 rounded-full p-1"
                >
                  <HiOutlineMinusSm />
                </button>
                <p class="text-primary font-bold text-lg">{childrenCount}</p>
                <button
                  onClick={() => handleChildrenCount("plus")}
                  class="bg-gray-200 rounded-full p-1"
                >
                  <HiOutlinePlusSm />
                </button>
              </div>
            </div>
            <div class=" w-full flex items-center justify-between mt-2">
              <div class="flex flex-col">
                <h3 class="text-secondary">Infant</h3>
                <p class="text-black text-xs">Below 2 years</p>
              </div>
              <div class="flex items-center space-x-3 justify-between">
                <button
                  onClick={() => handleInfantCount("minus")}
                  class="bg-gray-200 rounded-full p-1"
                >
                  <HiOutlineMinusSm />
                </button>
                <p class="text-primary font-bold text-lg">{infantCount}</p>
                <button
                  onClick={() => handleInfantCount("plus")}
                  class="bg-gray-200 rounded-full p-1"
                >
                  <HiOutlinePlusSm />
                </button>
              </div>
            </div>
          </div>
          <div class="w-full pt-2">
            <h3 class="text-sm font-bold text-primary">Booking Class</h3>
            <div className="flex flex-wrap gap-x-3">
              <RadioButton
                label="Economy"
                value="economy"
                checked={selectedOption === "economy"}
                onChange={handleOptionChange}
              />
              <RadioButton
                label="Premium Economy"
                value="premiumEconomy"
                checked={selectedOption === "premiumEconomy"}
                onChange={handleOptionChange}
              />
              <RadioButton
                label="Business"
                value="business"
                checked={selectedOption === "business"}
                onChange={handleOptionChange}
              />
              <RadioButton
                label="First Class"
                value="firstClass"
                checked={selectedOption === "firstClass"}
                onChange={handleOptionChange}
              />
            </div>
          </div>
          <div class="w-full pb-2 flex items-center justify-end">
            <button class="text-sm px-3 py-1 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition-all duration-200">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCountField;
