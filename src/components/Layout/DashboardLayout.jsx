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

export const Layout = ({ active, children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="">
      <div className="w-full xl:col-span-12 flex flex-col">
        <NavBar />
      </div>
      <div className="xl:hidden px-5">
        <DropdownSidebar />
      </div>
      <div className="flex">
        <div className="hidden xl:block xl:col-span-2 ">
          <SideBar active={"active"} />
        </div>
        <main className="col-span-10 p-4">{children}</main>
      </div>
    </div>
  );
};
