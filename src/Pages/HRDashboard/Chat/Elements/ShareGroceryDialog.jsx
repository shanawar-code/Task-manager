import React from "react";
import { useState, useEffect, useRef } from "react";
import Svgs from "../../../../assets/svgs/index.js";
import { Input } from "../../../../components/Input.jsx";
import SuccessfulDialog from "../../../../components/Elements/SuccessfulDialog.jsx";

function ShareGroceryDialog({ show, onClose }) {
  const popupRef = useRef();

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-30 z-50">
      <div ref={popupRef} className=" p-5 scroll-smooth bg-white shadow-lg border rounded-xl max-w-[600px] md:w-[400px] lg:w-[528px]">
        <div>
          <div className="flex items-center justify-center">
            <h1 className=" md:text-2xl font-semibold font-public-sans text-gray-1">Share Grocery dashboard</h1>
          </div>
          <div className=" relative mt-[48px]">
            <Input label={'Sharing link'} value={'Grocerydashobard232Wlfgewe45dgfdsk'} className={' text-xs md:text-base'} />
            <span onClick={handleShowPopup} className=" cursor-pointer absolute top-9 md:top-10 right-1 md:right-4"><Svgs.CopyIcon /></span>
            {showPopup && (<SuccessfulDialog heading={'Link copied'} show={showPopup} onClose={handleClosePopup} />)}
          </div>
          <div className="flex flex-col items-center mt-5">
            <h1 className=" text-base font-mulish font-bold text-gray-1 my-2">Share QR code</h1>
            <span><img src="images/qrcode.png" width={200} alt="" /></span>
          </div>
          <div className="flex items-center justify-center gap-4 mt-[48px]">
            <button className=" text-xs md:text-base font-bold font-mulish text-gray-2 flex items-center gap-[6px] px-[14.5px] py-[11px] rounded-xl border border-gray-2">
              <Svgs.ShareGray /> Share QR code
            </button>
            <button className=" text-xs md:text-base font-bold font-mulish text-gray-2 flex items-center gap-[6px] px-[14.5px] py-[11px] rounded-xl border border-gray-2">
              <Svgs.ShareGray /> Share link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareGroceryDialog;
