import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { AddIcon, Calender } from "../../assets/svgs/Index";
import SuccessfulDialog from "./SuccessfulDialog";
import CalendarDialog from "./CalendarDialog";
function VerifiedSuccessful({ show, onClose}) {
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
      <div ref={popupRef}>
        <form onSubmit={handleSubmit}>
          <div className=" mx-auto p-5 scroll-smooth bg-white shadow-lg rounded-xl border">
            <div className="flex flex-col gap-3">
              <div className=" flex items-center justify-center text-center">
                <h1 className=" text-2xl font-semibold font-public-sans text-gray-1">
                Create a meeting
                </h1>
              </div>
              <div>
                <Input label={'Title'} className={'w-full lg:w-[800px]'}/>
              </div>
              <div className="flex items-center flex-wrap md:flex-nowrap gap-5 relative">
                <Input label={'Date'} className={' '}/>
                <img onClick={handleShowDialog} src='images/calendar.png' alt="" className=" absolute right-[53%] top-10" />
                <Input label={'Select time'} className={''}/>
                {showDialog && <CalendarDialog show={showDialog} onClose={handleCloseDialog} />}

              </div>
              <div>
                <label htmlFor="" className=" text-base font-bold font-mulish text-gray-1">Meeting notes</label>
                <textarea className=" rounded-xl border w-full h-[130px] p-4 my-2 outline-none" placeholder="Description"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button className="flex items-center justify-center w-[258px] h-[44px] gap-3 border border-[#FB6D72] rounded-xl text-[#F33F41] text-sm font-semibold font-public-sans"><img src={'images/addIcon.png'} alt="" />Add employees</button>
              </div>
              <div className=" flex items-center justify-center mt-5">
               <Button handleClick={handleShowPopup} text={'Create task'} customPadding={'px-[24px] py-[14px]'} className={'h-[48px] w-[162px]'}/>
               {showPopup && <SuccessfulDialog show={showPopup} onClose={handleClosePopup} />}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifiedSuccessful;