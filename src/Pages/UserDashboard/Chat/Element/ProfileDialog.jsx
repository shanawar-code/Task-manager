import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Svgs from "assets/svgs/Index.js";
import DeleteDialog from "./DeleteDialog.jsx";
import ChatMediaDialog from "./ChatMediaDialog.jsx";


function ProfileDialog({ show, onClose }) {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false)

  const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
    onClose()
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
      {!showPopup ? (<div className="fixed inset-0 flex items-start justify-end z-50 bg-black bg-opacity-70 md:bg-white md:bg-opacity-60">
        <div
          ref={popupRef}
          className=" p-5 bg-white shadow-lg md:rounded-tr-xl rounded-tl-xl border w-[360px] overflow-y-auto h-screen xl:mt-[115px]  lg:mt-[193px] md:mt-[180px] md:mr-8 grocery-scrollbar-none"
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
      </div>) : (<DeleteDialog content={'Are you sure want to remove Orton as colleage'} show={showPopup} onClose={handleClosePopup} />)}

    </>
  );
}

export default ProfileDialog;
