// import React, { useState } from 'react'
// import { AttendanceSvg, Chat, Dashboard, MyTasks, Setting, Team } from '../assets/svgs/Index'

// export const DropdownSidebar = () => {
//   const [activeTab,setActiveTab]= useState('dashboard')

//   const handleTabClick=(value)=>{
//       setActiveTab(value)
//   }
//   return(
//     <div className='flex flex-col relative left-0 px-4 bg-white py-8 border-r-2 w-full  h-[89vh] items-center justify-between'>
//     <div className='w-full flex flex-col'>
//         <div onClick={()=>{handleTabClick('dashboard')}}
//             className={`${activeTab==='dashboard'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
//                 <Dashboard color={activeTab==='dashboard'? '#fff': '#828282'} />
//             <p className={`${activeTab==='dashboard'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
//                 Dashboard
//             </p>
//         </div>


//         <div onClick={()=>{handleTabClick('mytasks')}}
//             className={`${activeTab==='mytasks'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
//                 <MyTasks color={activeTab==='mytasks'? '#fff': '#828282'} />
//             <p className={`${activeTab==='mytasks'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
//                 My Tasks
//             </p>
//         </div>
//         <div onClick={()=>{handleTabClick('team')}}
//             className={`${activeTab==='team'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
//                 <Team color={activeTab==='team'? '#fff': '#828282'} />
//             <p className={`${activeTab==='team'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
//                 Team
//             </p>
//         </div>
//         <div onClick={()=>{handleTabClick('chat')}}
//             className={`${activeTab==='chat'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
//                 <Chat color={activeTab==='chat'? '#fff': '#828282'} />
//             <p className={`${activeTab==='chat'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
//                 Chat
//             </p>
//         </div>
//         <div onClick={()=>{handleTabClick('attendanc')}}
//             className={`${activeTab==='attendanc'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
//                 <AttendanceSvg color={activeTab==='attendanc'? '#fff': '#828282'} />
//             <p className={`${activeTab==='attendanc'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
//             Attendanc
//             </p>
//         </div>
//         <div onClick={()=>{handleTabClick('Setting')}}
//             className={`${activeTab==='Setting'? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72] ':''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
//                 <Setting color={activeTab==='Setting'? '#fff': '#828282'} />
//             <p className={`${activeTab==='Setting'? 'text-white text-base font-normal font-public-sans ': 'text-gray-4 text-base font-normal font-public-sans' }`} >
//             Setting
//             </p>
//         </div>
//     </div>

//     <div
//         className='bg-white p-4 rounded-lg flex flex-row space-x-4 text-[#828282] w-full'>
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M11.7988 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H11.7988" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
//             <path d="M17.4931 7.49304L22 11.9862L17.4931 16.493" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
//             <path d="M22 11.993H8.1485" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
//         </svg>


//         <p>
//             Logout
//         </p>
//     </div>


// </div>
//   )
// }


import React, { useState } from 'react';
import { AttendanceSvg, Chat, Dashboard, MyTasks, Setting, Team } from '../assets/svgs/Index';

export const DropdownSidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (value) => {
    setActiveTab(value);
    setIsDropdownOpen(false); // close dropdown after selecting a tab
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='relative'>
      {/* Toggle Button for Dropdown */}
      <button 
        onClick={toggleDropdown} 
        className='bg-white p-4 rounded-lg flex items-center justify-between w-full'
      >
        <span className='text-gray-700'>Menu</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Sidebar Content as Dropdown */}
      {isDropdownOpen && (
        <div className='flex flex-col absolute left-0 mt-2 px-4 bg-white py-8 border-r-2 w-full h-auto items-center justify-between z-10'>
          <div className='w-full flex flex-col'>
            {/* Dashboard Tab */}
            <div 
              onClick={() => handleTabClick('dashboard')}
              className={`${activeTab === 'dashboard' ? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72]' : ''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}
            >
              <Dashboard color={activeTab === 'dashboard' ? '#fff' : '#828282'} />
              <p className={`${activeTab === 'dashboard' ? 'text-white' : 'text-gray-400'} text-base font-normal font-public-sans`}>
                Dashboard
              </p>
            </div>

            {/* Other tabs (MyTasks, Team, Chat, Attendance, Setting) */}
            {/* ... Add the remaining tabs in a similar fashion ... */}

            <div onClick={() => handleTabClick('mytasks')}
              className={`${activeTab === 'mytasks' ? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72]' : ''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
              <MyTasks color={activeTab === 'mytasks' ? '#fff' : '#828282'} />
              <p className={`${activeTab === 'mytasks' ? 'text-white text-base font-normal font-public-sans ' : 'text-gray-400 text-base font-normal font-public-sans'}`} >
                My Tasks
              </p>
            </div>

            <div onClick={() => handleTabClick('team')}
              className={`${activeTab === 'team' ? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72]' : ''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
              <Team color={activeTab === 'team' ? '#fff' : '#828282'} />
              <p className={`${activeTab === 'team' ? 'text-white text-base font-normal font-public-sans ' : 'text-gray-400 text-base font-normal font-public-sans'}`} >
                Team
              </p>
            </div>

            <div onClick={() => handleTabClick('chat')}
              className={`${activeTab === 'chat' ? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72]' : ''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
              <Chat color={activeTab === 'chat' ? '#fff' : '#828282'} />
              <p className={`${activeTab === 'chat' ? 'text-white text-base font-normal font-public-sans ' : 'text-gray-400 text-base font-normal font-public-sans'}`} >
                Chat
              </p>
            </div>

            <div onClick={() => handleTabClick('attendanc')}
              className={`${activeTab === 'attendanc' ? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72]' : ''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
              <AttendanceSvg color={activeTab === 'attendanc' ? '#fff' : '#828282'} />
              <p className={`${activeTab === 'attendanc' ? 'text-white text-base font-normal font-public-sans ' : 'text-gray-400 text-base font-normal font-public-sans'}`} >
                Attendance
              </p>
            </div>

            <div onClick={() => handleTabClick('Setting')}
              className={`${activeTab === 'Setting' ? 'bg-gradient-to-r from-[#F33F41] to-[#FB6D72]' : ''} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
              <Setting color={activeTab === 'Setting' ? '#fff' : '#828282'} />
              <p className={`${activeTab === 'Setting' ? 'text-white text-base font-normal font-public-sans ' : 'text-gray-400 text-base font-normal font-public-sans'}`} >
                Setting
              </p>
            </div>
          </div>

          <div
            className='bg-white p-4 rounded-lg flex flex-row space-x-4 text-[#828282] w-full cursor-pointer'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7988 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H11.7988" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.4931 7.49304L22 11.9862L17.4931 16.493" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 11.993H8.1485" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <p>Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};
