import React, { act, useState } from 'react'
import { AttendanceSvg, Chat, Dashboard, Logout, MyTasks, Setting, Team } from '../assets/svgs/Index'
import { useNavigate } from 'react-router-dom'
import Svgs from '../assets/svgs/Index.js'
import { useLocation } from "react-router-dom";
import { useSidebarContext } from '../Context/ContextLayout.jsx';

export const SideBar = ({active}) => {

    const {sidebarOpen} = useSidebarContext(true)



    const location = useLocation();

    console.log('*********** i am here working', sidebarOpen)
// console.log(active)
    const navigate = useNavigate() ;

    const sideBarData =[
        {
            name: 'Dashboard',
            icon: <Svgs.Dashboard color={active === 'Dashboard' ? '#fff' : '#828282'}/>,
            navigate: '/dashboard',
            active: active === 'Dashboard'? true: false,
        },
        {
            name: 'My Tasks',
            icon: <Svgs.MyTasks color={active === 'My Tasks' ? '#fff' : '#828282'}/>,
            navigate: '/my-tasks',
            active: active=== 'My Tasks'? true: false,
        },
        {
            name: 'My Team',
            icon: <Svgs.Team color={active === 'My Team' ? '#fff' : '#828282'}/>,
            navigate: '/my-team',
            active: active=== 'My Team'? true: false,
        },
        {
            name: 'Chat',
            icon: <Svgs.Chat color={active === 'Chat' ? '#fff' : '#828282'}/>,
            navigate: '/chat',
            active: active=== 'Chat'? true: false,
        },
        {
            name: 'Attendance & Leave',
            icon: <Svgs.AttendanceSvg color={active === 'Attendance & Leave' ? '#fff' : '#828282'}/>,
            navigate: '/attendance-leave',
            active: active=== 'Attendance & Leave'? true: false,
        },
        {
            name: 'My profile',
            icon: <Svgs.Setting color={active === 'My profile' ? '#fff' : '#828282'}/>,
            navigate: '/my-profile',
            active: active=== 'My profile'? true: false,
        },
    ]

    const handleSideBarClick=(path)=>{
        navigate(path)
        console.log(path)
    }
   
    return (
        <div className='flex flex-col relative left-0  bg-white py-8 px-3 border-r-2 w-full h-full items-center justify-between'>
            {(
            <div className='w-full flex flex-col'>
                {sideBarData.map((value, index)=>(
                    <div key={index}
                    onClick={()=>{handleSideBarClick(value.navigate)}}
                        className={`${ value.active === true ? ' bg-btn-gradient ':'bg-white'} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
                         {<p>{value.icon}</p>}
                        <p className={`${value?.active===true ? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
                            {sidebarOpen ? value.name : ''}
                        </p>

                       
                    </div>  
                        
                )                  
                )}
            </div>
            )}

            <div
            onClick={()=>{navigate('/')}}
                className={`bg-white  cursor-pointer rounded-lg flex items-center ${sidebarOpen ? 'justify-start px-4 gap-4' : ' justify-center'} flex-row text-[#828282] w-full`}>
                   <Svgs.Logout />
                   {sidebarOpen && <p>Logout</p>}
            </div>


        </div>
    )
}