import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Svgs from "../../../../assets/svgs/index.js";
import DeleteDialog from "./DeleteDialog.jsx";
import SuccessfulDialog from "../../../../components/Elements/SuccessfulDialog.jsx";
import ChatMediaDialog from "./ChatMediaDialog.jsx";


function ProfileDialog({ show, onClose }) {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false)

  const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }


  const [showMedia, setShowMedia] = useState(false)

  const handleShowMedia = () => {
    setShowMedia(true)
  }

  const handleCloseMedia = () => {
    setShowMedia(false)
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
    <div className="fixed inset-0 flex items-start justify-end bg-white bg-opacity-30 z-50">
      <div
        ref={popupRef}
        className=" p-5 scroll-smooth bg-white shadow-lg rounded-tr-xl border w-[360px] overflow-y-scroll h-full"
      >
        <div className=" border-b">
          <div>
            <span className=" cursor-pointer" onClick={onClose}>
              <Svgs.CrossIcon />
            </span>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/ChatProfilepic.png"
              width={"110"}
              alt=""
              className=" -mt-3"
            />
          </div>
          <div className="flex items-center justify-center mt-5">
            <h1 className=" text-xl font-medium font-public-sans text-gray-1">
              Orton
            </h1>
          </div>
          <div className="flex items-center justify-center my-4">
            <h1 className=" text-base font-normal font-public-sans text-gray-2">
              +1(640)224 2384
            </h1>
          </div>
          <div className="flex items-center justify-center my-6">
            <button onClick={handleShowPopup} className=" bg-[#feefef] rounded-xl text-[#fa6569] px-[16px] py-[8px] ">
              Remove Orton
            </button>
            {showPopup && (<DeleteDialog content={'Are you sure want to remove Orton as colleage'} show={showPopup} onClose={handleClosePopup} />)}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-5">
            <h1 className=" text-lg font-medium font-public-sans text-gray-1">
              Media
            </h1>
            <button onClick={handleShowMedia} className=" text-sm font-medium font-public-sans text-[#497CFF]">
              See all
            </button>
            {showMedia && (<ChatMediaDialog show={showMedia} onClose={handleCloseMedia} />)}
          </div>
          <div className="flex items-center gap-[6px] my-[14px]">
            <img src="/images/mobileimg.png" alt="" />
            <img src="/images/heartimg (1).png" alt="" />
            <h1 className="flex items-center justify-center bg-[#f3f3f3] rounded-2xl w-[82px] h-[82px]">
              +10
            </h1>
          </div>
          <div className="flex items-center justify-between my-[14px]">
            <h1 className=" text-lg font-medium font-public-sans text-gray-1">
              Files
            </h1>
            <button className=" text-sm font-medium font-public-sans text-[#497CFF]">
              See all
            </button>
          </div>
          <div className="flex items-center gap-3 my-[14px]">
            <div>
              <Svgs.DocsIcon />
            </div>
            <div>
              <h1 className=" text-base font-normal font-public-sans text-gray-1">Mobile App Content.docx</h1>
              <h1 className=" text-sm font-normal font-public-sans text-gray-2">1.2 MB</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 my-[14px]">
            <div>
              <Svgs.VideoIcon />
            </div>
            <div>
              <h1 className=" text-base font-normal font-public-sans text-gray-1">Yesterday meeting</h1>
              <h1 className=" text-sm font-normal font-public-sans text-gray-2">1.2 MB</h1>
            </div>
          </div>
          <div className="flex items-center gap-3 my-[14px]">
            <div>
              <Svgs.ZipIcon />
            </div>
            <div>
              <h1 className=" text-base font-normal font-public-sans text-gray-1">Website images.zip</h1>
              <h1 className=" text-sm font-normal font-public-sans text-gray-2">1.5 GB</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDialog;
