import React from "react";
import profilePic from '../Employees/images/laura-chouette-nkWnc-W_GP8-unsplash.jpg';
function Employees() {
  const employeeCard = [
    {
      title: "Anna",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
      profileImg: "../Employees/images/laura-chouette-nkWnc-W_GP8-unsplash.jpg"
    },
    {
      title: "Catherine",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Orton",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Moana",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Jessy",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Lucy",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Bela",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Natasha",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Scarlett",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-5">
        <div className="xs:hidden md:block">
          <h1 className="text-2xl opacity-70 font-bold">Employees</h1>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="border-2 border-black border-opacity-75 px-2 py-2  rounded-md">
            <select className="border-none outline-none" name="" id="">
              <option value="Web development">Web Development</option>
              <option value="Android App">Android App</option>
              <option value="IOS">IOS Develper</option>
              <option value="WordPress">WordPress</option>
            </select>
          </div>
          <div className="bg-[#F75457] rounded-md px-4 flex items-center cursor-pointer">
            <h1 className="text-white flex items-center justify-center">
              <span className="text-4xl mr-3 h-11">+</span>
              Add new employees
            </h1>
          </div>
        </div>
      </div>
      <div className="px-5 py-3 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5">
      {employeeCard.map((value,i)=>{
          return(
        <div key={i} className="border rounded-xl p-5">
          <div className="flex items-center">
            <div className="">
              <img className="w-[80px] h-[80px] rounded-full bg-gray-400 object-cover" src={profilePic} alt="" />
            </div>
            <div className="px-5">
              <h1 className="text-xl font-bold opacity-75">{value.title}</h1>
              <h1 className="bg-[#ecf1fe] text-[#497CFF] rounded-full py-1 px-3 mt-2 font-semibold">
                Team memeber
              </h1>
            </div>
          </div>
          <div className=" px-7 py-5">
            <div className="flex justify-between">
              <h1 className="uppercase opacity-50 ">Department</h1>
              <h1 className="font-semibold">Web Development</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="uppercase opacity-50 ">Task Score</h1>
              <h1 className="text-[#00B037] font-semibold">98%</h1>
            </div>
          </div>
          <div className="bg-[#f5f5f5] px-5 rounded-2xl border">
            <div className=" py-3">
              <h1 className=" font-semibold opacity-70">
                o.williams@email.com
              </h1>
            </div>
            <div className="border-b"></div>
            <div className="py-3">
              <h1 className=" font-semibold opacity-70">+1 650 434 5655</h1>
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <button className="font-semibold text-sm border border-black text-[#4F4F4F] py-1 px-4 rounded-lg">
              View details
            </button>
          </div>
        </div>
        )
        })}
    </div>
      
    </div>
  );
}

export default Employees;
