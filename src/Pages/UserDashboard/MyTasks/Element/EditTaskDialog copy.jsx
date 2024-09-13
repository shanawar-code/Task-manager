import React from "react";
import { useState, useEffect, useRef } from "react";

import GroceryDialog from "./GroceryDialog";


function EditTaskDialog({ show, onClose }) {
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
      <div ref={popupRef} className=" mx-auto  scroll-smooth rounded-xl w-[90vw] md:w-[700px] overflow-y-auto h-[85%] grocery-scrollbar-none ">
        <GroceryDialog onClose={onClose} />

      </div>

    </div>

  );
}

export default EditTaskDialog;