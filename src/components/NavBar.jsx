// import React from 'react'
import IMAGES from "../assets/images";
import React from "react";
import { BackArrowDouble, Notification, SearchBar } from "../assets/svgs/Index";

export const NavBar = () => {
  return (
    <nav className="bg-white border-b-2 px-4 sm:px-6 md:px-8 py-4">
      <div className="flex flex-row items-center justify-between">
        {/* Logo and Menu Button */}
        <div className="flex flex-row items-center space-x-4 md:space-x-6">
          <a href="">
            <img src={IMAGES.logo} alt="" className="h-10 md:h-12" />
          </a>
          <button className="md:hidden">
            <BackArrowDouble />
          </button>
        </div>

        {/* Search and Profile */}
        <div className="flex flex-row items-center space-x-4 md:space-x-8 w-2/5 justify-end">
          <div className="hidden md:flex bg-gray-100 rounded-lg items-center py-2 px-4 w-full lg:w-3/5">
            <SearchBar />
            <input
              className="bg-transparent focus:outline-none w-full text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-row space-x-4 items-center">
            <Notification />
            <div>
              <img src={IMAGES.profilePic} alt="" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};