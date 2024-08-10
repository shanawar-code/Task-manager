import React from "react";


function Cards({ tasks, value, tasksCount , svg}) {
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
            <h1 className=" text-2xl font-semibold font-public-sans text-[#161617]">
              {value}
            </h1>
            <span>{svg}</span>
          </div>
          <div>
            <h1 className=" text-xs text-gray-4 font-poppins font-normal">
              {tasksCount}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
