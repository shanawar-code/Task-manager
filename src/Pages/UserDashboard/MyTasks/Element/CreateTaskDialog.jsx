import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "components/Input";
import Button from "components/Button";
import SuccessfulDialog from "components/Elements/SuccessfulDialog";
import Svgs from 'assets/svgs/Index'
import SelectDropdown from "components/SelectDropdown.jsx";


function CreateTaskDialog({ show, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    onClose()
  };



  const optionsRole = [
    { value: "Priority", label: "Priority" },
    { value: "Edit", label: "Edit" },
    { value: "Delete", label: "Delete" }
  ]

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
      {!showPopup ? (<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div ref={popupRef} className="p-5 bg-white shadow-lg rounded-xl border w-[95vw] sm:w-[500px] md:w-[600px] lg:w-[848px] overflow-y-auto ">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center text-center">
              <h1 className="text-2xl font-semibold font-public-sans text-gray-700">
                Create new Task
              </h1>
            </div>
            <div>
              <Input label={"Task name"} className={""} placeholder={'Task name'} />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-base font-bold font-mulish text-gray-700"
              >
                Description
              </label>
              <textarea
                className="focus:ring-1 ring-black resize-none rounded-xl border w-full h-[130px] p-4 my-2 outline-none"
                placeholder="Description"
              ></textarea>
            </div>
            <div>
              <button className=" text-sm font-semibold font-public-sans text-gray-2 flex items-center justify-center gap-[11px] px-[16px] py-[12px] border border-[#4f4f4f] rounded-xl w-full border-dashed"><Svgs.AddIconGray />Add attachment</button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <div className=" w-full">
                <button className="flex items-center justify-center w-full md:w-[258px] h-[44px] gap-3 border border-[#FB6D72] rounded-xl text-[#F33F41] text-sm font-semibold font-public-sans">
                  <Svgs.AddIconRed />
                  Add employees
                </button>
              </div>
              <div className="w-full md:w-[160px]">
                <SelectDropdown options={optionsRole} selectClass={' w-full'} customWidth={' w-full'} />
              </div>
            </div>
            <div className="flex items-center justify-center mt-5">
              <Button
                handleClick={handleShowPopup}
                text={"Create task"}
                customPadding={"px-[24px] py-[14px]"}
                className={"h-[48px] w-full md:w-[162px]"}
              />

            </div>
          </div>
        </div>
      </div>) : (<SuccessfulDialog
        heading={'Task Created Successfully'}
        show={showPopup}
        onClose={handleClosePopup}
      />)}
    </>
  );
}

export default CreateTaskDialog;
