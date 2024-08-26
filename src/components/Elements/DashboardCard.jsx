import React from "react";


function Cards({ tasks, value, tasksCount , svg, employees ,taskcountclass,employeesclass,valueclass,}) {
  return (
    <>
      <div className=" ">
        <div className=" border rounded-xl p-3 flex flex-col gap-3 bg-white">
          <div>
            <h1 className=" text-xs text-gray-4 font-poppins font-semibold">
              {tasks}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className={`${valueclass}text-xl md:text-2xl font-semibold font-public-sans`} >
              {value}
            </h1>
            <span>{svg}</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <h1 className={`${taskcountclass} text-xs  font-public-sans font-normal`}>{tasksCount}</h1>   
            <h1 className={`${employeesclass} text-xs  font-public-sans font-normal`}>{employees}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
