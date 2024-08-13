import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../Input";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function DeleteDialog({ show, onClose}) {
    const navigate = useNavigate()


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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={popupRef}>
        
          <div className=" mx-auto p-5 scroll-smooth bg-white shadow-lg rounded-xl border w-[360px]">
            <div className="flex flex-col gap-3">
              <div className=" flex items-center justify-center text-center">
               <img src={'images/roundedGreentick.png'} alt="" />
              </div>
              <div className=" w-[60%] flex items-center justify-center text-center mx-auto">
                <h1 className=" text-base font-normal font-public-sans text-gray-1">Are you sure want to delete
                Grocery dashboard task?</h1>
              </div>
              <div className=" flex items-center justify-center gap-5 mt-5">
               <Button handleClick={onClose} text={'No'} customPadding={'px-[24px] py-[14px]'} className={'h-[48px] w-[162px]'}/>
               <button className=" text-base font-bold font-mulish text-gray-1 px-[24px] py-[14px]">Delete</button>
              </div>
            </div>
          </div>
       
      </div>
    </div>
  );
}

export default DeleteDialog;