import React from "react";
import {useState, useEffect, useRef } from "react";
import Svgs from '../../../assets/svgs/Index.js'



function ChatMediaDialog({ show, onClose }) {
  const popupRef = useRef();


  const imgData=[
    {
        src: '/images/mobileimg.png',
    },
    {
        src: '/images/mobileimg.png',
    },
    {
        src: '/images/heartimg (1).png',
    },
    {
        src: '/images/heartimg (1).png',
    },
    {
        src: '/images/heartimg (1).png'
    },
  
  ]
 

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
    <div className="fixed inset-0 flex items-start justify-end bg-white bg-opacity-10 z-50">
      <div ref={popupRef} className=" p-5 scroll-smooth bg-white shadow-lg border rounded-xl overflow-y-scroll h-full">
       <div className="flex items-center justify-between border-b-2 pb-4">
        <h1 className=" text-xl font-medium font-public-sans text-gray-1">Media</h1>
         <span onClick={onClose} className=" cursor-pointer"><Svgs.CrossIcon/></span> 
       </div>
       {imgData.map((value,index)=>(
         <div key={index} className="grid grid-cols-5 gap-5 my-5">
            <img src={value.src} alt="" />
            <img src={value.src} alt="" />
            <img src={value.src} alt="" />
            <img src={value.src} alt="" />
            <img src={value.src} alt="" />
         </div>
       ))}
      <div className="flex items-center justify-center">
        <button className=" font-normal font-public-sans text-gray-4 rounded-lg px-[4.5px] py-[3px] border border-gray-4">View all</button>
      </div>
      </div>
    </div>
  );
}

export default ChatMediaDialog;
