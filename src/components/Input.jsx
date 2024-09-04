import React from "react";
import { useState } from "react";
import Svgs from 'assets/svgs/Index'

export const Input = ({ label, placeholder, value, type, onChange, className, error, onKeyPress, id }) => {




  const [show, setShow] = useState(true)


  return (
    <>
      <div className="flex flex-col gap-y-1">
        <label className="text-base font-bold font-mulish text-gray-1" htmlFor={id} >{label}</label>
        <div className={`flex items-center justify-between w-full px-[24px] py-[12.5px] border rounded-lg   ring-black  ${error ? 'border border-custom-red' : 'focus-within:ring-1'}`}>
          <input
            value={value}
            onChange={onChange}
            id={id}
            type={`${type === 'password' && show === true ? 'password' : 'text'}`}
            placeholder={placeholder}
            className={` outline-none max-w-full w-full focus-within:bg-transparent bg-transparent  caret-custom-blue group ${className} `}
          />
          {type === 'password' && <span onClick={() => { setShow(!show) }} className=' cursor-pointer'>{show === true ? <Svgs.PasswordShow /> : <Svgs.PasswordHide />}</span>
          }
        </div>
      </div>
    </>
  );
};
