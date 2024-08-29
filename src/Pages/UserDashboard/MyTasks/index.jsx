import React from 'react'
import Button from '../../../components/Button'
import { Layout } from '../../../components/Layout/DashboardLayout'
import MyTaskCard from './MyTaskCard'
import Svgs from '../../../assets/svgs/index.js'
import { useState } from 'react'
import CreateTaskDialog from './Element/CreateTaskDialog'
import { useSidebarContext } from '../../../Context/ContextLayout.jsx'
import { useNavigate } from 'react-router-dom'


function Tasks() {

    const { sidebarOpen } = useSidebarContext()
    const navigate = useNavigate()



    return (
        <>
            <Layout active={'My Tasks'}>
                <div className=' my-5 md:my-0'>
                    <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <h1 className=' text-2xl font-bold font-public-sans text-gray-1'>Team Members</h1>
                            </div>
                            <div onClick={() => { navigate('/user/my-teammembers') }} className='flex items-center justify-center md:justify-start'>
                                <img className=' cursor-pointer' src='/images/member1.png' alt="" />
                                <img className=' cursor-pointer' src='/images/member2.png' width={'32px'} alt="" />
                                <img className=' cursor-pointer' src='/images/member3 (2).png' width={'32px'} alt="" />
                                <img className=' cursor-pointer' src='/images/member4 (2).png' width={'32px'} alt="" />
                                <span className='w-[32px] h-[32px] cursor-pointer flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.Four /></span>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 my-5'>
                            <div className='flex items-center gap-4'>
                                <span className='cursor-pointer w-[32px] h-[32px] flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.AddPeople /></span>
                                <span className='cursor-pointer w-[32px] h-[32px] flex items-center justify-center bg-[#f3f3f3] rounded-full'><Svgs.ShareGray /></span>
                            </div>
                            <div>
                                <Button className={'flex items-center justify-center gap-2 w-[149px] h-[40px]'} customPadding={'px-[16px] py-[8px]'} text={<><Svgs.AddIconWhite /> Add new card </>} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`${sidebarOpen ? ' w-full sm:md:w-[75vw] ease-in-out duration-300' : ' w-full sm:w-[89vw] ease-in-out duration-300'} `}>
                    <MyTaskCard />
                </div>
            </Layout>
        </>
    )
}

export default Tasks