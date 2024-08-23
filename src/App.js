import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard_hr from "./Pages/HRDashboard/Dashboard/index";
import Employees from "./Pages//UserDashboard/Employees";
import Tasks from "./Pages/UserDashboard/MyTasks/index";
import MyTaskCard from "./Pages/UserDashboard/MyTasks/MyTaskCard";
import { LoginPage } from "./../src/Pages/Auth/LogIn/Index";
import { SignUpPage } from "./../src/Pages/Auth/SignUp/Index";
// import AttendanceAndLeave from "./Pages/UserDashboard/AttendanceAndLeave";
import MyTeam from "./Pages/UserDashboard/MYTeam";
// import MyProfile from "./Pages/UserDashboard/MyProfile";
import Chat from "./Pages/UserDashboard/Chat";
import Employees_hr from "./Pages/HRDashboard/Employees";
import Applicants from './Pages/HRDashboard/Applicants'
import AttendanceAndLeave from "./Pages/HRDashboard/AttandenceAndLeave";

import MyProfile from "./Pages/HRDashboard/Myprofile/index";
import Payroll from "./Pages/HRDashboard/Payroll";
import Documents from "./Pages/HRDashboard/Documents";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
    // {
    //   path: "/tasks",
    //   element: <Tasks />,
    // },
    // {
    //   path: "mytaskcard",
    //   element: <MyTaskCard />,
    // },
    // {
    //   path: "/dashboard",
    //   element: <Dashboard />,
    // },
    // {
    //   path: "/my-tasks",
    //   element: <Tasks/>,
    // },
    // {
    //   path: "/my-team",
    //   element: <MyTeam />,
    // },
    // {
    //   path: "/chat",
    //   element: <Chat />,
    // },
    // {
    //   path: "/attendance-leave",
    //   element: <AttendanceAndLeave/>,
    // },
    // {
    //   path: "/my-profile",
    //   element: <MyProfile />,
    // },

    // {
    //   path: "/employees",
    //   element: <Employees />,
    // },
     {
       path: "/employees",
      element: <Employees_hr/>
     },
     {
         path: "/dashboard",
         element: <Dashboard_hr/>,
      },
      {
        path: "/applicants",
        element: <Applicants/>
     },
     {
      path: "/attendance-leave",
      element: <AttendanceAndLeave/>
   },
   {
    path: "/Chat",
    element: <Chat/>
 },
 {
  path: "/myprofile",
  element: <MyProfile/>
 },
 {
  path: "/payroll",
  element: <Payroll/>
 },

 {
   path: "/documents",
   element: <Documents/>
 }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
