// import React from "react";

// function SelectDropdown() {
//   return (
//     <>
//     <div className="flex flex-col gap-y-1">
//       <label htmlFor="" value="Select" className="text-base font-bold font-mulish text-gray-1">
//         Role
//       </label>
//       <div className="border px-3 focus-within:ring-2 ring-custom-blue rounded-lg">
//       <select className={` outline-none py-2 w-full  caret-custom-blue group`}
//         name=""
//         id=""
//       >
//         <option className="" value="Select1">Select</option>
//         <option className="" value="Select2">Select</option>
//       </select>
//       </div>
//       </div>
//     </>
//   );
// }

// export default SelectDropdown;

import React from "react";

function SelectDropdown({label, options, name, id , onChange}) {
  return (
    <div className="flex flex-col gap-y-1">
      <label
        htmlFor="role"
        className="text-base font-bold font-mulish text-gray-1"
      >
        {label}
      </label>
      <div className="border px-3 focus-within:ring-2 ring-custom-blue rounded-lg">
        <select
          className="outline-none py-2 w-full min-w-[200px] caret-custom-blue group"
          name={name}
          id={id}
          onChange={onChange}
        >
          {options.map((option, index)=>(
            <option key={index} value={option.value}>{option.label}</option>
          ))
          }
        </select>
      </div>
    </div>
  );
}

export default SelectDropdown;
