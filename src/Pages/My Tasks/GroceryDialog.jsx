import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function GroceryDialog({ show, onClose, hidden }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
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
      <div ref={popupRef} className="bg-white w-[80vw]  rounded-xl p-5">
        <div className="grid grid-cols-3">
          <div></div>
          <div>
            <h1 className=" text-2xl font-semibold font-public-sans text-gray-1">
              Grocery dashboard
            </h1>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button className=" text-base font-normal font-public-sans text-gray-2 flex items-center gap-2 border py-1 px-3 rounded-lg">
              <img src="images/writingpencilblue.png" alt="" />
              Edit
            </button>
            <button className=" text-base font-normal font-public-sans text-gray-2 flex items-center gap-2 border py-1 px-3 rounded-lg">
              <img src="images/shareblueicon.png" alt="" />
              Share
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10">
          <div className="flex flex-col gap-2">
            <h1 className=" text-sm font-normal font-public-sans text-gray-2">
              Members
            </h1>
            <img src="images/Member4.png" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className=" text-sm font-normal font-public-sans text-gray-2">
              Priority
            </h1>
            <select
              className="bg-[#fff7ea] text-[#f4a012] text-xs font-semibold font-public-sans py-2 px-3 rounded-full"
              value="Medium"
              name=""
              id=""
            >
              <option
                value="Easy"
                className="text-[#f4a012] text-xs font-semibold font-public-sans"
              >
                Easy
              </option>
              <option
                value="Medium"
                className="text-[#f4a012] text-xs font-semibold font-public-sans"
              >
                Medium
              </option>
              <option
                value="High"
                className="text-[#f4a012] text-xs font-semibold font-public-sans"
              >
                High
              </option>
            </select>
          </div>
        </div>
        <div className=" my-5">
          <div>
            <h1 className=" text-sm font-normal font-public-sans text-gray-1">
              Description
            </h1>
          </div>
          <div className=" border rounded-xl p-5">
            <p className=" text-base font-normal font-public-sans text-gray-4">
              The dashboard of the MR Corporation Grocery Mobile App is crafted
              to deliver a seamless and intuitive user experience, ensuring
              users can effortlessly manage their grocery needs. The design
              philosophy centers around clarity, accessibility, and efficiency.{" "}
            </p>
            <ul className=" list-disc px-4 my-4">
              <li className=" text-base font-normal font-public-sans text-gray-4">
                Clean Layout: A minimalist design with a focus on essential
                elements, avoiding clutter.
              </li>
              <li className=" text-base font-normal font-public-sans text-gray-4">
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
          <div className="my-5">
            <div className="flex items-center gap-4">
              <div className=" border rounded-xl p-5 bg-[#f3f3f3]  flex items-center justify-between w-full lg:w-[273px]">
                <h1 className=" text-sm font-semibold text-gray-2 font-public-sans">
                  Detailed document
                </h1>
                <span className=" rounded-full bg-white">
                  <img src="images/download.png" className="" alt="" />
                </span>
              </div>
              <div className=" border rounded-xl p-5 bg-[#f3f3f3]  flex items-center justify-between w-full lg:w-[273px]">
                <h1 className=" text-sm font-semibold text-gray-2 font-public-sans">
                  Detailed document
                </h1>
                <span className=" rounded-full bg-white">
                  <img src="images/download.png" className="" alt="" />
                </span>
              </div>
              <div className=" border border-[#f7585c] rounded-xl p-5 flex items-center gap-4 w-full lg:w-[180px]">
                <span><img src='images/reddocumenticon.png' alt="" /></span>
                <h1 className="text-[#f7585c] text-base font-medium font-public-sans">Add attachments</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroceryDialog;
