
import React, { useState } from "react";
import Svgs from '../assets/svgs/Index.js';


export const Input = ({
  label,
  placeholder,
  value,
  type,
  onChange,
  handleBlur,
  name,
  className,
  error,
  touched,
  errors,
  id,
  requiredError
}) => {
  const [show, setShow] = useState(true);
  

  return (
    <div className="flex flex-col gap-y-1">
      <label className="text-base font-bold font-mulish text-gray-1" htmlFor={id}>
        {label}
      </label>
      <div className={`flex items-center justify-between w-full px-[16px] py-[10.5px] border rounded-lg ring-black ${error ? 'border border-custom-red' : 'focus-within:ring-1'}`}>
        <input
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          id={id}
          name={name}
          type={type === 'password' && show ? 'password' : type}
          placeholder={placeholder}
          className={`outline-none max-w-full w-full bg-transparent caret-custom-blue group ${className}`}
        />
        {type === 'password' && (
          <span onClick={() => setShow(!show)} className='cursor-pointer'>
            {show ? <Svgs.PasswordShowicon /> : <Svgs.Passwordhideicon />}
          </span>
        )}
      </div>
      {touched && error && (
       <small className='text-custom-red'>{requiredError}</small>
      )}
    </div>
  );
};