import React, { useState } from "react";
import Svgs from "../../../assets/svgs/index.js";
import Button from "../../../components/Button.jsx";
import { Layout } from "../../../components/Layout/DashboardLayout.jsx";

function MYTeamLast() {

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Anna",
      role: "Team member",
      department: "Web development",
      taskScore: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
      img: "/images/natasha (1).png",
    },
    {
      id: 2,
      name: "Catherine",
      role: "Team member",
      department: "Web development",
      taskScore: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
      img: "/images/natasha (2).png",
    },
    {
      id: 3,
      name: "Orton",
      role: "Team member",
      department: "Web development",
      taskScore: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
      img: "/images/natasha (3).png",
    },
    {
      id: 4,
      name: "Moana",
      role: "Team member",
      department: "Web development",
      taskScore: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
      img: "/images/natasha (4).png",
    },
    {
      id: 5,
      name: "Jessy",
      role: "Team member",
      department: "Web development",
      taskScore: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
      img: "/images/natasha (5).png",
    },
    {
      id: 6,
      name: "Anna",
      role: "Team member",
      department: "Web development",
      taskScore: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
      img: "/images/natasha (6).png",
    },
  ])


  const removeMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };



  return (
    <>
      <Layout active={'My Team'}>
        <div className="">
          <div className="flex gap-5 sm:gap-[0px]   flex-wrap  sm:flex-row justify-center md:justify-between items-start sm:items-center my-3 md:my-0">
            <h2 className="text-2xl  font-bold font-public-sans text-gray-1 ">
              Team Members
            </h2>
            <div className="flex    flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="">
                <Button className={'flex items-center justify-center gap-2 rounded-[8px]'} text={<> <Svgs.AddIconWhite />  Add team member</>} customPadding={'py-[10px] px-4'} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-5  gap-y-4 gap-x-4 my-[12px]">
            {teamMembers.map((employee, index) => (
              <div key={index} className="bg-white py-5 px-6 rounded-2xl border">
                <div className="flex items-center gap-x-4 gap-y-5 mb-4">
                  <img
                    src={employee.img}
                    alt={employee.name}
                    className="rounded-full w-[90px] h-[90px]"
                  />
                  <div className="flex flex-col gap-x-2 gap-y-2">
                    <h3 className="lg:text-xl text-base font-semibold text-gray-1 font-public-sans">
                      {employee.name}
                    </h3>
                    <span
                      className="flex justify-center items-center text-[#497CFF] border border-[#ecf1fe] py-[5px] px-[12px] rounded-[100px] bg-[#ecf1fe] 
                  font-public-sans font-medium md:text-sm text-xs"
                    >
                      {employee.role}
                    </span>
                  </div>
                </div>
                <div className="text-gray-600 mb-4 flex flex-col justify-center 2xl:px-[49px] sm:px-[10px] ">
                  <div className="flex justify-between">
                    <p className="font-public-sans text-[12px] text-gray-4">
                      DEPARTMENT
                    </p>
                    <p className="font-public-sans text-[14px] text-gray-1 font-medium">
                      {employee.department}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-public-sans text-[12px] text-gray-4">
                      TASK SCORE
                    </p>
                    <p className="font-medium text-[#00B037] text-[14px] font-public-sans">
                      {employee.taskScore}
                    </p>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] p-2 rounded-xl mb-4 px-[18px]">
                  <p className="flex items-center space-x-2">
                    <span>
                      <Svgs.Email />
                    </span>
                    <span className="text-gray-2 font-public-sans font-medium text-sm">
                      {employee.email}
                    </span>
                  </p>
                  <hr className="flex justify-center items-center mt-2" />
                  <p className="flex items-center space-x-2 mt-2">
                    <span>
                      <Svgs.Phone />
                    </span>
                    <span className="text-gray-2 font-public-sans font-medium text-sm">
                      {employee.phone}
                    </span>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => removeMember(employee.id)}
                    className="hover:bg-[#555353] hover:text-white hover:border-none py-[7px] px-[12.5px] bg-white border border-gray-2 rounded-lg shadow-sm text-sm font-semibold text-gray-2 font-public-sans">
                    Remove from team
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default MYTeamLast;
