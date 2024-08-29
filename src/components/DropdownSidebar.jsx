// import React, { useState } from 'react';
// import Svgs, { Applicantssvg, Employeessvg, Payrollsvg } from '../assets/svgs/index.js'
// import { useNavigate } from 'react-router-dom';
// import { useUserContext } from '../Context/UserProvider.jsx';




// export const DropdownSidebar = ({ active }) => {

//   const navigate = useNavigate()
//   const {user} = useUserContext()
//   const [activeTab, setActiveTab] = useState(active);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const userSideBarData = [
//     {
//       name: 'Dashboard',
//       icon: <Svgs.Dashboard color={active === 'Dashboard' ? '#fff' : '#828282'} />,
//       navigate: '/user/dashboard',
//       active: active === 'Dashboard' ? true : false,
//     },
//     {
//       name: 'My Tasks',
//       icon: <Svgs.MyTasks color={active === 'My Tasks' ? '#fff' : '#828282'} />,
//       navigate: '/user/tasks',
//       active: active === 'My Tasks' ? true : false,
//     },
//     {
//       name: 'My Team',
//       icon: <Svgs.Team color={active === 'My Team' ? '#fff' : '#828282'} />,
//       navigate: '/user/my-team',
//       active: active === 'My Team' ? true : false,
//     },
//     {
//       name: 'Chat',
//       icon: <Svgs.Chat color={active === 'Chat' ? '#fff' : '#828282'} />,
//       navigate: '/user/chat',
//       active: active === 'Chat' ? true : false,
//     },
//     {
//       name: 'Attendance & Leave',
//       icon: <Svgs.AttendanceSvg color={active === 'Attendance & Leave' ? '#fff' : '#828282'} />,
//       navigate: '/user/attendance-leave',
//       active: active === 'Attendance & Leave' ? true : false,
//     },
//     {
//       name: 'My profile',
//       icon: <Svgs.Setting color={active === 'My profile' ? '#fff' : '#828282'} />,
//       navigate: '/user/my-profile',
//       active: active === 'My profile' ? true : false,
//     },
//   ]


//   const HRSideBarData = [
//     {
//       name: 'Dashboard',
//       icon: <Svgs.Dashboard color={active === 'Dashboard' ? '#fff' : '#828282'} />,
//       navigate: '/hr/dashboard',
//       active: active === 'Dashboard' ? true : false,
//     },

//     {
//       name: 'Employees',
//       icon: <Svgs.Team color={active === 'Employees' ? '#fff' : '#828282'} />,
//       navigate: '/hr/employees',
//       active: active === 'Employees' ? true : false,
//     },
//     {
//       name: 'Applicants',
//       icon: <Svgs.Applicantssvg color={active === 'Applicants' ? '#fff' : '#828282'} />,
//       navigate: '/hr/applicants',
//       active: active === 'Applicants' ? true : false,
//     },
//     {
//       name: 'Attendance & Leave',
//       icon: <Svgs.AttendanceSvg color={active === 'Attendance & Leave' ? '#fff' : '#828282'} />,
//       navigate: '/hr/attandence',
//       active: active === 'Attendance & Leave' ? true : false,
//     },
//     {
//       name: 'Payroll',
//       icon: <Svgs.Payrollsvg color={active === 'Payroll' ? '#fff' : '#828282'} />,
//       navigate: '/hr/payroll',
//       active: active === 'Payroll' ? true : false,
//     },
//     {
//       name: 'Chat',
//       icon: <Svgs.Chat color={active === 'Chat' ? '#fff' : '#828282'} />,
//       navigate: '/hr/chat',
//       active: active === 'Chat' ? true : false,
//     },
//     {
//       name: 'Documents',
//       icon: <Svgs.Document color={active === 'Documents' ? '#fff' : '#828282'} />,
//       navigate: '/hr/documents',
//       active: active === 'Documents' ? true : false,
//     },
//     {
//       name: 'My profile',
//       icon: <Svgs.Setting color={active === 'My profile' ? '#fff' : '#828282'} />,
//       navigate: '/hr/myprofile',
//       active: active === 'My profile' ? true : false,
//     },
//   ]

