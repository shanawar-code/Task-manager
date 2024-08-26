import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../../../../components/Input.jsx";
import Button from "../../../../components/Button.jsx";
import SuccessfulDialog from "../../../../components/Elements/SuccessfulDialog.jsx";
import CalendarDialog from "./CalendarDialog.jsx";
import Svgs from '../../../../assets/svgs/index.js'


function VerifiedSuccessful({ show, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [showDialog, setShowDialog] = useState(false);

  const handleShowDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

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
      <div ref={popupRef} className="  flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div className=" p-5 bg-white shadow-lg rounded-xl border lg:w-[848px] mx-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center text-center">
                <h1 className="text-xl md:text-2xl font-semibold font-public-sans text-gray-700">
                  Create a meeting
                </h1>
              </div>
              <div>
                <Input label={"Title"} className={"text-xs md:text-base"} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className=" relative">
                  <Input label={"Date"} className={"text-base"} placeholder={'00/00/0000'} />
                  <span className="absolute right-4 top-[38px] cursor-pointer" onClick={handleShowDialog}><Svgs.CalendarIcon /></span>
                  {showDialog && (
                    <CalendarDialog show={showDialog} onClose={handleCloseDialog} />
                  )}
                </div>
                <div className=" relative">
                  <Input label={"Select time"} className={"text-base"} placeholder={'00:00'} />
                  <span className="absolute right-4 top-[38px] cursor-pointer" onClick={handleShowDialog}><Svgs.TimerIcon /></span>
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-base font-bold font-mulish text-gray-700"
                >
                  Meeting notes
                </label>
                <textarea
                  className=" focus:ring-1 ring-black resize-none rounded-xl border w-full h-[130px] p-4 my-2 outline-none"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button className="flex items-center justify-center w-[258px] h-[44px] gap-[13px] border border-[#FB6D72] rounded-xl text-[#F33F41] text-sm font-semibold font-public-sans">
                  <Svgs.AddIconRed />
                  Add employees
                </button>
              </div>
              <div className="flex items-center justify-center mt-5">
                <Button
                  handleClick={handleShowPopup}
                  text={"Create task"}
                  customPadding={"px-[24px] py-[14px]"}
                  className={"h-[48px] w-[162px]"}
                />
                {showPopup && (
                  <SuccessfulDialog heading={'Meeting created successfully.'} show={showPopup} onClose={handleClosePopup} />
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifiedSuccessful;
