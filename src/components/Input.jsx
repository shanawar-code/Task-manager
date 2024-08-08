import React from "react";

export const Input = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col w-full gap-y-2 lg:w-[400px]">
      <label className="text-base font-bold font-mulish text-gray-1" htmlFor="">{label}</label>
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        className="border-2 rounded-lg w-full px-4 py-2"
      />
    </div>
  );
};