//   const handleSideBarClick = (path) => {
//     navigate(path)
//   }




//   const handleTabClick = (value) => {

//     setIsDropdownOpen(false); // close dropdown after selecting a tab
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className='relative mx-2'>
//       {/* Toggle Button for Dropdown */}
//       <button
//         onClick={toggleDropdown}
//         className='bg-white p-4 mb-4 mt-1 rounded-lg flex items-center justify-between w-full border-2 border-[#fc6e73]'
//       >
//         <span className=' text-base font-normal font-public-sans bg-btn-gradient text-transparent bg-clip-text'>{activeTab}</span>
//         <svg
//           className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
//           fill="none"
//           stroke="#fc6e73"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//         </svg>
//       </button>

//       {/* Sidebar Content as Dropdown */}
//       {isDropdownOpen && (
//         <div className='flex flex-col left-0  bg-white py-3  w-full h-auto items-center justify-between z-10'>
//           <div className='w-full flex flex-col'>
//             {(user.role === "HR" ? HRSideBarData : userSideBarData).map((value, index) => (
//               <div key={index}
//                 onClick={() => { handleSideBarClick(value.navigate) }}
//                 className={`${value.active === true ? ' bg-btn-gradient ' : 'bg-white'} p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}>
//                 {<p>{value.icon}</p>}   {/* < color={value?.active===true? '#fff': '#828282'} /> */}
//                 <p className={`${value?.active === true ? 'text-white text-base font-normal font-public-sans ' : 'text-gray-4 text-base font-normal font-public-sans'}`} >
//                   {value.name}
//                 </p>
//               </div>

//             )

//             )}
//           </div>

//           <div
//             onClick={() => { navigate('/') }}
//             className='bg-white p-4 cursor-pointer rounded-lg flex flex-row space-x-4 text-[#828282] w-full'>
//             <Svgs.Logout />
//             <p>
//               Logout
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };







import React, { useState } from 'react';
import Svgs from '../assets/svgs/index.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/UserProvider.jsx';

