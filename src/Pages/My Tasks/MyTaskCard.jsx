import React from 'react'
import HeadingCard from './HeadingCard'
import TaskDataCard from './TaskDataCard'
import GroceryDialog from './GroceryDialog';
import { useState } from 'react';
import Svgs from '../../assets/svgs/Index.js'
function MyTaskCard() {

    const [popupCardIndex, setPopupCardIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


    const handleShowPopup = (index) => {
        setPopupCardIndex(index);
        setShowPopup(true);
    };

    const handleClosePopup = (index) => {
        setPopupCardIndex(null);
        setShowPopup(false);
    };

  return (
    <>
    <div className=''>
    <div className='flex items-center flex-wrap xl:flex-nowrap gap-4 w-[100vw] xl:w-[75vw] overflow-x-scroll '>
       {Array(10).fill().map((_,index)=>{
           return(
               <>
        <div className='my-5 '>
        <HeadingCard title={'TODAY'} value={'2'}/>
       <div className=' h-[70vh] md:h-[40vh] 2xl:h-[50vh] overflow-y-auto overflow-x-hidden my-5'>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       < TaskDataCard handleClick={()=>{handleShowPopup(index)}} title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       {popupCardIndex === index && showPopup && <GroceryDialog show={showPopup} onClose={handleClosePopup} />}
        </div>
        <div className=' sticky bottom-6 flex items-center justify-center'><button className='flex items-center justify-center gap-[14px] px-[16px] py-[12px] w-[258px] border-[1px] border-[#fb6d72] border-dashed rounded-xl text-sm font-semibold font-public-sans bg-btn-gradient text-transparent bg-clip-text'><Svgs.AddIconRed/>Add New Task</button></div>        
        </div>
            </>
        )
       })}
    </div>
    </div>
    </>
  )
}

export default MyTaskCard
