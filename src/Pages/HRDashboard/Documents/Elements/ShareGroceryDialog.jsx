import React from "react";
import { useState, useEffect, useRef } from "react";
import Addnewemployee from "../../Employees/Elements/Addnewemployee";
import Documentview from "./Documentview";

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div ref={popupRef} className=" mx-auto p-5 scroll-smooth bg-white shadow-lg border rounded-xl w-[90vw] md:w-[734px] overflow-y-auto h-[85%]  grocery-scrollbar-none">
        <Documentview />
      </div>
      
    </div>

  );
}

export default ShareGroceryDialog;