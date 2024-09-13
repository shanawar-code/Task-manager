import Svgs from 'assets/svgs/Index';
import React from 'react'
import { useState } from 'react';

function HeadingCard({ title, value }) {

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('Python developer team');
  const [inputValue, setInputValue] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setText(inputValue); // Update the text
    setIsEditing(false); // Exit edit mode
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <>
      <div className={` rounded-xl p-5 flex items-center justify-between w-full ${isEditing ? 'bg-white border border-gray-2' : 'bg-white text-base font-semibold font-public-sans text-gray-1'}`}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="border-none outline-none w-full text-base font-semibold font-public-sans text-gray-1"
            />
          </>
        ) : (
          <>
            <div className='flex items-center gap-2'>
              <span>{text}</span>
             
            </div>
          </>
        )}

        {isEditing ? (
          <button onClick={handleSaveClick} className=" bg-btn-gradient text-transparent bg-clip-text ml-4 text-base font-semibold font-public-sans">
            Save
          </button>
        ) : (
          <button onClick={handleEditClick} className="text-gray-400 ml-4">
            <Svgs.WritingPencil />
          </button>
        )}
      </div>
    </>
  )
}

export default HeadingCard