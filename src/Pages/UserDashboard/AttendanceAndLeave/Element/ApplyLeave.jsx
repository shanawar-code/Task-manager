import React from "react";
import { useState, useEffect, useRef } from "react";
import SuccessfulDialog from "../../../../components/Elements/SuccessfulDialog";
import { Input } from "../../../../components/Input";
import Calendar from "./Calendar";
import Svgs from '../../../../assets/svgs/index.js'
import Button from "../../../../components/Button.jsx";
import SelectDropdown from "../../../../components/SelectDropdown.jsx";


function ApplyLeaveDialog({ show, onClose }) {

  const [showPopup, setShowPopup] = useState(false)

  const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
    onClose()
  }

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
    <>
    {!showPopup?(  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="py-3 ">
        <div ref={popupRef} className="bg-white shadow-lg rounded-xl border p-6 mx-2 w-[90vw]  md:w-[44vw]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center text-center">
              <h1 className="text-xl md:text-2xl font-semibold font-public-sans text-gray-700">
                Apply leave
              </h1>
            </div>
            <div className=''>
              <SelectDropdown label="Leave type" options={[{ label: 'Casual leave', value: 'Casual leave' }]} name="role" id="role" selectClass={' w-full'} className={' w-full'} />
            </div>
            <div className="">
              <div className=" relative">
                <Input label={"Date"} className={"text-base"} placeholder={'00/00/0000'} />
                <span className="absolute right-4 top-[44px] cursor-pointer" onClick={handleShowDialog}><Svgs.CalendarIcon /></span>
                {showDialog && (
                  <Calendar show={showDialog} onClose={handleCloseDialog} />
                )}
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
                className=" resize-none rounded-xl border w-full h-[130px] p-4 my-2 outline-none"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-[48px]">
            <Button text={'Apply'} className={'w-[162px] h-[48px]'} customPadding={'py-[14px] px-[24px]'} handleClick={handleShowPopup} />
            
          </div>

        </div>
      </div>
    </div>):(<SuccessfulDialog heading={'Leave applied successfully'} show={showPopup} onClose={handleClosePopup} />)}
  </>
  );
}

export default ApplyLeaveDialog;