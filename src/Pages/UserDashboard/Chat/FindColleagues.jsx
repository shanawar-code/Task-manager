import React from "react";
import Svgs from '../../../assets/svgs/Index.js'
import { Layout } from "../../../components/Layout/DashboardLayout.jsx";
import ProfileDialog from "./ProfileDialog.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function FindColleagues() {

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

 



const navigate = useNavigate()
  return (
    <>
    <Layout active={'Chat'}>
          <div className="rounded-xl border bg-white h-screen">
            <div className="upersection grid grid-cols-12 ">
              <div className="leftuper p-3 flex justify-between col-span-12 md:col-span-4 items-center md:border-r border-b">
                <div className="flex items-center gap-3">
                  <div onClick={()=>(navigate('/chat'))}>
                    <img className=" cursor-pointer" src='images/womenOnline (4).png' alt="" />
                  </div>
                  <div>
                    <h1 className="text-sm md:text-base font-medium font-public-sans text-gray-1">Robert Fox</h1>
                    <h1 className="text-xs md:text-sm font-normal font-public-sans text-[#999999]">Online</h1>
                  </div>
                </div>
                <div>
                  <Svgs.SearchChatIcon/>
                </div>
              </div>
              <div className="rightuper p-3 flex justify-between col-span-12 md:col-span-8 items-center">
               
              </div>
              <div className="leftdownsection col-span-12 md:col-span-4 md:border-r h-fit md:h-[88vh]">
                <div className="flex items-center justify-center my-5">
            <div className="flex justify-center gap-4 sm:bg-gray-100 rounded-lg items-center py-2 px-4 w-full mx-2">
          <span>
            <Svgs.SearchBar />
          </span>
            <input className="bg-transparent focus:outline-none w-full text-sm font-normal font-public-sans text-gray-1" type="text" placeholder="Search"/>
            <span  className=" cursor-pointer"><Svgs.Cross/></span> 
            </div>
             
                </div>
                <div className="text-lg font-medium font-public-sans text-gray-1 px-3 my-3">
                  <h1>Search results</h1>
                </div>
                {Array(3).fill().map((_,index, arr)=>(
                <div className={`leftdown p-3 flex justify-between items-center w-full border-b `}>
                  <div className="flex items-center gap-[10px] w-full">
                    <div className="">
                    <img src='images/harrywatson.png' alt="" />
                    </div>
                    <div className=" w-full">
                      <div className="flex items-center justify-between">
                        <h1 className="text-sm md:text-base font-medium font-poppins text-gray-1">Harry Watson</h1>
                        <button className=" text-sm font-semibold font-public-sans text-[#497CFF] bg-[#edf2ff] rounded-lg px-[10px] py-[8px] flex items-center justify-between gap-1"><Svgs.AddIconBlue/>Add</button>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              <div className="rightdownsection col-span-12 md:col-span-8 p-4 flex items-center justify-center">
                <div className="flex flex-col ">
                <div className=" w-[70%] mx-auto flex items-center justify-center text-center">
                <h1 className=" text-[30px] md:text-[48px] font-bold text-[#BDBDBD] font-public-sans">Find
                colleagues</h1>
                </div>
                <div className="flex items-center justify-center text-center">
                    <p className=" text-xl font-normal font-public-sans text-[#BDBDBD]">You can search by name, profile id of the person</p>
                </div>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}

export default FindColleagues;