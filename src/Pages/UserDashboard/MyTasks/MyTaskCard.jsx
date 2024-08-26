import React from "react";
import HeadingCard from "./HeadingCard";
import TaskDataCard from "./TaskDataCard";
import GroceryDialog from "./Element/GroceryDialog";
import { useState } from "react";
import Svgs from "../../../assets/svgs/index.js";
import CreateTaskDialog from "./Element/CreateTaskDialog";
import MoreOptions from "../../../components/Elements/MoreOptions.jsx";

function MyTaskCard() {
  const [popupCardIndex, setPopupCardIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [addTask, setAddTask] = useState(null);

  const handleShowPopup = (index) => {
    setPopupCardIndex(index);
    setShowPopup(true);
  };

  const handleClosePopup = (index) => {
    setPopupCardIndex(null);
    setShowPopup(false);
  };

  const [taskpopup, setTaskPopup] = useState(false);

  const handleShowTaskPopup = (index) => {
    setTaskPopup(true);
    setAddTask(index);
  };

  const handleCloseTaskPopup = (index) => {
    setTaskPopup(false);
    setAddTask(null);
  };

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(null);
  const handleShowMoreOptions = (index) => {
    setShowMoreOptions(true);
    setShowEdit(index);
  };

  const handleCloseMoreOptions = () => {
    setShowMoreOptions(false);
    setShowEdit(null);
  };

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center sm:justify-start flex-wrap xl:flex-nowrap gap-4  scrollbar-none overflow-x-scroll ">
          {Array(7)
            .fill()
            .map((_, index) => {
              return (
                <>
                  <div key={index} className="my-5">
                    <div className="mx-3 md:mx-0">
                      <HeadingCard title={"TODAY"} value={"2"} />
                    </div>
                    <div className=" h-[70vh] md:h-[40vh] 2xl:h-[50vh] overflow-y-auto scrollbar-none overflow-x-hidden my-5 ">
                      <TaskDataCard
                        handleClick={() => {
                          handleShowPopup(index);
                        }}
                        title={"MOBILE APP"}
                        value1={"2"}
                        value2={"4"}
                        bgcolor={"bg-[#efeeff]"}
                        textcolor={"text-[#5046e4]"}
                        description={"Grocery Mobile App"}
                        handleEditoption={()=>{handleShowMoreOptions(index)}}
                      />
                      <TaskDataCard
                        handleClick={() => {
                          handleShowPopup(index);
                        }}
                        title={"LANDING PAGE"}
                        value1={"5"}
                        value2={"8"}
                        bgcolor={"bg-[#fff7ea]"}
                        textcolor={"text-[#f4a012]"}
                        description={"MR Corporation Website"}
                      />
                      <TaskDataCard
                        handleClick={() => {
                          handleShowPopup(index);
                        }}
                        title={"DASHBOARD"}
                        value1={"3"}
                        value2={"6"}
                        bgcolor={"bg-[#ffebf5]"}
                        textcolor={"text-[#e94a9b]"}
                        description={"Grocery Dashboard"}
                      />
                      <TaskDataCard
                        handleClick={() => {
                          handleShowPopup(index);
                        }}
                        title={"MOBILE APP"}
                        value1={"2"}
                        value2={"4"}
                        bgcolor={"bg-[#efeeff]"}
                        textcolor={"text-[#5046e4]"}
                        description={"Grocery Mobile App"}
                      />
                      {popupCardIndex === index && showPopup && (
                        <GroceryDialog
                          popupCardIndex={popupCardIndex}
                          index={index}
                          show={showPopup}
                          onClose={handleClosePopup}
                        />
                      )}
                      {showEdit === index && showMoreOptions && (<MoreOptions show={showMoreOptions} onClose={handleCloseMoreOptions}/>)}
                    </div>
                    <div className=" flex items-center justify-center mb-[40px]">
                      <button
                        onClick={() => {
                          handleShowTaskPopup(index);
                        }}
                        className="flex items-center justify-center gap-[14px] px-[16px] py-[12px] w-[258px] border-[1px] border-[#fb6d72] border-dashed rounded-lg text-sm font-semibold font-public-sans bg-btn-gradient text-transparent bg-clip-text"
                      >
                        <Svgs.AddIconRed />
                        Add New Task
                      </button>
                      {addTask === index && taskpopup && (
                        <CreateTaskDialog
                          show={taskpopup}
                          onClose={handleCloseTaskPopup}
                        />
                      )}
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MyTaskCard;
