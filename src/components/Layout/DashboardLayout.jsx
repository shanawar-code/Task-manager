// import {
//   createBrowserRouter,
//   Outlet,
//   RouterProvider,
//   useLocation,
// } from "react-router-dom";
// import { useEffect } from "react";
// import { NavBar } from "../NavBar";
// import { DropdownSidebar } from "../DropdownSidebar";
// import { SideBar } from "../SideBar";

// export const Layout = ({ active, children }) => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <div className="">
//       <div className="w-full xl:col-span-12 flex flex-col">
//         <NavBar />
//       </div>
//       <div className="xl:hidden px-5">
//         <DropdownSidebar />
//       </div>
//       <div className="flex">
//         <div className="hidden xl:block xl:col-span-2 ">
//           <SideBar active={"active"} />
//         </div>
//         <main className="col-span-10 p-4">{children}</main>
//       </div>
//     </div>
//   );
// };

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { NavBar } from "../NavBar";
import { DropdownSidebar } from "../DropdownSidebar";
import { SideBar } from "../SideBar";
import { useState } from "react";
import { useSidebarContext } from "../../Context/ContextLayout.jsx";

export const Layout = ({ active, children }) => {

  
  const { pathname } = useLocation();

  const {sidebarOpen} = useSidebarContext(true)


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">



      
      {/* Top Navbar */}
      <div className="w-full flex flex-col sticky top-0 lg:relative z-20">
        <NavBar  />
      </div>
     



      <div className="xl:hidden w-full bg-white">
        <DropdownSidebar active={active} />
      </div>



      {/* Sidebar and Content */}
      <div className="flex flex-grow">
        {/* Sidebar for larger screens */}

        <div className={`hidden xl:block   ${sidebarOpen ? 'xl:w-1/4 2xl:w-1/5' : 'w-20'}`}>

        {/* xl:w-1/4 2xl:w-1/5 */}

          <SideBar active={active} />
        </div>

        {/* Main Content Area */}
        <main className=" w-full px-[10px] md:p-[32px] bg-white lg:bg-[#fbfbfb]">
          {children}
        </main>
      </div>



    </div>
  );
};
