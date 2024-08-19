import React, { useState } from 'react';
import Svgs from '../assets/svgs/Index.js'
import { useNavigate } from 'react-router-dom';




export const DropdownSidebar = ({active}) => {

const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState(active);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
}




  const handleTabClick = (value) => {
   
    setIsDropdownOpen(false); // close dropdown after selecting a tab
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='relative mx-2'>
      {/* Toggle Button for Dropdown */}
      <button 
        onClick={toggleDropdown} 
        className='bg-white p-4 my-2 rounded-lg flex items-center justify-between w-full border-2 border-[#fc6e73]'
      >
        <span className='text-gray-700 bg-btn-gradient text-transparent bg-clip-text'>{activeTab}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="#fc6e73"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Sidebar Content as Dropdown */}
      {isDropdownOpen && (
        <div className='flex flex-col left-0  bg-white py-3  w-full h-auto items-center justify-between z-10'>
          <div className='w-full flex flex-col'>
                {sideBarData.map((value, index)=>(
                    <div key={index}
                    onClick={()=>{handleSideBarClick(value.navigate)}}
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
      )}
    </div>
  );
};
