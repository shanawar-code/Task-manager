import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../Input";
import Button from "../Button";

function MoreOptions({ show, onClose ,hidden, heading, onClick}) {
   

  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className=" absolute z-50 flex items-center justify-center">
          <div ref={popupRef} className=" bg-white shadow-xl rounded-xl border w-[130px]">
            <div className=" p-1">
             <div className="flex flex-col">
                <button className=" text-sm font-normal rounded-lg font-open-sans text-black hover:bg-[#f2f2f2] w-full py-2 px-2 flex items-center">Edit</button>
                <button className=" text-sm font-normal rounded-lg font-open-sans text-black hover:bg-[#f2f2f2] w-full py-2 px-2 flex items-center">Delete</button>
             </div>
            </div>
          </div>
          </div>
  );
}

export default MoreOptions;