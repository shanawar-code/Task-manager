import React from 'react'
import { Tasks } from '../../assets/svgs/Index'

function Cards() {
  return (
    <>
     <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {Array(4).fill().map(()=>{
            return(
                <>
                 <div className=' border rounded-xl p-3 flex flex-col gap-3 bg-white'>
            <div>
                <h1 className=' text-xs text-gray-4 font-poppins font-semibold'>My tasks</h1>
            </div>
            <div className='flex items-center justify-between'>
                <h1 className=' text-2xl font-semibold font-public-sans text-[#161617]'>5</h1>
                <Tasks/>
            </div>
            <div>
                <h1 className=' text-xs text-gray-4 font-poppins font-semibold'>4 new Tasks</h1>
            </div>
        </div>
                </>
            )
        })} 
    </div>
    </>
  )
}

export default Cards