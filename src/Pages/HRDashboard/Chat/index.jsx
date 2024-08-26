import React from "react";
import Svgs from '../../../assets/svgs/index.js'
import { Layout } from "../../../components/Layout/DashboardLayout.jsx";
import ProfileDialog from "./Elements/ProfileDialog.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Chat_hr() {

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
        <div className="rounded-xl border bg-white">
          <div className="upersection grid grid-cols-12">
            <div className="leftuper p-3 flex justify-between col-span-12 md:col-span-4 items-center md:border-r border-b">
              <div className="flex items-center gap-3">
                <div>
                  <img className=" cursor-pointer" src='/images/womenOnline (4).png' alt="" />
                </div>
                <div>
                  <h1 className="text-sm md:text-base font-medium font-public-sans text-gray-1">Robert Fox</h1>
                  <h1 className="text-xs md:text-sm font-normal font-public-sans text-[#999999]">Online</h1>
                </div>
              </div>
              <div onClick={() => (navigate('/findcolleagues'))} className=" cursor-pointer">
                <Svgs.SearchChatIcon />
              </div>
            </div>
            <div className="rightuper p-3 flex justify-between col-span-12 md:col-span-8 items-center border-b">
              <div className="flex items-center gap-3">
                <div>
                  <img className=" cursor-pointer" onClick={handleShowPopup} src='/images/womenOnline (3).png' alt="" />

                  {showPopup && (
                    <ProfileDialog
                      show={showPopup}
                      onClose={handleClosePopup}
                    />
                  )}
                </div>
                <div>
                  <h1 className="text-sm md:text-base font-medium font-public-sans text-gray-1">Robert Fox</h1>
                  <h1 className="text-xs md:text-sm font-normal font-public-sans text-[#999999]">Online</h1>
                </div>
              </div>
              <div className=" flex items-center gap-[52px]">
                <span className=" cursor-pointer">
                  <Svgs.AudioCallIcon />
                </span>
                <span className=" cursor-pointer">
                  <Svgs.VideoCallIcon />
                </span>
                <span className=" cursor-pointer">
                  <Svgs.Verticaldots />
                </span>
              </div>
            </div>
            <div className="leftdownsection col-span-12 md:col-span-4 md:border-r">
              <div className="text-lg font-medium font-public-sans text-gray-1 px-3 pt-5 pb-4">
                <h1>Messages</h1>
              </div>
              <div className="leftdown p-3 flex justify-between items-center w-full bg-[#f2f2f2] border-b">
                <div className="flex items-center gap-[10px] w-full">
                  <div className="">
                    <img src='/images/womenOnline (1).png' alt="" />
                  </div>
                  <div className=" w-full">
                    <div>
                      <h1 className="text-sm md:text-base font-medium font-poppins text-gray-1">Jimmy</h1>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Svgs.BlueIcon />
                        <h1 className="text-xs md:text-base font-normal font-public-sans text-gray-2">I have complete the... </h1>
                      </div>
                      <div className="">
                        <h1 className=" text-xs md:text-sm font-normal font-public-sans text-gray-4">10.44</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="leftdown p-3 flex justify-between items-center border-b">
                <div className="flex items-center gap-3 w-full">
                  <div>
                    <img src='/images/womenOnline (2).png' alt="" />
                  </div>
                  <div className=" w-full">
                    <div className="flex items-center justify-between">
                      <h1 className="text-sm md:text-base font-medium font-poppins text-gray-1">Nik Smith</h1>
                      <Svgs.OneIcon />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Svgs.BlueIcon />
                        <h1 className="text-sm font-normal font-poppins text-gray-2">I have complete the... </h1>
                      </div>
                      <div>
                        <h1 className="text-xs md:text-sm font-normal font-public-sans text-gray-4">10.44</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightdownsection col-span-12 md:col-span-8 p-4">
              <div className="flex items-center justify-center py-5">
                <Svgs.TodayLineIcon />
              </div>
              <div>
                <div className="chat1right">
                  <div className="flex items-center justify-end">
                    <h1 className="text-sm md:text-base font-normal font-public-sans py-[12px] px-[16px] bg-btn-gradient text-white rounded-l-xl  flex items-center rounded-tr-xl">
                      Hey! we provide Finance services for used car sales at minimum interest prices.
                    </h1>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="block text-xs md:text-sm font-normal font-public-sans text-[#b4b4b4] py-2">05.21</span>
                  </div>
                </div>
                <div className="chat1left inline-block py-10">
                  <div className="flex items-center gap-3">
                    <img src='/images/womenOnline (5).png' alt="" />
                    <h1 className="bg-[#f8f8f8] text-sm md:text-base font-normal font-public-sans text-gray-1 h-[44px] p-4 rounded-r-xl rounded-tl-xl flex items-center">Oh great! I would like to know more</h1>
                  </div>
                  <div className="text-end">
                    <span className="block text-xs md:text-sm font-normal font-public-sans text-[#b4b4b4] py-2">05.21</span>
                  </div>
                </div>
                <div className="chat1right pb-10">
                  <div className="flex items-center justify-end">
                    <h1 className="text-sm md:text-base font-normal font-public-sans py-[12px] px-[16px] bg-btn-gradient text-white rounded-l-xl flex items-center rounded-tr-xl w-fit">
                      Sure, Let me explain all interest prices for difference type of cars.
                    </h1>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="block text-xs md:text-sm font-normal font-public-sans text-[#b4b4b4] py-2">05.21</span>
                  </div>
                </div>
                <div className="chat1left inline-block pb-10">
                  <div className="flex items-center gap-3">
                    <img src='/images/womenOnline (6).png' alt="" />
                    <h1 className="bg-[#f8f8f8] text-sm md:text-base font-normal font-public-sans text-gray-1 h-[44px] p-4 rounded-r-xl rounded-tl-xl flex items-center">Thank you!</h1>
                  </div>
                  <div className="text-end">
                    <span className="block text-xs md:text-sm font-normal font-public-sans text-[#b4b4b4] py-2">05.21</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-[#f8f8f8] p-5 flex items-center gap-[24px] justify-between">
                <input className="text-sm md:text-base font-normal font-poppins text-gray-4 bg-[#f8f8f8] w-full border-none outline-none" placeholder="Write a message ..." type="text" />
                <span className=" cursor-pointer">
                  <Svgs.DocumentChatIcon />
                </span>
                <span className=" cursor-pointer">
                  <Svgs.GalleryIcon />
                </span>
                <span className=" cursor-pointer">
                  <Svgs.SendIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Chat_hr;