import React from "react";
import { useState, useEffect, useRef } from "react";
import Addnewemployee from "./Addnewemployee";

function ShareGroceryDialog({ show, onClose }) {
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50  ">
      <div ref={popupRef} className=" mx-auto p-5 scroll-smooth w-full  md:w-[44vw] overflow-y-auto h-[80vh] grocery-scrollbar-none ">
        <Addnewemployee onClose={onClose}/>
      </div>

    </div>

  );
}

export default ShareGroceryDialog;