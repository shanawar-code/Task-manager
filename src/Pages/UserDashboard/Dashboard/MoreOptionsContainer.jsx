import React, { useState, useRef } from "react";
import MoreOptions from "../../../components/Elements/MoreOptions";
import Svgs from '../../../assets/svgs/index.js'


const MoreOptionsContainer = () => {
  const [activePopup, setActivePopup] = useState(null); // To track which popup is active
  const iconRefs = useRef([]); // To store references to the 3 dots icons
  
  const handleShowPopup = (index) => {
    setActivePopup(index); // Show the popup for the corresponding icon
  };

  const handleClosePopup = () => {
    setActivePopup(null); // Close any open popup
  };

  return (
    <div className="">
      {/* Rendering 5 instances of the 3 dots icons */}
      {[...Array(1)].map((_, index) => (
        <div key={index} className="">
          {/* 3 dots icon */}
          <button
            ref={(el) => {
              if (el) iconRefs.current[index] = el; // Safely assign the ref to the array
            }}
            onClick={() => handleShowPopup(index)}
            className="text-3xl"
          >
           <Svgs.Verticaldots/>
          </button>

          {/* Conditionally rendering the MoreOptions popup based on activePopup */}
          {activePopup === index && (
            <MoreOptions
              show={true}
              onClose={handleClosePopup}
              anchorRef={iconRefs.current[index]}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MoreOptionsContainer;