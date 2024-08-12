import React from "react";
import Svgs from '../assets/svgs/Index.js'
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav className="bg-white border-b-2 px-4 sm:px-6 md:px-8 py-4">
      <div className="flex flex-row items-center justify-between">
        {/* Logo and Menu Button */}
        <div className="flex flex-row items-center space-x-4 md:space-x-20">
            <img onClick={()=>{navigate('/')}} src={'images/logo.png'} alt="" className="h-10 md:h-12 cursor-pointer" />
          <button className=" cursor-pointer">
            {/* <BackArrowDouble /> */}
            <Svgs.BackArrowDouble/>
          </button>
        </div>

        {/* Search and Profile */}
        <div className="flex items-center space-x-4 md:space-x-8 w-2/5 justify-end">
          <div className="flex justify-center lg:gap-4 bg-gray-100 rounded-lg items-center py-2 px-4 w-[268px]">
          <span>
            <Svgs.SearchBar />
          </span>
            <input
              className="bg-transparent focus:outline-none w-full text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-row space-x-4 items-center cursor-pointer">
            <Svgs.Notification />
            <div>
              <img src={'images/profilePic.png'} alt="" className="h-8 w-8 object-contain cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};