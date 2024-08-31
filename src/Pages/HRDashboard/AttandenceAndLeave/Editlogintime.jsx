import React from "react";
import { useState, useEffect, useRef } from "react";
import SuccessfulDialog from "../../../components/Elements/SuccessfulDialog";
import { Input } from '../../../components/Input';



function Editlogintime({ show, onClose }) {

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
      {!showPopup ? (<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
        <div className="py-3  ">
          <div ref={popupRef} className="bg-white shadow-lg rounded-xl border p-6  mx-2 overflow-y-auto h-[80vh] w-[90vw] md:w-[40vw] grocery-scrollbar-none">
            <div className="flex items-center justify-center">
              <h1 className=" text-2xl font-semibold font-public-sans text-gray-1">Edit login time</h1>
            </div>



            <div className="flex-col flex items-center justify-center  my-[14.5px]">

              <div>
                <img src="/images/anna1.png" alt="" />
              </div>
              <div className=" text-base font-semibold font-public-sans text-gray-1 mt-4">
                <p>Anna</p>
              </div>
              <div className="font-public-sans  text-gray-4 text-[10px]">
                <p>Python developer</p>
              </div>


            </div>




            <div>
              <div>
                <Input label={'Login time'} type={'text'} placeholder={'10:00'} className={'placeholder-gray-1  lg:text-base font-mulish   text-sm'} />
              </div>
              <div className="mt-6">
                <label className=" block text-base font-bold font-mulish text-gray-1">Notes</label>
                <textarea placeholder="Description" name="" id="" className="w-full resize-none h-[135px] p-4 mt-2 border rounded-xl"></textarea>
              </div>

            </div>
            <div className="flex items-center justify-center gap-4 mt-[48px]">

              <button onClick={handleShowPopup} className="w-[162px] h-[48px] flex items-center justify-center px-[24px] py-[14px] text-base font-bold font-mulish bg-btn-gradient hover:scale-105 ease-in-out duration-300 text-white border rounded-lg ">Update</button>
            </div>

          </div>
        </div>
      </div>) : (<SuccessfulDialog heading={'Login time updated'} show={showPopup} onClose={handleClosePopup} />)}

    </>
  );
}

export default Editlogintime;