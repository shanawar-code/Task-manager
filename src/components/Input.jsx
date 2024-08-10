import React from "react";

export const Input = ({ label, placeholder, value, type, onChange, className ,error }) => {
  return (
    <div className="flex flex-col gap-y-2 w-full ">
      <label className="text-base font-bold font-mulish text-gray-1" htmlFor="">{label}</label>
      <input
        value={value}
        type= {type? type: ''}
        placeholder={placeholder}
        className={`border outline-none rounded-lg w-full px-4 py-2 focus-within:ring-2 ring-custom-blue caret-custom-blue group ${className} ${error? 'focus-within:ring-2 ring-custom-red caret-custom-red group' : ''}`}
      />
    </div>
  );
};
