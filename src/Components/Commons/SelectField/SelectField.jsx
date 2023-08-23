import React from "react";

const SelectField = () => {
  return (
    <div className=" flex col-span-12 lg:col-span-6  ">
      <div className="relative w-1/2">
        <div className="w-full flex flex-col justify-center border rounded-[1rem] px-3 py-1 cursor-pointer text-secondary">
          <div>
            <small className="text-sm">From</small>
            <h2 className="text-xl  leading-8   font-medium">Select A City</h2>
            <span className="text-xs">Click to choose an airport</span>
          </div>
        </div>
        <div class="p-2 cursor-pointer z-10 shadow-md bg-white border absolute  bottom-5 -right-5 rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-primary  "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative w-1/2">
        <div className="w-full flex flex-col justify-center border rounded-[1rem] px-3 pl-7 py-1 cursor-pointer text-secondary">
          <div>
            <small className="text-sm">From</small>
            <h2 className="text-xl  leading-8   font-medium">Select A City</h2>
            <span className="text-xs">Click to choose an airport</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
