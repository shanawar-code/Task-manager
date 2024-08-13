import React from 'react'

function HeadingCard({title, value}) {
  return (
    <>
      <div className='bg-[#f3f3f3] rounded-xl p-5 flex items-center justify-between w-full '>
            <div className='flex items-center gap-3'>
                <h1 className=' text-base font-semibold font-public-sans text-gray-1'>{title}</h1>
                <h1 className=' text-xs font-semibold font-public-sans text-gray-4 border rounded-full w-6 h-6 flex items-center justify-center'>{value}</h1>
            </div>
            <div>
                <img src='images/writingpencil.png' alt="" />
            </div>
        </div>
    </>
  )
}

export default HeadingCard