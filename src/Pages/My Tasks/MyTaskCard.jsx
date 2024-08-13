import React from 'react'
import HeadingCard from './HeadingCard'
import TaskDataCard from './TaskDataCard'
import GroceryDialog from './GroceryDialog';
import { useState } from 'react';
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
    <div className='flex items-center gap-4 w-[75vw] overflow-x-auto '>
       {Array(10).fill().map((_,index)=>{
           return(
               <>
        <div className='my-5 col-span-4'>
        <HeadingCard title={'TODAY'} value={'2'}/>
       <div className='h-[100vh] overflow-y-auto my-5'>
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
