import React from "react";
import Cards from "../../../components/Elements/DashboardCard.jsx";
import { useState } from "react";
import VerifiedSuccessful from "./CreateAMeeting.jsx";
import Svgs from "../../../assets/svgs/Index.js";
import Button from "../../../components/Button.jsx";
import UltimateCard from "../../../components/Elements/UltimateCard.jsx";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Layout } from "../../../components/Layout/DashboardLayout.jsx";
import RoundedCard from "../../../components/Elements/RoundedCard.jsx";
import CreateTaskDialog from '../MyTasks/CreateTaskDialog.jsx'
import Collaborate from "../MYTeam/Collaborative.jsx";


export function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  const [showTaskPopup, setShowTaskPopup] = useState(false);

  const handleShowTaskPopup = () => {
    setShowTaskPopup(true);
  };

  const handleCloseTaskPopup = () => {
    setShowTaskPopup(false);
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




  const [showCollaborative, setShowCollaborative] = useState(false)

  const handleShowCollaborative=()=>{
    setShowCollaborative(true)
  
  }

  const handleCloseCollaborative=()=>{
    setShowCollaborative(false)
 
  }


  
  return (
    <>
      <Layout active={"Dashboard"}>
        <div className="">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  handleClick={handleShowCollaborative}
                    text={"Collaborate"}
                    customPadding={"px-[16px] py-[8px]"}
                    className={"text-sm font-semibold font-public-sans "}
                  />
                }
                heading={"My Team"}
              />
                {showCollaborative && (<Collaborate  show={showCollaborative} onClose={handleCloseCollaborative}/>)}
            </div>
            <div className="col-span-12 lg:col-span-6 ">
              <div className=" rounded-xl p-5 border bg-white">
                <div className="">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm md:text-base font-semibold font-public-sans text-gray-1">
                      Task completion score
                    </h2>
                    <button className=" rounded-lg px-3 py-1 flex items-center gap-3 border">
                      <span className=" hidden sm:block text-base font-normal font-public-sans text-gray-2">
                        Weekly
                      </span>
                      <Svgs.CalendarIcon />
                    </button>
                  </div>

                  <div className="flex flex-col gap-10 md:flex-row items-center justify-between mx-10 my-10 md:my-16 ">
                    {/* Expected Score */}
                    <div className="flex flex-col items-center">
                      <div className="w-40 h-40 relative">
                        <CircularProgressbar
                          value={100}
                        //   text="100%"
                          strokeWidth='12'
                          styles={buildStyles({
                            pathColor: "#3b82f6",
                            textColor: "#000",
                          })}
                        />
                        <div className=" absolute flex flex-col items-center justify-center top-0 inset-0">
                        <p className=" text-[30px] font-bold text-gray-1 font-public-sans">100%</p>
                      <p className="text-xs font-normal font-public-sans text-gray-4 text-center">
                        Expected score
                      </p>
                        </div>
                      </div>
                    </div>

                    {/* Achieved Score */}
                    <div className="flex flex-col items-center">
                      <div className="w-40 h-40 relative">
                        <CircularProgressbar
                          value={82}
                        //   text="82%"
                          strokeWidth='12'
                          styles={buildStyles({
                            pathColor: "#f59e0b",
                            textColor: "#000",
                            trailColor: "#f3f4f6",
                          })}
                        />
                     <div className=" absolute flex flex-col items-center justify-center top-0 inset-0">
                        <p className=" text-[30px] font-bold text-gray-1 font-public-sans text-center">82%</p>
                      <p className="text-xs font-normal font-public-sans text-gray-4 text-center">
                      Achieved score
                      </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mx-3 lg:mx-10 my-2">
                    <div className="flex items-center space-x-2">
                      <Svgs.PlayButton/>
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
             <RoundedCard>
             <div className="flex items-center justify-between">
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
                  <div className=" overflow-x-auto">
                  {meetingCard
                    .map((value,index) => {
                      return (
                        <>
                          <div className=" min-w-[450px] flex items-center gap-3 overflow-x-auto justify-between border-b-2 my-3 pb-3 mt-7">
                            <div className="flex items-center gap-3">
                              <img src="/images/Img.png" alt="" />
                              <h1 className=" text-xs md:text-sm font-epilogue font-semibold text-gray-1">
                                {value.meeting}
                              </h1>
                            </div>
                            <div >
                              <h1 className="text-xs md:text-sm font-epilogue font-semibold text-gray-1 text-end">
                                {value.time}
                              </h1>
                            </div>
                            <div>
                                
                            </div>
                            <div className="flex items-center gap-5">
                            <div className="flex items-center ">
                              <img src={"images/groupimg1.png"} width={'32px'} className=" -mr-2" alt="" />
                              <img src={"images/groupimg2.png"} width={'32px'} className="-mr-2" alt="" />
                              <img src={"images/groupimg3.png"} width={'32px'} alt="" />
                            </div>
                            <div className=" cursor-pointer">
                                <Svgs.Verticaldots/>
                            </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    </div>
             </RoundedCard>
            </div>
            <div className=" col-span-12 lg:col-span-6 ">
                <RoundedCard>
                <div className="flex items-center justify-between">
                    <h1 className=" text-base font-semibold font-epilogue text-gray-1">
                      Tasks
                    </h1>
                    <Button
                      handleClick={handleShowTaskPopup}
                      text={'Create new task'}
                      className={
                        " w-[160px] font-public-sans text-sm font-semibold rounded-lg"
                      }
                      customPadding={"px-[16px], py-[8px]"}
                    />
                     {showTaskPopup && (<CreateTaskDialog show={showTaskPopup} onClose={handleCloseTaskPopup}/>)}
                  </div>
                  <div className=" overflow-x-auto">
                  {taskCard
                    .map((value, index) => {
                      return (
                        <>
                          <div key={index} className=" min-w-[450px] flex items-center overflow-x-auto gap-3 justify-between border-b-2 mb-3 pb-3 mt-7 ">
                            <div className="flex items-center gap-3">
                              <img src="/images/Img.png" alt="" />
                              <h1 className=" text-sm font-epilogue font-semibold text-gray-1">
                                {value.meeting}
                              </h1>
                            </div>
                            

                            <div className="flex items-center ">
                              <img src={"images/groupimg1.png"} width={'32px'} className=" -mr-2" alt="" />
                              <img src={"images/groupimg2.png"} width={'32px'} className="-mr-2" alt="" />
                              <img src={"images/groupimg3.png"} width={'32px'} alt="" />
                            </div>
                          </div>
                        </>
                      );
                    })}
                    </div>
                    <div className="flex items-center justify-center my-2"><button className=" text-base font-normal font-public-sans text-gray-4 px-[4.5px] py-[3px] rounded-lg border">View all</button></div>
                </RoundedCard>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
