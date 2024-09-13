import React from "react";
import { useState, useEffect, useRef } from "react";


import DeleteDialogChat from "./DeleteDialogDots";
import EditTaskDialog from "./EditTaskDialog copy";
import GroceryDialog from "./GroceryDialog";

function MoreTaskoptions({ show, onClose }) {
  const popupRef = useRef();


  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };
  const [showPopup, setShowPopup] = useState(false)

  const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
    onClose()
  }

  const [showPopups, setShowPopups] = useState(false)

  const handleShowPopups = () => {
    setShowPopups(true)
  }

  const handleClosePopups = () => {
    setShowPopups(false)
    onClose()
  }



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
    <>
    {!showPopup ?(<div className=" inset-0 flex items-center justify-center  relative z-50 ">
      <div ref={popupRef} className="absolute   right-2  mt-16    scroll-smooth  bg-white shadow-lg border rounded-xl overflow-y-auto  ">
        <div className="w-[130px] flex items-start   flex-col h-[80px] ">
          <div className="hover:bg-[#F2F2F2] hover:w-full py-2 px-3  hover:rounded-sm"> 
            <button onClick={handleShowPopups} className="cursor-pointer text-sm font-open-sans text-gray-1">Edit</button>
            {showPopups && (<GroceryDialog show={showPopups} onClose={handleClosePopups} />)}
          </div>
          <div  className="hover:bg-[#F2F2F2] hover:w-full py-2 px-3  hover:rounded-sm">
            <button onClick={handleShowPopup} className="cursor-pointer text-sm font-open-sans text-gray-1">Delete</button>
          
          </div>
        </div>
      </div>

    </div>):(<DeleteDialogChat content={'Are you sure want to delete employee from payroll?'} show={showPopup} onClose={handleClosePopup} />)}
    </>
    )
}

export default MoreTaskoptions;