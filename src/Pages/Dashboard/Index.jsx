import React from "react";
import Cards from "../../components/Elements/DashboardCard.jsx";

import { useState } from "react";
import VerifiedSuccessful from "./VerifiedSuccessful.jsx";
import Svgs from "../../assets/svgs/Index.js";
import Button from "../../components/Button.jsx";
import UltimateCard from "../../components/Elements/UltimateCard.jsx";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Layout } from "../../components/Layout/DashboardLayout.jsx";

export function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const meetingCard=[
    {
        meeting: 'Daily meeting',
        time: '2:30 PM',
    },
    {
        meeting: 'Daily meeting',
        time: '2:30 PM',
    },
    {
        meeting: 'Daily meeting',
        time: '2:30 PM',
    },
  ]

  const taskCard=[
    {
        meeting: 'Website deisgn',
        time: '2:30 PM',
    },
    {
        meeting: 'Website deisgn',
        time: '2:30 PM',
    },
    {
        meeting: 'Website deisgn',
        time: '2:30 PM',
    },
  ]
  return (
    <>
      <Layout active={"Dashboard"}>
        <div className=" md:p-5">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <Cards
              tasks={"My tasks"}
              tasksCount={"4 new tasks"}
              value={"5"}
              svg={<Svgs.Tasks />}
            />
            <Cards
              tasks={"Meetings"}
              tasksCount={"Upcoming meeting: 12:00 Pm today"}
              value={"2"}
              svg={<Svgs.Meeting />}
            />
            <Cards
              tasks={"My Attendance"}
              tasksCount={"Log in: 10:04 AM today"}
              value={"98%"}
              svg={<Svgs.Calender />}
            />
            <Cards
              tasks={"My leaves"}
              tasksCount={"Last applied: 21st Jan 2024"}
              value={"12"}
              svg={<Svgs.MyLeave />}
            />
          </div>
          <div className=" grid grid-cols-12 my-5 gap-5">
            <div className="col-span-12 lg:col-span-6">
              <UltimateCard
                fullname={"Rudolph"}
                role={"Python developer"}
                numberoftasks={"14 Tasks"}
                attendance={"98%"}
                buttonBtn={
                  <Button
                    text={"Collaborate"}
                    customPadding={"px-[16px] py-[8px]"}
                    className={"text-sm font-semibold font-public-sans"}
                  />
                }
                heading={"My Team"}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 ">
              <div className=" rounded-xl p-5 border bg-white">
                <div className="">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className=" text-xs sm:text-base font-semibold font-public-sans text-gray-1">
                      Task completion score
                    </h2>
                    <button className=" rounded-lg px-3 py-1 flex items-center gap-3 border">
                      <span className=" text-base font-normal font-public-sans text-gray-2">
                        Weekly
                      </span>
                      <Svgs.CalendarIcon />
                    </button>
                  </div>

                  <div className="flex flex-col gap-10 md:flex-row items-center justify-between mx-10 my-10 md:my-20 ">
                    {/* Expected Score */}
                    <div className="flex flex-col items-center">
                      <div className="w-36 h-36">
                        <CircularProgressbar
                          value={100}
                          text="100%"
                          styles={buildStyles({
                            pathColor: "#3b82f6",
                            textColor: "#000",
                          })}
                        />
                      </div>
                      <p className="text-xs font-normal font-public-sans text-gray-2 text-center mt-2 ">
                        Expected score
                      </p>
                    </div>

                    {/* Achieved Score */}
                    <div className="flex flex-col items-center">
                      <div className="w-36 h-36">
                        <CircularProgressbar
                          value={82}
                          text="82%"
                          styles={buildStyles({
                            pathColor: "#f59e0b",
                            textColor: "#000",
                            trailColor: "#f3f4f6",
                          })}
                        />
                      </div>
                      <p className="text-xs font-normal font-public-sans text-gray-2 text-center mt-2">
                        Achieved score
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mx-10 my-2">
                    <div className="flex items-center space-x-2">
                      <img src="images/playbutton.png" alt="" />
                      <div>
                        <p className="text-xs font-bold font-public-sans text-gray-1">
                          Completed Task
                        </p>
                        <p className="text-[10px] font-normal font-public-sans text-gray-2">
                          Development team
                        </p>
                      </div>
                    </div>
                    <p className="text-[13px] font-bold text-gray-1 font-epilogue">
                      455
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-12 my-5 gap-5">
            <div className=" col-span-12 lg:col-span-6 ">
              <div className="">
                <div className=" border rounded-xl p-4 bg-white">
                  <div className="flex flex-wrap items-center justify-between">
                    <h1 className=" text-base font-semibold font-epilogue text-gray-1">
                      Meeting
                    </h1>
                    <Button
                      handleClick={handleShowPopup}
                      text={'Create new meeting'}
                      className={
                        " w-[160px] font-public-sans text-sm font-semibold rounded-lg"
                      }
                      customPadding={"px-[16px], py-[8px]"}
                    />
                    {showPopup && (
                <VerifiedSuccessful
                  show={showPopup}
                  onClose={handleClosePopup}
                />
              )}
                  </div>
                  {meetingCard
                    .map((value,index) => {
                      return (
                        <>
                          <div className=" flex items-center gap-3 flex-wrap lg:flex-nowrap justify-between border-b-2 my-3 pb-3 mt-7">
                            <div className="flex items-center gap-3">
                              <img src="/images/Img.png" alt="" />
                              <h1 className=" text-xs md:text-sm font-epilogue font-semibold text-gray-1">
                                {value.meeting}
                              </h1>
                            </div>
                            <div>
                              <h1 className="text-xs md:text-sm font-epilogue font-semibold text-gray-1">
                                {value.time}
                              </h1>
                            </div>

                            <div className="flex items-center gap-5">
                              <img src={"images/Member (1).png"} alt="" />
                              <img className=" cursor-pointer" src={'images/verticaldots.png'} alt="" />
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>{" "}
            </div>
            <div className=" col-span-12 lg:col-span-6 ">
              <div className="">
                <div className=" border rounded-xl p-4 bg-white">
                  <div className="flex flex-wrap items-center justify-between">
                    <h1 className=" text-base font-semibold font-epilogue text-gray-1">
                      Tasks
                    </h1>
                    <Button
                      handleClick={handleShowPopup}
                      text={'Create new task'}
                      className={
                        " w-[160px] font-public-sans text-sm font-semibold rounded-lg"
                      }
                      customPadding={"px-[16px], py-[8px]"}
                    />
                  </div>
                  {taskCard
                    .map((value) => {
                      return (
                        <>
                          <div className=" flex items-center gap-3 justify-between border-b-2 my-3 pb-3 mt-7 overflow-x-auto">
                            <div className="flex items-center gap-3">
                              <img src="/images/Img.png" alt="" />
                              <h1 className=" text-sm font-epilogue font-semibold text-gray-1">
                                {value.meeting}
                              </h1>
                            </div>
                            <div>
                              <h1 className=" text-sm font-epilogue font-semibold text-gray-1">
                                {value.time}
                              </h1>
                            </div>

                            <div className="flex items-center gap-5">
                              <img src={"images/Member (1).png"} alt="" />
                              {/* <img src={'images/verticaldots.png'} alt="" /> */}
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
