import React from "react";

function SelectDropdown({label, options, name, id , onChange, className, onClick, selectClass, customWidth}) {
  return (
    <div className="flex flex-col gap-y-1 bg-white">
      <label
        htmlFor="role"
        className="text-base font-bold font-mulish text-gray-1"
      >
        {label}
      </label>
      <div className={`border px-3 focus-within:ring-1 ring-black rounded-lg bg-white ${className} ${customWidth? customWidth: ' w-fit'}`}>
        <select
          className={`outline-none py-2 caret-custom-blue group bg-white ${selectClass}`} 
          name={name}
          id={id}
          onChange={onChange}
        >
          {options.map((option, index)=>(
            <option onClick={onClick} key={index} value={option.value}>{option.label}</option>
          ))
          }
        </select>
      </div>
    </div>
  );
}

export default SelectDropdown;
