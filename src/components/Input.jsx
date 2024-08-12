import React from "react";
import { useState } from "react";
import Svgs from '../assets/svgs/Index.js'

export const Input = ({ label, placeholder, value, type, onChange, className , error}) => {



  const [show, setShow]=useState(true)

    
  return (
    <>
    <div className="flex flex-col gap-y-1">
      <label className="text-base font-bold font-mulish text-gray-1" htmlFor="">{label}</label>
    <div className={`flex items-center justify-between w-full px-4 py-2 border rounded-lg  focus-within:ring-2 ring-custom-blue ${error? 'focus-within:ring-2 ring-custom-red caret-custom-red group' : ''}`}>
      <input
        value={value}
        type={`${type==='password' && show === true? 'password':'text'}`}
        placeholder={placeholder}
        className={` outline-none w-full bg-transparent  caret-custom-blue group ${className} `}
      />
      {type==='password' && <span onClick={()=>{setShow(!show)}} className=' cursor-pointer'>{show===true? <Svgs.PasswordShow/>: <Svgs.PasswordHide/> }</span>
    }
    </div>
    </div>
    </>
  );
};
