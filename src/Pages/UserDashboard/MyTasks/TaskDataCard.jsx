import React from 'react'
import Svgs from 'assets/svgs/Index'
import { useState } from 'react';
import MoreTaskoptions from './Element/MoreTaskoptions';
import ShareGroceryDialog from '../Chat/Element/ShareGroceryDialog';


function TaskDataCard({ title, value1, value2, description, bgcolor, textcolor, handleClick, handleEditoption }) {

  const [showMoreOptions, setShowMoreOptions] = useState(false)
  const [showEdit, setShowEdit] = useState(null)
  const handleShowMoreOptions = (index) => {
    setShowMoreOptions(true)
    setShowEdit(index)
  }

  const handleCloseMoreOptions = () => {
    setShowMoreOptions(false)
    setShowEdit(null)
  }


  const [showPopups, setShowPopups] = useState(false)
  

  const handleShowPopups = (index) => {
    setShowPopups(true)
    
  }

  const handleClosePopups = (index) => {
    setShowPopups(false)
   

  }
  const [showPopup, setShowPopup] = useState(false)
  const handleShowPopup = (index) => {
    setShowPopup(true)
    
  }

  const handleClosePopup = (index) => {
    setShowPopup(false)
   

  }
  return (
    <>
      <div  className=' border rounded-xl bg-white p-5 mb-5 mx-2 w-[288px] cursor-pointer' >
        <div className='flex items-center justify-between'>
          <div className=' cursor-pointer'>
            <h1 className={` ${bgcolor} ${textcolor} w-fit py-2 px-3  rounded-full text-xs font-semibold font-public-sans`}>{title}</h1>
          </div>
          <div className='flex items-center gap-3'>
            <div className='bg-[#f3f3f3] rounded-full w-7 h-7 flex items-center justify-center'>
              <button onClick={ handleShowPopup}><Svgs.ShareIcon /></button>
              { showPopup && (<ShareGroceryDialog show={showPopup} onClose={handleClosePopup} />)}
            </div>
            <div     className=' cursor-pointer'>
              <button onClick={ handleShowPopups}><Svgs.Verticaldots /></button>
              { showPopups && (<MoreTaskoptions show={showPopups} onClose={handleClosePopups} />)}
            </div>
          </div>
        </div>
        <div className='my-5'>
          <h1 className=' text-base font-semibold font-public-sans text-gray-1'>{description}</h1>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <div className=' flex items-center gap-2'>
              <Svgs.DocumentIcon />
              <h1 className=' text-xs font-normal font-public-sans text-gray-4'>{value1}</h1>
            </div>
            <div className=' flex items-center gap-2'>
              <Svgs.Message />
              <h1 className=' text-xs font-normal font-public-sans text-gray-4'>{value2}</h1>
            </div>
          </div>
          <div className="flex items-center ">
            <img src={"/images/groupimg1.png"} width={'32px'} className=" -mr-2" alt="" />
            <img src={"/images/groupimg2.png"} width={'32px'} className="-mr-2" alt="" />
            <img src={"/images/groupimg3.png"} width={'32px'} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default TaskDataCard