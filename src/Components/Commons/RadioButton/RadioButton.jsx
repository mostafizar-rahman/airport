import React from "react";

const RadioButton = ({ label, value, checked, onChange }) => {
  return (
    <label htmlFor={value} className="flex items-center">
      <input
        type="radio"
        id={value}
        name="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={`border border-gray-400 w-4 h-4 rounded-full mr-3 ${
          checked ? "border-[5px] border-primary" : ""}`}
      ></div>
      <span className="font-medium text-gray-500">{label}</span>
    </label>
  );
};

export default RadioButton;
