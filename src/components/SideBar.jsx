import React, { act, useState } from 'react'
import { Applicantssvg, AttendanceSvg, Chat, Dashboard, Logout, MyTasks, Payrollsvg, Setting, Team } from '../assets/svgs/index.js'
import { useNavigate } from 'react-router-dom'
import Svgs from '../assets/svgs/index.js'
import { useLocation } from "react-router-dom";
import { useSidebarContext } from '../Context/ContextLayout.jsx';
import { Input } from './Input.jsx';
import { useUserContext } from '../Context/UserProvider';
import { useEffect } from 'react';

export const SideBar = ({ active }) => {

    const { sidebarOpen } = useSidebarContext()
    const { user } = useUserContext()


    const location = useLocation();

    console.log('*********** i am here working', sidebarOpen)
    const navigate = useNavigate();

    const userSideBarData = [
        {
            name: 'Dashboard',
            icon: <Svgs.Dashboard color={active === 'Dashboard' ? '#fff' : '#828282'} />,
            navigate: '/user/dashboard',
            active: active === 'Dashboard' ? true : false,
        },
        {
            name: 'My Tasks',
            icon: <Svgs.MyTasks color={active === 'My Tasks' ? '#fff' : '#828282'} />,
            navigate: '/user/tasks',
            active: active === 'My Tasks' ? true : false,
        },
        {
            name: 'My Team',
            icon: <Svgs.Team color={active === 'My Team' ? '#fff' : '#828282'} />,
            navigate: '/user/my-team',
            active: active === 'My Team' ? true : false,
        },
        {
            name: 'Chat',
            icon: <Svgs.Chat color={active === 'Chat' ? '#fff' : '#828282'} />,
            navigate: '/user/chat',
            active: active === 'Chat' ? true : false,
        },
        {
            name: 'Attendance & Leave',
            icon: <Svgs.AttendanceSvg color={active === 'Attendance & Leave' ? '#fff' : '#828282'} />,
            navigate: '/user/attendance-leave',
            active: active === 'Attendance & Leave' ? true : false,
        },
        {
            name: 'My profile',
            icon: <Svgs.Setting color={active === 'My profile' ? '#fff' : '#828282'} />,
            navigate: '/user/my-profile',
            active: active === 'My profile' ? true : false,
        },
    ]
    // const hrSideBarData = [
    //     {
    //         name: 'Dashboard',
    //         icon: <Svgs.Dashboard color={active === 'Dashboard' ? '#fff' : '#828282'} />,
    //         navigate: '/hr/dashboard',
    //         active: active === 'Dashboard' ? true : false,
    //     },
    //     {
    //         name: 'Employees',
    //         icon: <Svgs.Team color={active === 'Employees' ? '#fff' : '#828282'} />,
    //         navigate: '/employees',
    //         active: active === 'Employees' ? true : false,
    //     },
    //     {
    //         name: 'Applicants',
    //         icon: <Applicantssvg color={active === 'Applicants' ? '#fff' : '#828282'} />,
    //         navigate: '/applicants',
    //         active: active === 'Applicants' ? true : false,
    //     },
    //     {
    //         name: 'Payroll',
    //         icon: <Payrollsvg color={active === 'Payroll' ? '#fff' : '#828282'} />,
    //         navigate: '/payroll',
    //         active: active === 'Payroll' ? true : false,
    //     },
    //     {
    //         name: 'Documents',
    //         icon: <Svgs.Document color={active === 'Documents' ? '#fff' : '#828282'} />,
    //         navigate: '/documents',
    //         active: active === 'Documents' ? true : false,
    //     },
    //     {
    //         name: 'My profile',
    //         icon: <Svgs.Setting color={active === 'My profile' ? '#fff' : '#828282'} />,
    //         navigate: '/myprofile',
    //         active: active === 'My profile' ? true : false,
    //     },
    // ]
    const hrSideBarData = [
        {
            name: 'Dashboard',
            icon: <Svgs.Dashboard color={active === 'Dashboard' ? '#fff' : '#828282'} />,
            navigate: '/hr/dashboard',
            active: active === 'Dashboard' ? true : false,
        },
        {
            name: 'Employees',
            icon: <Svgs.Team color={active === 'Employees' ? '#fff' : '#828282'} />,
            navigate: '/hr/employees',
            active: active === 'Employees' ? true : false,
        },
        {
            name: 'Applicants',
            icon: <Svgs.Applicantssvg color={active === 'Applicants' ? '#fff' : '#828282'} />,
            navigate: '/hr/applicants',
            active: active === 'Applicants' ? true : false,
        },
        {
            name: 'Attendance & Leave',
            icon: <Svgs.AttendanceSvg color={active === 'Attendance & Leave' ? '#fff' : '#828282'} />,
            navigate: '/hr/attandence',
            active: active === 'Attendance & Leave' ? true : false,
        },
        {
            name: 'Payroll',
            icon: <Svgs.Payrollsvg color={active === 'Payroll' ? '#fff' : '#828282'} />,
            navigate: '/hr/payroll',
            active: active === 'Payroll' ? true : false,
        },
        {
            name: 'Chat',
            icon: <Svgs.Chat color={active === 'Chat' ? '#fff' : '#828282'} />,
            navigate: '/hr/chat',
            active: active === 'Chat' ? true : false,
        },
        {
            name: 'Documents',
            icon: <Svgs.Document color={active === 'Documents' ? '#fff' : '#828282'} />,
            navigate: '/hr/documents',
            active: active === 'Documents' ? true : false,
        },
        {
            name: 'My profile',
            icon: <Svgs.Setting color={active === 'My profile' ? '#fff' : '#828282'} />,
            navigate: '/hr/myprofile',
            active: active === 'My profile' ? true : false,
        }

    ]

    const handleSideBarClick = (path) => {
        navigate(path)
        console.log(path)
    }

    const [showName, setShowName] = useState(true);

    // useEffect(() => {
    //     let timer;
    //     if (sidebarOpen) {
    //         timer = setTimeout(() => {
    //             setShowName(true);
    //         }, 200);
    //     } else {
    //         setShowName(false); // Reset state when sidebar is closed
    //     }
    //     return () => clearTimeout(timer); // Clean up timer on component unmount or when sidebarOpen changes
    // }, [sidebarOpen]);

    return (
        <div className='flex flex-col relative left-0  bg-white py-8 px-3 border-r-2 w-full h-full items-center justify-between'>

            <div className='w-full flex flex-col'>
                {
                    (user.role === "HR" ? hrSideBarData : userSideBarData)
                        .map((value, index) => (
                            <div
                                key={index}
                                onClick={() => { handleSideBarClick(value.navigate) }}
                                className={`${value.active === true ? ' bg-btn-gradient ' : 'bg-white'} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
                                <p>
                                    {value.icon}
                                </p>
                                <p
                                    className={`${value?.active === true ? 'text-white text-base font-normal font-public-sans ' : 'text-gray-4 text-base font-normal font-public-sans'}`} >
                                    {sidebarOpen && showName ? value.name : ''}
                                </p>


                            </div>

                        )
                        )}
            </div>

            <div
                onClick={() => { navigate('/') }}
                className={`bg-white  cursor-pointer rounded-lg flex items-center ${sidebarOpen ? 'justify-start px-4 gap-4' : ' justify-center'} flex-row text-[#828282] w-full`}>
                <Svgs.Logout />
                {sidebarOpen && showName && <p>Logout</p>}
            </div>


        </div>
    )
}