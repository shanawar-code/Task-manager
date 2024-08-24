import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Dashboard_hr from "./Pages/HRDashboard/Dashboard/index";
import Employees from "./Pages//UserDashboard/Employees";
import MyTaskCard from "./Pages/UserDashboard/MyTasks/MyTaskCard";
import { LoginPage } from "Pages/Auth/LogIn/Index";
import { SignUpPage } from "Pages/Auth/SignUp/Index";
import MyTeam from "./Pages/UserDashboard/MYTeam";
import Chat from "./Pages/UserDashboard/Chat";
import MYTeamLast from "Pages/UserDashboard/MYTeam/MyTeamLast";
import FindColleagues from "Pages/UserDashboard/Chat/FindColleagues";
import HR_Dashboard from "Pages/HRDashboard/Dashboard";


import Employees_hr from "./Pages/HRDashboard/Employees";
import Applicants from './Pages/HRDashboard/Applicants'
import AttendanceAndLeave from "./Pages/HRDashboard/AttandenceAndLeave";

import MyProfile from "./Pages/HRDashboard/Myprofile/index";
import Payroll from "./Pages/HRDashboard/Payroll";
import Documents from "./Pages/HRDashboard/Documents";
import RequireAuth from "./components/RequireAuth";
import { Dashboard } from "./Pages/UserDashboard/Dashboard";
import Tasks from "Pages/UserDashboard/MyTasks";


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: "/sign-up", element: <SignUpPage /> },
    {
      path: "/user",
      element: <RequireAuth allowedRoles={"USER"} />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "tasks", element: <Tasks /> },
        { path: "chat", element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
      ]
    },
    {
      path: "/hr",
      element: <RequireAuth allowedRoles={"HR"} />,
      children: [
        { path: "dashboard", element: <Dashboard_hr /> }
      ]
    },
    // { path: "*", element: <Navigate to="/" replace /> }
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
    // {
    //   path: "/employees",
    //   element: <Employees_hr />
    // },
    // {
    //   path: "/dashboard",
    //   element: <Dashboard_hr />,
    // },
    // {
    //   path: "/applicants",
    //   element: <Applicants />
    // },
    // {
    //   path: "/attendance-leave",
    //   element: <AttendanceAndLeave />
    // },
    // {
    //   path: "/Chat",
    //   element: <Chat />
    // },
    // {
    //   path: "/myprofile",
    //   element: <MyProfile />
    // },
    // {
    //   path: "/payroll",
    //   element: <Payroll />
    // },
    // {
    //   path: "/documents",
    //   element: <Documents />
    // },

    // {
    //   path: '/myteamlast',
    //   element: <MYTeamLast />
    // },
    // {
    //   path: '/findcolleagues',
    //   element: <FindColleagues />
    // },


    // ---------------------------


    // {
    //   path: '/hr-dashboard',
    //   element: <HR_Dashboard />
    // }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
