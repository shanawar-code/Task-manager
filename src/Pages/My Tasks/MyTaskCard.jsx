import React from 'react'
import HeadingCard from './HeadingCard'
import TaskDataCard from './TaskDataCard'
import GroceryDialog from './GroceryDialog';
import { useState } from 'react';
function MyTaskCard() {

    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };

  return (
    <>
    <div className=' p-5'>
    <div className='flex items-center justify-between flex-wrap'>
        <div className=''>
       <HeadingCard title={'TODAY'} value={'2'}/>
       <TaskDataCard title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       <TaskDataCard title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       <TaskDataCard handleClick={handleShowPopup} title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       {showPopup && <GroceryDialog show={showPopup} onClose={handleClosePopup} />}
        </div>
        <div>
       <HeadingCard title={'DOING'} value={'5'}/>
       <TaskDataCard title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       <TaskDataCard title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       <TaskDataCard title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
        </div>
        <div>
       <HeadingCard title={'REVIEW'} value={'3'}/>
       <TaskDataCard title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
       <TaskDataCard title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       <TaskDataCard title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
        </div>
        <div>
       <HeadingCard title={'DONE'} value={'2'}/>
       <TaskDataCard title={'MOBILE APP'} value1={'2'} value2={'4'} bgcolor={'bg-[#efeeff]'} textcolor={'text-[#5046e4]'} descrip={'Grocery Mobile App'}/>
       <TaskDataCard title={'LANDING PAGE'} value1={'5'} value2={'8'} bgcolor={'bg-[#fff7ea]'} textcolor={'text-[#f4a012]'} descrip={'MR Corporation Website'}/>
       <TaskDataCard title={'DASHBOARD'} value1={'3'} value2={'6'} bgcolor={'bg-[#ffebf5]'} textcolor={'text-[#e94a9b]'} descrip={'Grocery Dashboard'}/>
        </div>
    </div>
    </div>
    </>
  )
}

export default MyTaskCard



{/* <div>
<div className='bg-[#f3f3f3] rounded-xl p-5 flex items-center justify-between'>
    <div className='flex items-center gap-3'>
        <h1 className=' text-base font-semibold font-public-sans text-gray-1'>TODAY</h1>
        <h1 className=' text-xs font-semibold font-public-sans text-gray-4 border rounded-full w-6 h-6 flex items-center justify-center'>8</h1>
    </div>
    <div>
        <img src='images/writingpencil.png' alt="" />
    </div>
</div>
<div className=' border rounded-xl bg-white p-5 my-5' >
    <div className='flex items-center justify-between'>
        <div>
            <h1 className='bg-[#efeeff] w-fit py-2 px-3  rounded-full text-[#5046e4]'>MOBILE APP</h1>
        </div>
        <div className='flex items-center gap-3'>
        <div className='bg-[#f3f3f3] rounded-full w-7 h-7 flex items-center justify-center'>
            <img src='images/shareblueicon.png' alt="" />
        </div>
        <div>
        <img src='images/verticaldots.png' alt="" />
        </div>
        </div>
    </div>
    <div className='my-5'>
        <h1 className=' text-base font-semibold font-public-sans text-gray-1'>Grocery Mobile App</h1>
    </div>
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
            <div className=' flex items-center gap-2'>
                <img src='images/documenticon.png' alt="" />
                <h1 className=' text-xs font-normal font-public-sans text-gray-4'>2</h1>
            </div>
            <div  className=' flex items-center gap-2'>
                <img src='images/chaticon.png' alt="" />
                <h1 className=' text-xs font-normal font-public-sans text-gray-4'>4</h1>
            </div>
        </div>
        <div>
            <img src='images/Member3.png' alt="" />
        </div>
    </div>
</div>
</div> */}