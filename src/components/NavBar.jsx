import React from "react";
import Svgs from '../assets/svgs/Index.js'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSidebarContext } from "../Context/ContextLayout.jsx";


export const NavBar = () => {



  const { sidebarOpen, setSidebarOpen } = useSidebarContext()



  const navigate = useNavigate()
  return (
    <nav className="bg-white lg:border-b-2 px-4 sm:px-6 md:px-8 py-4">
      <div className="flex flex-row items-center justify-between">
        {/* Logo and Menu Button */}
        <div className="flex flex-row items-center space-x-4 md:gap-24">
          <img onClick={() => { navigate('/') }} src={'/images/Logo.png'} alt="" className="w-[36px] h-[24px] lg:w-full lg:h-12 cursor-pointer" />
          <button onClick={() => { setSidebarOpen(!sidebarOpen) }} className="hidden xl:block cursor-pointer">
            <Svgs.BackArrowDouble className={`w-5 h-5 transition-transform duration-500 ${sidebarOpen ? '' : 'rotate-180'}`} />
          </button>
        </div>

        {/* Search and Profile */}
        <div className="flex items-center  space-x-4 md:space-x-8 w-2/5 justify-end">
        <Svgs.SearchBar/>
          <div className="hidden md:flex justify-center lg:gap-4 sm:bg-gray-100 rounded-lg items-center py-2 px-4 w-[268px]">
            <span>
              <Svgs.SearchBar />
            </span>
            <input
              className="bg-transparent focus:outline-none w-full text-sm font-normal font-public-sans text-gray-4"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-row space-x-4 items-center cursor-pointer">
            <Svgs.Notification />
            <div onClick={() => { navigate('/my-profile') }}>
              <img src={'/images/profilePic.png'} alt="" className="h-8 w-8 object-contain cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};