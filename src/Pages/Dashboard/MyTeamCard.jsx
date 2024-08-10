import React from 'react'
import Button from '../../components/Button'

function MyTeamCard({fullname, role, numberoftasks, attendance}) {
  return (
    <>
     <div className=''>
        <div className=' border rounded-xl p-4 bg-white'>
            <div className='flex flex-wrap items-center justify-between'>
            <h1 className=' text-base font-semibold font-public-sans text-gray-1'>My Team</h1>
            <Button text={'Collaborate'} className={' w-[130px] px-[16px] py-[8px] font-public-sans text-sm font-semibold rounded-lg'}/>
            </div>
            {Array(4).fill().map(()=>{
                return(
                    <>
                     <div className=' flex items-center flex-wrap lg:flex-nowrap justify-between border-b-2 my-3 pb-3 mt-7'>
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
    </>
  )
}

export default MyTeamCard