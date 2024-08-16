import React from 'react'
import Svgs from '../../assets/svgs/Index.js'
function TaskDataCard({title,value1,value2,descrip,bgcolor, textcolor , handleClick}) {
  return (
   <>
    <div onClick={handleClick} className='cursor-pointer border rounded-xl bg-white p-5 mb-5 md:mx-2 w-[288px]' >
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className={` ${bgcolor} ${textcolor} w-fit py-2 px-3  rounded-full`}>{title}</h1>
                </div>
                <div className='flex items-center gap-3'>
                <div className='bg-[#f3f3f3] rounded-full w-7 h-7 flex items-center justify-center'>
                <Svgs.ShareIcon/>
                </div>
                <div>
                <Svgs.Verticaldots/>
                </div>
                </div>
            </div>
            <div className='my-5'>
                <h1 className=' text-base font-semibold font-public-sans text-gray-1'>{descrip}</h1>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <div className=' flex items-center gap-2'>
                        <Svgs.DocumentIcon/>
                        <h1 className=' text-xs font-normal font-public-sans text-gray-4'>{value1}</h1>
                    </div>
                    <div  className=' flex items-center gap-2'>
                        <Svgs.Message/>
                        <h1 className=' text-xs font-normal font-public-sans text-gray-4'>{value2}</h1>
                    </div>
                </div>
                <div>
                    <img src='images/Member3.png' alt="" />
                </div>
            </div>
    </div>
    
   </>
  )
}

export default TaskDataCard