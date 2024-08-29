import React from "react";
import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import SuccessfulDialog from "../../../../components/Elements/SuccessfulDialog";

function DeleteDialog({ show, onClose, content }) {
  const navigate = useNavigate()


  const [showPopup, setShowPopup] = useState(false)

  const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
    onClose()
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
    <>
    {!showPopup?( <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={popupRef}>

        <div className=" mx-auto scroll-smooth bg-white shadow-lg rounded-xl border w-[360px]">
          <div className="flex flex-col gap-3 my-[36px]">
            <div className=" w-[60%] flex items-center justify-center text-center mx-auto">
              <h1 className=" text-base font-normal font-public-sans text-gray-1">
                {content}
              </h1>
            </div>
            <div className=" flex items-center justify-center gap-5 mt-5">
              <Button
                handleClick={onClose}
                text={'No'}
                customPadding={'px-[24px] py-[14px]'}
                className={'h-[48px] w-[104px]'} />
              <button
                onClick={handleShowPopup}
                className=" text-base font-bold font-mulish text-gray-1 px-[24px] py-[14px]">
                Delete
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>):( <SuccessfulDialog
                  heading={'Employee deleted'}
                  show={showPopup}
                  onClose={handleClosePopup} />)}
   
    </>
  );
}

export default DeleteDialog;