import React from "react";
import { useState, useEffect, useRef } from "react";
import SuccessfulDialog from "../../components/Elements/SuccessfulDialog";



function ReviweLeaveDialog({ show, onClose, content}) {
  
    const [showPopup, setShowPopup] = useState(false)

    const handleShowPopup=()=>{
      setShowPopup(true)
    }
  
    const handleClosePopup=()=>{
      setShowPopup(false)
    }


    const [showGroceryPopup, setShowGroceryPopup] = useState(false)

    const handleShowGroceryPopup=()=>{
      setShowGroceryPopup(true)
    }
  
    const handleCloseGroceryPopup=()=>{
      setShowGroceryPopup(false)
    }



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
          <div ref={popupRef} className="bg-white shadow-lg rounded-xl border p-6 max-w-[528px] mx-2 overflow-y-auto max-h-full scrollbar-black">
          <div className="flex items-center justify-center">
            <h1 className=" text-2xl font-semibold font-public-sans text-gray-1">Review leave</h1>
          </div>
          <div className="my-[48px] flex items-center justify-between">
            <div>
                <div>
                <h1 className=" text-base font-bold font-mulish text-gray-1">Sent by</h1>
                </div>
                <div className="flex items-center gap-4 my-[14.5px]">
                <img src="images/anna.png" alt="" />
                <span className=" text-base font-semibold font-public-sans text-gray-1">Anna</span>
                </div>
            </div>
            <div>
                <button className=" bg-[#f6f6f6] rounded-xl border px-[12px] py-[5.5px] text-base font-normal font-mulish text-gray-1 flex items-center justify-center">Casual leave</button>
            </div>
          </div>
          <div>
          <div>
                <h1 className=" text-base font-bold font-mulish text-gray-1">Reason for leave</h1>
                </div>
                <div className=" px-[24px] py-[14px] rounded-xl border my-2">
                   <h1 className=" text-base font-normal font-mulish text-gray-1">Dear Manager,</h1>
                   <h1 className=" text-base font-normal font-mulish text-gray-1 my-5">I am writing to request a casual leave for 1 day on 26th Aug 20024 due to marriage of my cousin. I will ensure that all my tasks are up to date before my leave and remain available for any urgent queries.</h1>
                   <h1 className=" text-base font-normal font-mulish text-gray-1 my-5">Thank you for your understanding.</h1>
                   <h1 className=" text-base font-normal font-mulish text-gray-1 w-[50%] sm:w-[30%]">Best regards Anna</h1>
                </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-[48px]">
            <button className="px-[24px] py-[14.5px] text-base font-bold font-mulish text-gray-2">Refuse</button>
            <button onClick={handleShowPopup} className="px-[24px] py-[14.5px] text-base font-bold font-mulish text-gray-2 border rounded-xl hover:bg-gray-4 hover:text-white">Approve</button>
            { showPopup && (<SuccessfulDialog heading={'Leave approved'}  show={showPopup} onClose={handleClosePopup}/>)}
          </div>
          </div>
      </div>
  );
}

export default ReviweLeaveDialog;