export const DropdownSidebar = ({ active }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUserContext();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sidebar data for User and HR roles
  const userSideBarData = [
    {
      name: 'Dashboard',
      icon: (active) => <Svgs.Dashboard color={active ? '#fff' : '#828282'} />,
      navigate: '/user/dashboard',
    },
    {
      name: 'My Tasks',
      icon: (active) => <Svgs.MyTasks color={active ? '#fff' : '#828282'} />,
      navigate: '/user/tasks',
    },
    {
      name: 'My Team',
      icon: (active) => <Svgs.Team color={active ? '#fff' : '#828282'} />,
      navigate: '/user/my-team',
    },
    {
      name: 'Chat',
      icon: (active) => <Svgs.Chat color={active ? '#fff' : '#828282'} />,
      navigate: '/user/chat',
    },
    {
      name: 'Attendance & Leave',
      icon: (active) => <Svgs.AttendanceSvg color={active ? '#fff' : '#828282'} />,
      navigate: '/user/attendance-leave',
    },
    {
      name: 'My profile',
      icon: (active) => <Svgs.Setting color={active ? '#fff' : '#828282'} />,
      navigate: '/user/my-profile',
    },
  ];




  const HRSideBarData = [
    {
      name: 'Dashboard',
      icon: (active) => <Svgs.Dashboard color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/dashboard',
    },
    {
      name: 'Employees',
      icon: (active) => <Svgs.Team color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/employees',
    },
    {
      name: 'Applicants',
      icon: (active) => <Svgs.Applicantssvg color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/applicants',
    },
    {
      name: 'Attendance & Leave',
      icon: (active) => <Svgs.AttendanceSvg color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/attandence',
    },
    {
      name: 'Payroll',
      icon: (active) => <Svgs.Payrollsvg color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/payroll',
    },
    {
      name: 'Chat',
      icon: (active) => <Svgs.Chat color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/chat',
    },
    {
      name: 'Documents',
      icon: (active) => <Svgs.Document color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/documents',
    },
    {
      name: 'My profile',
      icon: (active) => <Svgs.Setting color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/myprofile',
    },
  ];

  // SideBar Data for change the icon color
  const userSideBarDataForIcon = [
    {
      name: 'Dashboard',
      icon: (active) => <Svgs.Dashboard color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/user/dashboard',
    },
    {
      name: 'My Tasks',
      icon: (active) => <Svgs.MyTasks color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/user/tasks',
    },
    {
      name: 'My Team',
      icon: (active) => <Svgs.Team color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/user/my-team',
    },
    {
      name: 'Chat',
      icon: (active) => <Svgs.Chat color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/user/chat',
    },
    {
      name: 'Attendance & Leave',
      icon: (active) => <Svgs.AttendanceSvg color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/user/attendance-leave',
    },
    {
      name: 'My profile',
      icon: (active) => <Svgs.Setting color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/user/my-profile',
    },
  ];

  const HRSideBarDataForIcon = [
    {
      name: 'Dashboard',
      icon: (active) => <Svgs.Dashboard color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/dashboard',
    },
    {
      name: 'Employees',
      icon: (active) => <Svgs.Team color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/employees',
    },
    {
      name: 'Applicants',
      icon: (active) => <Svgs.Applicantssvg color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/applicants',
    },
    {
      name: 'Attendance & Leave',
      icon: (active) => <Svgs.AttendanceSvg color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/attandence',
    },
    {
      name: 'Payroll',
      icon: (active) => <Svgs.Payrollsvg color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/payroll',
    },
    {
      name: 'Chat',
      icon: (active) => <Svgs.Chat color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/chat',
    },
    {
      name: 'Documents',
      icon: (active) => <Svgs.Document color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/documents',
    },
    {
      name: 'My profile',
      icon: (active) => <Svgs.Setting color={active ? '#fc6e73' : '#828282'} />,
      navigate: '/hr/myprofile',
    },
  ];



  // Determine which data to use based on user role
  const sideBarData = user.role === 'HR' ? HRSideBarData : userSideBarData;
  
  
  
  const sideBarDataForIcon = user.role === 'HR' ? HRSideBarDataForIcon : userSideBarDataForIcon;


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSideBarClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Close dropdown after navigation
  };

  return (
    <div className="relative mx-2">
      {/* Toggle Button for Dropdown */}
      <button
        onClick={toggleDropdown}
        className="bg-white p-4 mb-4 mt-1 rounded-lg flex items-center justify-between w-full border-2 border-[#fc6e73]"
      >
        {/* Render the icon for the active route */}
        <div className='flex items-center gap-4'>
        <span>
        {userSideBarDataForIcon.find(item => location.pathname.startsWith(item.navigate))?.icon(true) || <Svgs.Menu />}
        </span>
        <span className="text-base font-normal font-public-sans bg-btn-gradient text-transparent bg-clip-text">
          {sideBarData.find(item => location.pathname.startsWith(item.navigate))?.name || active}
        </span>
        </div>
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
        <div className="flex flex-col left-0 bg-white py-3 w-full h-auto items-center justify-between z-10">
          <div className="w-full flex flex-col">
            {sideBarData.map((value, index) => {
              const isActive = location.pathname.startsWith(value.navigate);
              return (
                <div
                  key={index}
                  onClick={() => handleSideBarClick(value.navigate)}
                  className={`${isActive ? 'bg-btn-gradient text-white' : 'bg-white text-gray-4'
                    } p-4 rounded-lg flex flex-row space-x-4 w-full cursor-pointer`}
                >
                  <p>{value.icon(isActive)}</p>
                  <p className={`${isActive ? 'text-white' : 'text-gray-4'} text-base font-normal font-public-sans`}>
                    {value.name}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            onClick={() => { navigate('/'); setIsDropdownOpen(false); }}
            className="bg-white p-4 cursor-pointer rounded-lg flex flex-row space-x-4 text-[#828282] w-full"
          >
            <Svgs.Logout />
            <p>Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};
