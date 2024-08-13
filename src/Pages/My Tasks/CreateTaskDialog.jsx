import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import SuccessfulDialog from "../../components/Elements/SuccessfulDialog";
import Svgs from '../../assets/svgs/Index.js'
import SelectDropdown from "../../components/SelectDropdown.jsx";


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
      <div ref={popupRef} className="">
        <form onSubmit={handleSubmit}>
          <div className="mx-auto p-5 scroll-smooth bg-white shadow-lg rounded-xl border w-[848px]">
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
                  className="rounded-xl border w-full h-[130px] p-4 my-2 outline-none"
                  placeholder="Description"
                ></textarea>
              </div>
              <div>
                <button className=" text-sm font-semibold font-public-sans text-gray-2 flex items-center justify-center gap-[11px] px-[16px] py-[12px] border border-[#4f4f4f] rounded-xl w-full border-dashed"><Svgs.AddIconGray/>Add attachment</button>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex items-center justify-center w-full md:w-[258px] h-[44px] gap-3 border border-[#FB6D72] rounded-xl text-[#F33F41] text-sm font-semibold font-public-sans">
                    <Svgs.AddIconRed/>
                  Add employees
                </button>
                <SelectDropdown options={[ { value: "Priority", label: "Priority" },
                  { value: "user", label: "User" },
                  { value: "guest", label: "Guest" }]} />
              </div>
              <div className="flex items-center justify-center mt-5">
                <Button
                  handleClick={handleShowPopup}
                  text={"Create task"}
                  customPadding={"px-[24px] py-[14px]"}
                  className={"h-[48px] w-full md:w-[162px]"}
                />
                {showPopup && (
                <SuccessfulDialog
                heading={'Task Created Successfully'}
                  show={showPopup}
                  onClose={handleClosePopup}
                />
              )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTaskDialog;
