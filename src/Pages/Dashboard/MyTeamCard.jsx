import React from 'react'
import Button from '../../components/Button'
import img from '../../images/Img.png'

function MyTeamCard() {
  return (
    <>
     <div className=' grid grid-cols-12 my-5'>
        <div className=' border rounded-xl col-span-12 lg:col-span-6 p-4 bg-white'>
            <div className='flex items-center justify-between'>
            <h1 className=' text-base font-semibold font-public-sans text-gray-1'>My Team</h1>
            <Button text={'Collaborate'} className={' px-[16px] py-[8px] font-public-sans text-sm font-semibold rounded-lg'}/>
            </div>
            {Array(4).fill().map(()=>{
                return(
                    <>
                     <div className=' flex items-center flex-wrap lg:flex-nowrap justify-between border-b-2 my-3 pb-3 mt-7'>
                <div className='flex items-center gap-3'>
                    <img src={img} alt="" />
                    <h1 className=' text-sm font-public-sans font-medium text-gray-1'>Rudolph</h1>
                </div>
                <div>
                    <h1 className=' text-sm font-public-sans font-medium text-gray-1'>Python developer</h1>
                </div>
                <div>
                    <h1 className=' text-sm font-public-sans font-medium text-gray-1'>14 Tasks</h1>
                </div>
                <div>
                    <h1 className=' text-sm font-public-sans font-medium text-[#04AA77]'>98%</h1>
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