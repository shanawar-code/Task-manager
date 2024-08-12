import React, { act, useState } from 'react'
import { AttendanceSvg, Chat, Dashboard, Logout, MyTasks, Setting, Team } from '../assets/svgs/Index'
import { useNavigate } from 'react-router-dom'
import Svgs from '../assets/svgs/Index.js'
import { useLocation } from "react-router-dom";


export const SideBar = ({active}) => {
    const location = useLocation();


console.log(active)
    const navigate = useNavigate() ;

    const sideBarData =[
        {
            name: 'Dashboard',
            icon: <Svgs.Dashboard/>,
            navigate: '/dashboard',
            active: active === 'Dashboard'? true: false,
        },
        {
            name: 'My Tasks',
            icon: <Svgs.MyTasks/>,
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

    const handleSideBarClick=(value)=>{
        
    }
   
    return (
        <div className='flex flex-col relative left-0  bg-white py-8 border-r-2 w-full h-full items-center justify-between'>
            <div className='w-full flex flex-col'>
                {sideBarData.map((value, index)=>(
                    <div key={index}
                    onClick={()=>{handleSideBarClick(value.name)}}
                        className={`${ value.active === true ? ' bg-btn-gradient ':'bg-white'} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
                         {<p>{value.icon}</p>}   {/* < color={value?.active===true? '#fff': '#828282'} /> */}
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




// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { AttendanceSvg, Chat, Dashboard, Logout, MyTasks, Setting, Team } from '../assets/svgs/Index';
// import Svgs from '../assets/svgs/Index.js';

// export const SideBar = () => {
//     const navigate = useNavigate();
//     const location = useLocation(); // Get the current location

//     const sideBarData = [
//         {
//             name: 'Dashboard',
//             icon: <Svgs.Dashboard color={location.pathname === '/dashboard' ? '#fff' : '#828282'}/>,
//             navigate: '/dashboard',
//             active: location.pathname === '/dashboard',
//         },
//         {
//             name: 'My Tasks',
//             icon: <Svgs.MyTasks color={location.pathname === '/my-tasks' ? '#fff' : '#828282'}/>,
//             navigate: '/my-tasks',
//             active: location.pathname === '/my-tasks',
//         },
//         {
//             name: 'My Team',
//             icon: <Svgs.Team color={location.pathname === '/my-team' ? '#fff' : '#828282'}/>,
//             navigate: '/my-team',
//             active: location.pathname === '/my-team',
//         },
//         {
//             name: 'Chat',
//             icon: <Svgs.Chat color={location.pathname === '/chat' ? '#fff' : '#828282'}/>,
//             navigate: '/chat',
//             active: location.pathname === '/chat',
//         },
//         {
//             name: 'Attendance & Leave',
//             icon: <Svgs.AttendanceSvg color={location.pathname === '/attendance-leave' ? '#fff' : '#828282'}/>,
//             navigate: '/attendance-leave',
//             active: location.pathname === '/attendance-leave',
//         },
//         {
//             name: 'My profile',
//             icon: <Svgs.Setting color={location.pathname === '/my-profile' ? '#fff' : '#828282'}/>,
//             navigate: '/my-profile',
//             active: location.pathname === '/my-profile',
//         },
//     ];

//     const handleSideBarClick = (navigatePath) => {
//         navigate(navigatePath);
//     };

//     return (
//         <div className='flex flex-col relative left-0 bg-white py-8 border-r-2 w-full h-full items-center justify-between'>
//             <div className='w-full flex flex-col'>
//                 {sideBarData.map((value, index) => (
//                     <div
//                         key={index}
//                         onClick={() => handleSideBarClick(value.navigate)}
//                         className={`${value.active ? 'bg-btn-gradient' : 'bg-white'} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}
//                     >
//                         {value.icon}
//                         <p className={`${value.active ? 'text-white text-base font-normal font-public-sans' : 'text-gray-4 text-base font-normal font-public-sans'}`}>
//                             {value.name}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//             <div
//                 onClick={() => { navigate('/'); }}
//                 className='bg-white p-4 cursor-pointer rounded-lg flex flex-row space-x-4 text-[#828282] w-full'
//             >
//                 <Svgs.Logout />
//                 <p>Logout</p>
//             </div>
//         </div>
//     );
// };
