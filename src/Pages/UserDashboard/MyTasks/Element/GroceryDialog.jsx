import React from "react";
import { useState, useEffect, useRef } from "react";
import { Input } from "../../../../components/Input";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
import Svgs from '../../../../assets/svgs/index.js'
import CreateTaskDialog from "./CreateTaskDialog.jsx";
import EditGroceryDialog from "./EditGroceryDialog.jsx";
import ShareGroceryDialog from "../../Chat/Element/ShareGroceryDialog";


function GroceryDialog({ show, onClose, hidden, popupCardIndex, index }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [isVisible, setIsVisible] = useState(true)

  const handleRemove=()=>{
    setIsVisible(false)
  }


  const [isVisible1, setIsVisible1] = useState(true)

  const handleRemove1=()=>{
    setIsVisible1(false)
  }

  const [teamMembers, setTeamMembers] = useState([{ id: 1 }, { id: 2 }])


  const removeMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };


  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };



  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleShowEditPopup = () => {
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };


  const [showEditPopup2, setShowEditPopup2] = useState(false);

  const handleShowEditPopup2 = () => {
    setShowEditPopup2(true);
  };

  const handleCloseEditPopup2 = () => {
    setShowEditPopup2(false);
  };


  const [showGrocerySharePopup, setShowGrocerySharePopup] = useState(false);

  const handleShowGrocerySharePopup = () => {
    setShowGrocerySharePopup(true);
  };

  const handleCloseGrocerySharePopup = () => {
    setShowGrocerySharePopup(false);
  };


  const [showGrocerySharePopup2, setShowGrocerySharePopup2] = useState(false);

  const handleShowGrocerySharePopup2 = () => {
    setShowGrocerySharePopup2(true);
  };

  const handleCloseGrocerySharePopup2 = () => {
    setShowGrocerySharePopup2(false);
  };




  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };



  const [selectedValue, setSelectedValue] = useState("Easy"); // Default value

  const handleChange = (e) => {
    setSelectedValue(e.target.value); // Update the state with the selected option
  };


  useEffect(() => {
    if (show || showPopup) {
      // Disable scrolling on the background when the popup is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling again when the popup is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      // Clean up by enabling scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [show, showPopup]);



  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="grocery-scrollbar-none overflow-y-auto h-[80vh]">
        <div ref={popupRef} className="bg-white w-[95vw] md:max-w-[61vw] rounded-xl p-3 md:p-5 ">
          <div className="flex items-center">
          <div className="hidden md:block w-[40%]">
          </div>
          <div className="flex items-center flex-wrap  justify-center md:justify-between gap-3 w-full md:w-[70%]">
           
            <div className="">
              <h1 className=" text-lg :text-2xl font-semibold font-public-sans text-gray-1">
                Grocery dashboard
              </h1>
            </div>
            <div className=" hidden lg:flex flex-wrap items-center justify-end gap-3">
              <button onClick={handleShowEditPopup} className=" text-base font-normal font-public-sans text-gray-2 flex items-center gap-2 border py-1 px-3 rounded-lg">
                <Svgs.WritingPencilBlue />
                Edit
              </button>
              {showEditPopup && (<EditGroceryDialog show={showEditPopup} onClose={handleCloseEditPopup} />)}
              <button onClick={handleShowGrocerySharePopup} className=" text-base font-normal font-public-sans text-gray-2 flex items-center gap-2 border py-1 px-3 rounded-lg">
                <Svgs.ShareIconBlue />
                Share
              </button>
              {popupCardIndex === index && showGrocerySharePopup && (<ShareGroceryDialog show={showGrocerySharePopup} onClose={handleCloseGrocerySharePopup} />)}
            </div>
          </div>
          </div>
          <div className="flex md:items-center justify-between mt-10">
            <div className="flex flex-col gap-2">
              <div>
                <h1 className=" text-sm font-normal font-public-sans text-gray-2">
                  Members
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <img src="/images/ortan (1).png" alt="" />
                <img src="/images/ortan (2).png" alt="" />
                <img src="/images/ortan (3).png" alt="" />
                <span className=" bg-[#e0e0e0] h-7 w-7 rounded-full flex items-center justify-center"><Svgs.AddIconGray /></span>
              </div>
              <div className="lg:hidden flex flex-wrap items-center justify-end gap-3 my-4">
              <button onClick={handleShowEditPopup2} className=" text-base font-normal font-public-sans text-gray-2 flex items-center gap-2 border py-1 px-3 rounded-lg">
                <Svgs.WritingPencilBlue />
                Edit
              </button>
              {showEditPopup2 && (<EditGroceryDialog show={showEditPopup2} onClose={handleCloseEditPopup2} />)}


              <button onClick={handleShowGrocerySharePopup2} className=" text-base font-normal font-public-sans text-gray-2 flex items-center gap-2 border py-1 px-3 rounded-lg">
                <Svgs.ShareIconBlue />
                Share
              </button>
              {popupCardIndex === index && showGrocerySharePopup2 && (<ShareGroceryDialog show={showGrocerySharePopup2} onClose={handleCloseGrocerySharePopup2} />)}
            </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className=" text-[10px] md:text-sm font-normal font-public-sans text-gray-2">
                Priority
              </h1>
             {/* <span className="bg-[#fff7ea] rounded-full px-[14px]">
              <select
                className=" bg-transparent text-[#f4a012] text-[10px] md:text-xs font-semibold font-public-sans  py-[10px] outline-none"
                value=""
                name=""
                id=""
              >
                <option
                  value="Easy"
                  className="text-[#f4a012] text-xs font-semibold font-public-sans"
                >
                  Easy
                </option>
                <option
                  value="Medium"
                  className="text-[#f4a012] text-xs font-semibold font-public-sans"
                >
                  Medium
                </option>
                <option
                  value="High"
                  className="text-[#f4a012] text-xs font-semibold font-public-sans"
                >
                  High
                </option>
              </select>
             </span> */}
              <span className="bg-[#fff7ea] rounded-full px-[14px]">
      <select
        className="bg-transparent text-[#f4a012] text-[10px] md:text-xs font-semibold font-public-sans py-[10px] outline-none"
        value={selectedValue} // Bind the state to the select element
        onChange={handleChange} // Update the state on change
        name="difficulty"
        id="difficulty-select"
      >
        <option
          value="Easy"
          className="text-[#f4a012] text-xs font-semibold font-public-sans"
        >
          Easy
        </option>
        <option
          value="Medium"
          className="text-[#f4a012] text-xs font-semibold font-public-sans"
        >
          Medium
        </option>
        <option
          value="High"
          className="text-[#f4a012] text-xs font-semibold font-public-sans"
        >
          High
        </option>
      </select>
    </span>
            </div>
          </div>
          <div className=" my-5">
            <div>
              <h1 className=" text-sm font-normal font-public-sans text-gray-1">
                Description
              </h1>
            </div>
            <div className=" border rounded-xl p-5 mt-2">
              <p className=" text-xs md:text-base font-normal font-public-sans text-gray-4">
                The dashboard of the MR Corporation Grocery Mobile App is crafted
                to deliver a seamless and intuitive user experience, ensuring
                users can effortlessly manage their grocery needs. The design
                philosophy centers around clarity, accessibility, and efficiency.{" "}
              </p>
              <ul className=" list-disc px-4 my-4">
                <li className=" text-xs md:text-base font-normal font-public-sans text-gray-4">
                  Clean Layout: A minimalist design with a focus on essential
                  elements, avoiding clutter.
                </li>
                <li className=" text-xs md:text-base font-normal font-public-sans text-gray-4">
                  Intuitive Navigation: Easy-to-understand icons and menus for
                  quick access to various sections like shopping lists, order
                  history, and account settings.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-sm font-normal font-public-sans text-gray-1">
                Attachments
              </h1>
            </div>
            <div className="my-4 border-b border-dashed mb-[16px]">
              <div className="flex items-center flex-wrap justify-between gap-4 my-[16px] ">
                {isVisible && (
                <button className=" border rounded-xl px-[14px] py-[10px] bg-[#f3f3f3]  flex items-center justify-between w-full lg:w-[273px] relative">
                  <span className=" text-sm font-semibold text-gray-2 font-public-sans">
                    Detailed document
                  </span>
                  <span className=" rounded-full bg-white">
                    <Svgs.Oction_download />
                  </span>
                  <span onClick={handleRemove} className=" absolute -top-2 -right-2">
                    <Svgs.Cross />
                  </span>
                </button>
                )}
                {isVisible1 && (
                <button className=" border rounded-xl px-[14px] py-[10px] bg-[#f3f3f3]  flex items-center justify-between w-full lg:w-[273px] relative">
                  <span className=" text-sm font-semibold text-gray-2 font-public-sans">
                    Detailed document
                  </span>
                  <span className=" rounded-full bg-white">
                    <Svgs.Oction_download />
                  </span>
                  <span onClick={handleRemove1} className=" absolute -top-2 -right-2">
                    <Svgs.Cross />
                  </span>
                </button>
                )}
                <button onClick={handleShowPopup} className=" border border-[#f7585c] rounded-xl px-[12px] py-[11.5px] flex items-center gap-4 ">
                  <span><Svgs.DocumentRedIcon /></span>
                  <h1 className="text-[#f7585c] text-base font-medium font-public-sans">Add attachments</h1>
                </button>
                {showPopup && (
                  <CreateTaskDialog
                    show={showPopup}
                    onClose={handleClosePopup}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="mt-[48px]">
              <label htmlFor="" className="text-sm font-normal font-public-sans text-gray-2">Comments & discussions</label>
              <div className="flex items-center gap-4 my-2">
                <input type="text" className=" w-full border px-[14px] py-[10px] rounded-xl" /><Button text={'Send'} customPadding={'px-[14px] py-[10px]'} />
              </div>
            </div>
          </div>
          {Array(4).fill().map((_, index) => (

            <div key={index} className="px-[12px] py-[20px] border-b-2">
              <div className="flex justify-between">
                <div className="leftpart flex items-center gap-4">
                  <div>
                    <img src="/images/beautifulGirlpic.png" alt="" className=" w-[28px]" />
                  </div>
                  <div>
                    <h1 className=" text-xs md:text-sm font-semibold font-public-sans text-gray-1">Anna</h1>
                    <h1 className=" text-sm font-normal font-public-sans text-gray-2">On which file I need to start the work?</h1>
                  </div>
                </div>
                <div className="rightpart flex gap-1 md:gap-[14px]">
                  <span className=" text-[10px] md:text-xs font-public-sans font-normal text-[#497CFF] flex gap-2"><Svgs.ReplyIcon />Reply</span>
                  <h1 className="text-xs font-public-sans font-normal text-gray-4 md:block hidden">5 hours ago</h1>
                  <h1 className="text-xs font-public-sans font-normal text-gray-4 md:hidden">5H ago</h1>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default GroceryDialog;
