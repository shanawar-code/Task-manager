import React, { useState } from 'react'
import { AttendanceSvg, Chat, Dashboard, Logout, MyTasks, Setting, Team } from '../assets/svgs/Index'
import { useNavigate } from 'react-router-dom'
import Svgs from '../assets/svgs/Index.js'
import { useLocation } from "react-router-dom";


export const SideBar = ({active}) => {

    const navigate = useNavigate() ;

    const sideBarData =[
        {
            name: 'Dashboard',
            icon: <Svgs.Dashboard/>,
            navigate: '/dashboard',
            active: active=== 'Dashboard'? true: false,
        },
        {
            name: 'My Tasks',
            icon: <Svgs.Tasks/>,
            navigate: '/dashboard',
            active: active=== 'My Tasks'? true: false,
        },
        {
            name: 'My Team',
            icon: <Svgs.Team/>,
            navigate: '/dashboard',
            active: active=== 'My Team'? true: false,
        },
        {
            name: 'Chat',
            icon: <Svgs.Chat/>,
            navigate: '/dashboard',
            active: active=== 'Chat'? true: false,
        },
        {
            name: 'Attendance & Leave',
            icon: <Svgs.AttendanceSvg/>,
            navigate: '/dashboard',
            active: active=== 'Attendance & Leave'? true: false,
        },
        {
            name: 'My profile',
            icon: <Svgs.Setting/>,
            navigate: '/dashboard',
            active: active=== 'My profile'? true: false,
        },
    ]


   
    return (
        <div className='flex flex-col relative left-0 px-4 bg-white py-8 border-r-2 w-full h-full items-center justify-between'>
            <div className='w-full flex flex-col'>
                {sideBarData.map((value, index)=>(

                    <div key={index}
                        className={`${ value?.active === true ? ' bg-btn-gradient ':'bg-white'} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
                            <Svgs.Dashboard color={value?.active===true? '#fff': '#828282'} />
                        <p className={`${value?.active===true ? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
                            {value.name}
                        </p>
                    </div>  
                        
                )       
                      
                )}
            </div>

            <div
            onClick={()=>{navigate('/')}}
                className='bg-white p-4 cursor-pointer rounded-lg flex flex-row space-x-4 text-[#828282] w-full'>
                    <Svgs.Logout/>
                <p>
                    Logout
                </p>
            </div>


        </div>
    )
}
