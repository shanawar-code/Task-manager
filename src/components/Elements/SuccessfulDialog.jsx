import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../Input";
import Button from "../Button";
import Svgs from 'assets/svgs/Index'
function SuccessfulDialog({ show, onClose, hidden, heading, onClick }) {



  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };


  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };



  useEffect(() => {
    if (show || showPopup) {
      // Disable scrolling on the background when the popup is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling again when the popup is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      // Clean up by enabling scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [show, showPopup]);


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
      <div className="">
        <div ref={popupRef} className=" mx-2 p-5 scroll-smooth bg-white shadow-lg rounded-xl border w-[90vw] md:w-[360px]">
          <div className="flex flex-col gap-3">
            <div className=" flex items-center justify-center text-center " >
              {/* <img src={'/images/roundedGreentick.png'} alt="" /> */}
              <span className="flex items-center justify-center text-center h-9 w-9 bg-[#60c26f] rounded-full"><Svgs.TickIcon /></span>
            </div>
            <div className=" w-[60%] flex items-center justify-center text-center mx-auto">
              <h1 className=" text-base font-normal font-public-sans text-gray-1">{heading}</h1>
            </div>
            <div className=" flex items-center justify-center mt-5">
              <Button handleClick={onClose} text={'Close'} customPadding={'px-[24px] py-[14px]'} className={'h-[48px] w-[162px]'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessfulDialog;