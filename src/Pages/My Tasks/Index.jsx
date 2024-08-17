import React from 'react'
import Button from '../../components/Button'
import { Layout } from '../../components/Layout/DashboardLayout'
import MyTaskCard from './MyTaskCard'
import Svgs from '../../assets/svgs/Index.js'
function Tasks() {
  return (
    <>
    <Layout active={'My Tasks'}>
    <div className=''>
        <div className='flex flex-wrap items-center justify-center sm:justify-between'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className=' text-2xl font-bold font-public-sans text-gray-1'>Team memeber</h1>
                </div>
                <div className='flex items-center'>
                    <img className=' cursor-pointer' src='images/member1.png' alt="" />
                    <img className=' cursor-pointer' src='images/member2.png' width={'32px'} alt="" />
                    <img className=' cursor-pointer' src='images/member3 (2).png' width={'32px'} alt="" />
                    <img className=' cursor-pointer' src='images/member4 (2).png' width={'32px'} alt="" />
                    <span className='w-[32px] h-[32px] cursor-pointer flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.Four/></span>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 my-5'>

            <span className='cursor-pointer w-[32px] h-[32px] flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.AddPeople/></span>
            <span className='cursor-pointer w-[32px] h-[32px] flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.ShareGray/></span>
                
                {/* <button className="flex items-center justify-center w-[149px] h-[40px] gap-3 bg-btn-gradient text-white text-sm font-semibold font-public-sans rounded-lg"><img src={'images/Icon.png'} alt="" />Add new Card</button> */}
                <Button className={'flex items-center justify-center gap-4'} customPadding={'px-[16px] py-[8px]'} text={<><Svgs.AddIconWhite /> Add new card </>}/>
              
            </div>
        </div>
    </div>
    <div className=''>
    <MyTaskCard/>
    </div>
    </Layout>
    </>
  )
}

export default Tasks