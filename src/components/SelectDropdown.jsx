import React from "react";

function SelectDropdown() {
  return (
    <>
    <div className="flex flex-col gap-y-1">
      <label htmlFor="" value="Select" className="text-base font-bold font-mulish text-gray-1">
        Role
      </label>
      <select className={`border outline-none rounded-lg w-full px-4 py-2 focus-within:ring-2 ring-custom-blue caret-custom-blue group `}
        name=""
        id=""
      >
        <option value="Select1">Select</option>
        <option value="Select2">Select</option>
      </select>
      </div>
    </>
  );
}

export default SelectDropdown;
