import React from 'react'
import Button from '../../components/Button'

function MeetingCard({meeting, time, buttonTitle, title, src, onClick}) {
  return (
   <>
     <div className=''>
        <div className=' border rounded-xl p-4 bg-white'>
            <div className='flex flex-wrap items-center justify-between'>
            <h1 className=' text-base font-semibold font-epilogue text-gray-1'>{title}</h1>
            <Button handleClick={onClick} text={buttonTitle} className={' w-[160px] font-public-sans text-sm font-semibold rounded-lg'} customPadding={'px-[16px], py-[8px]'}/>
            </div>
            {Array(3).fill().map(()=>{
                return(
                    <>
                     <div className=' flex items-center flex-wrap lg:flex-nowrap justify-between border-b-2 my-3 pb-3 mt-7'>
                <div className='flex items-center gap-3'>
                    <img src='/images/Img.png' alt="" />
                    <h1 className=' text-sm font-epilogue font-semibold text-gray-1'>{meeting}</h1>
                </div>
                <div>
                    <h1 className=' text-sm font-epilogue font-semibold text-gray-1'>{time}</h1>
                </div>
               
                <div className='flex items-center gap-5'>
                    <img src={'images/Member (1).png'} alt="" />
                    <img src={src} alt="" />
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

export default MeetingCard