import React from "react";
import { useState, useEffect, useRef } from "react";
import SuccessfulDialog from "../../../components/Elements/SuccessfulDialog";
import { Input } from "../../../components/Input";
import Svgs from '../../../assets/svgs/Index.js'
import Button from "../../../components/Button.jsx";
import SelectDropdown from "../../../components/SelectDropdown.jsx";


function Collaborate({ show, onClose}) {
  
    const [showPopup, setShowPopup] = useState(false)
    
    const handleShowPopup=()=>{
      setShowPopup(true)
    }
  
    const handleClosePopup=()=>{
      setShowPopup(false)
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
     <div className="">
          <div ref={popupRef} className="bg-white shadow-lg rounded-xl border p-6 mx-2 overflow-y-auto h-full  md:w-[598px]">
          <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center text-center">
                <h1 className="text-xl md:text-2xl font-semibold font-public-sans text-gray-700">
                Collaborate
                </h1>
              </div>
              <div className="mt-6">
                <SelectDropdown label={'Select employee'} options={[{value: 'Select', label: 'Select'}]} selectClass={' w-full'} className={' w-full'}/> 
              </div>
              <div className="my-4">
                <SelectDropdown label={'Select task'} options={[{value: 'Select', label: 'Select'}]} selectClass={' w-full'} className={' w-full'}/> 
              </div>
            </div>
          <div className="flex items-center justify-center gap-4 mt-6">
           <Button text={'Create task'} className={'w-[162px] h-[48px]'} customPadding={'py-[14px] px-[24px]'} handleClick={handleShowPopup}/>
            { showPopup && (<SuccessfulDialog heading={'Collaboration successful'}  show={showPopup} onClose={handleClosePopup}/>)}
          </div>
         
      </div>
      </div>
      </div>
  );
}

export default Collaborate;