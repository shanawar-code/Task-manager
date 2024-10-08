import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "components/Input";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import Svgs from 'assets/svgs/Index'
import SelectDropdown from "components/SelectDropdown.jsx";
import SuccessfulDialog from "components/Elements/SuccessfulDialog.jsx";


function EditGroceryDialog({ show, onClose, hidden }) {

  const [isVisible, setIsVisible] = useState(true)
  const [isVisible1, setIsVisible1] = useState(true)

  const handleRemove = () => {
    setIsVisible(false)
  }
  const handleRemove1 = () => {
    setIsVisible1(false)
  }

  const navigate = useNavigate()
  const [showSuccessfulPopup, setShowSuccessfulPopup] = useState(false);

  const handleShowSuccessfulPopup = () => {
    setShowSuccessfulPopup(true);

  };

  const handleCloseSuccessfulPopup = () => {
    setShowSuccessfulPopup(false);
    onClose()
  };


  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
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
      {!showSuccessfulPopup ? (<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div ref={popupRef} className="grocery-scrollbar-none  bg-white w-full md:w-[61vw]  rounded-xl p-5 overflow-auto h-[80vh] mx-3">
          <div className="flex items-center justify-center">
            <div className="">
              <h1 className=" text-lg md:text-2xl font-semibold font-public-sans text-gray-1">
                Edit Grocery dashboard
              </h1>
            </div>
          </div>

          <div className=" my-5 mt-[48px]">
            <div className=" my-5">
              <Input label={"Task name"} className={""} placeholder={'Task name'} />
            </div>
            <div>
              <h1 className=" text-base font-bold font-mulish text-gray-1">
                Description
              </h1>
            </div>
            <div className=" border rounded-xl p-5">
              <p className=" text-xs md:text-base font-normal font-public-sans text-gray-4">
                The dashboard of the MR Corporation Grocery Mobile App is crafted
                to deliver a seamless and intuitive user experience, ensuring
                users can effortlessly manage their grocery needs. The design
                philosophy centers around clarity, accessibility, and efficiency.{" "}
              </p>
              <ul className=" list-disc px-4 my-4">
                <li className=" text-xs md:text-base font-normal font-public-sans text-gray-4">
                  Clean Layout: A minimalist design with a focus on essential
                  elements, avoiding clutter.
                </li>
                <li className=" text-xs md:text-base font-normal font-public-sans text-gray-4">
                  Intuitive Navigation: Easy-to-understand icons and menus for
                  quick access to various sections like shopping lists, order
                  history, and account settings.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-sm font-normal font-public-sans text-gray-1">
                Attachments
              </h1>
            </div>
            <div className="my-4">
              <div className="flex items-center flex-wrap justify-center md:justify-between gap-4 my-[16px] ">
                {isVisible && (
                  <button className=" relative border rounded-xl px-[14px] py-[10px] bg-[#f3f3f3]  flex items-center justify-between w-full sm:w-[273px]">
                    <span className=" text-sm font-semibold text-gray-2 font-public-sans">
                      Detailed document
                    </span>
                    <span className=" rounded-full bg-white">
                      <Svgs.Oction_download />
                    </span>
                    <span onClick={handleRemove} className=" absolute -top-2 -right-2">
                      <Svgs.CrossIconRed />
                    </span>
                  </button>
                )}
                {isVisible1 && (
                  <button className=" relative border rounded-xl px-[14px] py-[10px] bg-[#f3f3f3]  flex items-center justify-between w-full sm:w-[273px]">
                    <span className=" text-sm font-semibold text-gray-2 font-public-sans">
                      Detailed document
                    </span>
                    <span className=" rounded-full bg-white">
                      <Svgs.Oction_download />
                    </span>
                    <span onClick={handleRemove1} className=" absolute -top-2 -right-2">
                      <Svgs.CrossIconRed />
                    </span>
                  </button>
                )}
                <button className=" border border-[#f7585c] rounded-xl px-[12px] py-[11.5px] flex items-center gap-4 ">
                  <span><Svgs.DocumentRedIcon /></span>
                  <h1 className="text-[#f7585c] text-base font-medium font-public-sans">Add attachments</h1>
                </button>

              </div>
            </div>
          </div>

          <div className="flex items-center justify-between my-6">
            <div className="flex flex-col gap-2">
              <h1 className=" text-sm font-normal font-public-sans text-gray-2">
                Members
              </h1>
              <img onClick={() => { navigate('/user/myteamlast') }} src="/images/Member4.png" alt="" className="w-[42px] md:w-fit" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className=" text-sm font-normal font-public-sans text-gray-2">
                Priority
              </h1>
              <SelectDropdown options={[{ value: 'Easy', label: 'Easy' }, { value: 'Medium', label: 'Medium' }, { value: 'High', label: 'High' },]} />
            </div>
          </div>
          <div className="flex items-center justify-center mt-[48px]">
            <Button handleClick={handleShowSuccessfulPopup} text={'Update'} className={'w-[162px] h-[48px]'} customPadding={'px-[24px] py-[14px]'} />
          </div>
        </div>
      </div>) : (<SuccessfulDialog
        heading={'Update Successful'}
        show={showSuccessfulPopup}
        onClose={handleCloseSuccessfulPopup}
      />)}

    </>
  );
}

export default EditGroceryDialog;
