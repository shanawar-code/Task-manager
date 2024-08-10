import React from 'react';
import Svgs from '../../assets/svgs/Index.js'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TaskCompletionScore = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold font-public-sans text-gray-1">Task completion score</h2>
        <button className=" rounded-lg px-3 py-1 flex items-center gap-3 border">
          <span className=' text-base font-normal font-public-sans text-gray-2'>Weekly</span>
          <Svgs.CalendarIcon/>
        </button>
      </div>

      <div className="flex items-center justify-between mx-10 my-20 space-x-8">
        {/* Expected Score */}
        <div className="flex flex-col items-center">
          <div className="w-36 h-36">
            <CircularProgressbar
              value={100}
              text="100%"
              styles={buildStyles({
                pathColor: '#3b82f6',
                textColor: '#000',
              })}
            />
          </div>
          <p className="text-xs font-normal font-public-sans text-gray-2 text-center mt-2 ">Expected score</p>
        </div>

        {/* Achieved Score */}
        <div className="flex flex-col items-center">
          <div className="w-36 h-36">
            <CircularProgressbar
              value={82}
              text="82%"
              styles={buildStyles({
                pathColor: '#f59e0b',
                textColor: '#000',
                trailColor: '#f3f4f6'
              })}
            />
          </div>
          <p className="text-xs font-normal font-public-sans text-gray-2 text-center mt-2">Achieved score</p>
        </div>
      </div>

      <div className="flex justify-between items-center mx-10 my-2">
        <div className="flex items-center space-x-2">
         <img src='images/playbutton.png' alt="" />
          <div>
            <p className="text-xs font-bold font-public-sans text-gray-1">Completed Task</p>
            <p className="text-[10px] font-normal font-public-sans text-gray-2">Development team</p>
          </div>
        </div>
        <p className="text-[13px] font-bold text-gray-1 font-epilogue">455</p>
      </div>
    </div>
  );
};

export default TaskCompletionScore;
