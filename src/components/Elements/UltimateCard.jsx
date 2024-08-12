import React from 'react'

function UltimateCard({fullname, role, numberoftasks, attendance ,btnText, heading, buttonBtn}) {

    
  return (
    <>
     <div className=''>
        <div className=' border rounded-xl p-4 bg-white'>
            <div className='flex overflow-x-auto items-center justify-between'>
            <h1 className=' text-base font-semibold font-public-sans text-gray-1'>{heading}</h1>
            {buttonBtn}
            </div>
            <div className='overflow-x-auto'>
            {Array(4).fill().map(()=>{
                return(
                    <>
                     <div className=' min-w-[450px] flex items-center justify-between border-b-2 my-3 pb-3 mt-7'>
                <div className='flex items-center gap-3'>
                    <img src='/images/Img.png' alt="" />
                    <h1 className=' text-sm font-public-sans font-medium text-gray-1'>{fullname}</h1>
                </div>
                <div>
                    <h1 className=' text-sm font-public-sans font-medium text-gray-1'>{role}</h1>
                </div>
                <div>
                    <h1 className=' text-sm font-public-sans font-medium text-gray-1'>{numberoftasks}</h1>
                </div>
                <div>
                    <h1 className=' text-sm font-public-sans font-medium text-[#04AA77]'>{attendance}</h1>
                </div>
            </div> 
                    </>
                )
            })}
            </div>
        </div>
    </div>
    </>
  )
}

export default UltimateCard