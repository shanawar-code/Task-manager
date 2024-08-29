import React from "react";


function Cards({ tasks, value, tasksCount , svg, employees ,taskcountclass,employeesclass,valueclass,}) {
  return (
    <>
      <div className=" ">
        <div className=" border rounded-xl p-3 flex flex-col gap-3 bg-white">
          <div>
            <h1 className=" text-xs text-gray-4 font-public-sans font-semibold">
              {tasks}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className={`${valueclass} text-xl font-semibold font-public-sans text-[#161617]`} >
              {value}
            </h1>
            <span className=" cursor-pointer">{svg}</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <h1 className={`${taskcountclass} text-xs  font-public-sans font-normal text-gray-4`}>{tasksCount}</h1>   
            <h1 className={`${employeesclass} text-xs  font-public-sans font-normal text-gray-4`}>{employees}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
