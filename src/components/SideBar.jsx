import React, { useState } from 'react'
import { AttendanceSvg, Chat, Dashboard, Logout, MyTasks, Setting, Team } from '../assets/svgs/Index'
import { useNavigate } from 'react-router-dom'

export const SideBar = () => {
    const data = [{
        label: "Dashboard",
        icon: ""
    }]

    const [activeTab,setActiveTab]= useState('dashboard')

    const handleTabClick=(value)=>{
        setActiveTab(value)
    }
    const navigate = useNavigate()
    return (
        <div className='flex flex-col relative left-0 px-4 bg-white py-8 border-r-2 w-full  h-[89vh] items-center justify-between'>
            <div className='w-full flex flex-col'>
                <div onClick={()=>{handleTabClick('dashboard')}}
                    className={`${activeTab==='dashboard'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
                        <Dashboard color={activeTab==='dashboard'? '#fff': '#828282'} />
                    <p className={`${activeTab==='dashboard'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
                        Dashboard
                    </p>
                </div>


                <div onClick={()=>{handleTabClick('mytasks')}}
                    className={`${activeTab==='mytasks'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
                        <MyTasks color={activeTab==='mytasks'? '#fff': '#828282'} />
                    <p className={`${activeTab==='mytasks'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
                        My Tasks
                    </p>
                </div>
                <div onClick={()=>{handleTabClick('team')}}
                    className={`${activeTab==='team'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
                        <Team color={activeTab==='team'? '#fff': '#828282'} />
                    <p className={`${activeTab==='team'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
                        Team
                    </p>
                </div>
                <div onClick={()=>{handleTabClick('chat')}}
                    className={`${activeTab==='chat'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
                        <Chat color={activeTab==='chat'? '#fff': '#828282'} />
                    <p className={`${activeTab==='chat'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
                        Chat
                    </p>
                </div>
                <div onClick={()=>{handleTabClick('attendanc')}}
                    className={`${activeTab==='attendanc'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
                        <AttendanceSvg color={activeTab==='attendanc'? '#fff': '#828282'} />
                    <p className={`${activeTab==='attendanc'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
                    Attendanc
                    </p>
                </div>
                <div onClick={()=>{handleTabClick('Setting')}}
                    className={`${activeTab==='Setting'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
                        <Setting color={activeTab==='Setting'? '#fff': '#828282'} />
                    <p className={`${activeTab==='Setting'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
                    Setting
                    </p>
                </div>
            </div>

            <div
            onClick={()=>{navigate('/')}}
                className='bg-white p-4 cursor-pointer rounded-lg flex flex-row space-x-4 text-[#828282] w-full'>
                    <Logout/>
                <p>
                    Logout
                </p>
            </div>


        </div>
    )
}
