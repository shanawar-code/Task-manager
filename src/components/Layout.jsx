import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    useLocation,
  } from "react-router-dom";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { useEffect } from "react";
import { DropdownSidebar } from "./DropdownSidebar";


export const Layout = () => {
    const { pathname } = useLocation()
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

   
    return (
      <div className='w-full flex flex-col xl:grid xl:grid-cols-12'>
        <div className='w-full xl:col-span-12 flex flex-col'>
          <NavBar/>
        </div>
        <div className='xl:hidden px-5'>
          <DropdownSidebar />
        </div>
        <div className='hidden xl:block xl:col-span-2 '>
          <SideBar />
        </div>
        <main className='col-span-10 p-4'>
          <Outlet />
        </main>
      </div>
    )
  }