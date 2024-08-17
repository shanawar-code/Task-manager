import React from "react";
import Svgs from '../../assets/svgs/Index.js'
import { Layout } from "../../components/Layout/DashboardLayout.jsx";
import ProfileDialog from "./ProfileDialog.jsx";
import { useState } from "react";


function Chat() {

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <>
    <Layout active={'Chat'}>
      <div className="chatsMainPart">
        <div className="chatHeading">
          <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">Chats</h1>
        </div>
        <div className="ChatWholepart my-5">
          <div className="rounded-xl border">
            <div className="upersection grid grid-cols-12">
              <div className="leftuper p-3 flex justify-between col-span-12 md:col-span-4 items-center border-r border-b">
                <div className="flex items-center gap-3">
                  <div>
                    <img src='images/womenOnline (4).png' alt="" />
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
              <div className="rightuper p-3 flex justify-between col-span-12 md:col-span-8 items-center border-b">
                <div className="flex items-center gap-3">
                  <div>
                  <img className=" cursor-pointer" onClick={handleShowPopup} src='images/womenOnline (3).png' alt="" />

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
                <div className="flex items-center gap-[52px]">
                  <Svgs.AudioCallIcon/>
                  <Svgs.VideoCallIcon/>
                  <Svgs.Verticaldots/>
                </div>
              </div>
              <div className="leftdownsection col-span-12 md:col-span-4 border-r">
                <div className="text-lg font-medium font-public-sans text-gray-1 px-3 pt-5 pb-4">
                  <h1>Messages</h1>
                </div>
                <div className="leftdown p-3 flex justify-between items-center bg-[#f2f2f2] border-b">
                  <div className="flex items-center gap-[10px]">
                    <div>
                    <img src='images/womenOnline (1).png' alt="" />
                    </div>
                    <div className="">
                      <div>
                        <h1 className="text-sm md:text-base font-medium font-poppins text-gray-1">Jimmy</h1>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Svgs.BlueIcon/>
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
                  <div className="flex items-center gap-3">
                    <div>
                    <img src='images/womenOnline (2).png' alt="" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h1 className="text-sm md:text-base font-medium font-poppins text-gray-1">Nik Smith</h1>
                        <Svgs.OneIcon/>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                         <Svgs.BlueIcon/>
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
                    <img src='images/womenOnline (5).png' alt="" />
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
                    <img src='images/womenOnline (6).png' alt="" />
                      <h1 className="bg-[#f8f8f8] text-sm md:text-base font-normal font-public-sans text-gray-1 h-[44px] p-4 rounded-r-xl rounded-tl-xl flex items-center">Thank you!</h1>
                    </div>
                    <div className="text-end">
                      <span className="block text-xs md:text-sm font-normal font-public-sans text-[#b4b4b4] py-2">05.21</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border bg-[#f8f8f8] p-5 flex items-center gap-[24px] justify-between">
                  <input className="text-sm md:text-base font-normal font-poppins text-gray-4 bg-[#f8f8f8] w-full h-full border-none outline-none" placeholder="Write a message ..." type="text" />
                  <Svgs.DocumentChatIcon/>
                  <Svgs.GalleryIcon/>
                  <Svgs.SendIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default Chat;