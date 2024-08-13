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
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className=' text-2xl font-bold font-public-sans text-gray-1'>Team memeber</h1>
                </div>
                <div className='flex items-center'>
                    <img src='images/member1.png' alt="" />
                    <img src='images/member2.png' width={'32px'} alt="" />
                    <img src='images/member3 (2).png' width={'32px'} alt="" />
                    <img src='images/member4 (2).png' width={'32px'} alt="" />
                    <span className='w-[32px] h-[32px] flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.Four/></span>
                </div>
            </div>
            <div className='flex items-center gap-5'>

            <span className='w-[32px] h-[32px] flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.AddPeople/></span>
            <span className='w-[32px] h-[32px] flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.ShareGray/></span>
                
                <button className="flex items-center justify-center w-[149px] h-[40px] gap-3 bg-btn-gradient text-white text-sm font-semibold font-public-sans rounded-lg"><img src={'images/Icon.png'} alt="" />Add new Card</button>
              
            </div>
        </div>
    </div>
    <div className=' overflow-x-auto'>
    <MyTaskCard/>
    </div>
    </Layout>
    </>
  )
}

export default Tasks