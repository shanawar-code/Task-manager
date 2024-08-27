import React from "react";
import { useState, useEffect, useRef } from "react";
import Addnewemployee from "../../Employees/Elements/Addnewemployee";
import Addapplicant from "./Addsalary";
import Addsalary from "./Addsalary";
import DeleteDialog from "./DeleteDialog";
import Edit from "./Editpayroll";
import Editpayroll from "./Editpayroll";
import EditGroceryDialog from "./EditGroceryDialog copy";

function Moreoptions({ show, onClose }) {
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
  }

  const [showPopups, setShowPopups] = useState(false)

  const handleShowPopups = () => {
    setShowPopups(true)
  }

  const handleClosePopups = () => {
    setShowPopups(false)
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
    <div className=" inset-0 flex items-center justify-center bg-white relative z-50 ">
      <div ref={popupRef} className="absolute   right-2  mt-16    scroll-smooth  bg-white shadow-lg border rounded-xl overflow-y-auto  ">
        <div className="w-[130px] flex items-start   flex-col h-[80px] ">
          <div><button onClick={handleShowPopups} className="cursor-pointer text-sm font-open-sans text-gray-1 py-2 px-3">Edit</button>
            {showPopups && (<EditGroceryDialog show={showPopups} onClose={handleClosePopups} />)}
          </div>
          <div>
            <button onClick={handleShowPopup} className="cursor-pointer text-sm font-open-sans text-gray-1 py-2 px-3">Delete</button>
            {showPopup && (<DeleteDialog content={'Are you sure want to delete employee from payroll?'} show={showPopup} onClose={handleClosePopup} />)}
          </div>
        </div>
      </div>

    </div>

  );
}

export default Moreoptions;