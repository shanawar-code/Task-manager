import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyTaskCard from "./Pages/UserDashboard/MyTasks/MyTaskCard";
import { LoginPage } from './Pages/Auth/LogIn/Index'
import { SignUpPage } from './Pages/Auth/SignUp/Index'
import MyTeam from "./Pages/UserDashboard/MYTeam";
import MYTeamLast from "./Pages/UserDashboard/MYTeam/TeamMembers";
import FindColleagues from "./Pages/UserDashboard/Chat/FindColleagues";
import RequireAuth from "./components/RequireAuth";
import { Dashboard } from "./Pages/UserDashboard/Dashboard";
import Tasks from "./Pages/UserDashboard/MyTasks";
import AttendanceAndLeaveUser from "./Pages/UserDashboard/AttendanceAndLeave";
import MyProfileUser from "./Pages/UserDashboard/MyProfile";

import Dashboard_hr from "./Pages/HRDashboard/Dashboard/index";
import Employees_hr from "./Pages/HRDashboard/Employees";
import Applicants from "./Pages/HRDashboard/Applicants";
import Payroll from "./Pages/HRDashboard/Payroll";
import Chat_hr from "./Pages/HRDashboard/Chat";
import Chat from "./Pages/UserDashboard/Chat";
import MyProfileHR from "./Pages/HRDashboard/Myprofile";
import DocumentsHR from "./Pages/HRDashboard/Documents";
import AttendanceAndLeaveHR from "./Pages/HRDashboard/AttandenceAndLeave";
import Employeesdetail from "./Pages/HRDashboard/Employees/Employeesdetail";



function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: "/sign-up", element: <SignUpPage /> },

    {
      path: "/user",
      element: <RequireAuth allowedRoles={"USER"} />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "tasks",
          element: <Tasks />,
        },
        {
          path: "chat",
          element: <Chat />
        },
        {
          path: "my-team",
          element: <MyTeam />,
        },
        {
          path: "my-profile",
          element: <MyProfileUser />,
        },
        {
          path: "my-task-card",
          element: <MyTaskCard />,
        },
        {
          path: "my-team-list",
          element: <MYTeamLast />,
        },
        {
          path: "attendance-leave",
          element: <AttendanceAndLeaveUser />,
        },
        {
          path: "findcolleagues",
          element: <FindColleagues />,
        },
        {
          path: "myteamlast",
          element: <MYTeamLast />,
        },
      ],
    },

    {
      path: "/hr",
      element: <RequireAuth allowedRoles={"HR"} />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard_hr />
        },
        {
          path: "attandence",
          element: <AttendanceAndLeaveHR />
        },
        {
          path: "chat",
          element: <Chat_hr />
        },
        {
          path: "payroll",
          element: <Payroll />
        },
        {
          path: "documents",
          element: <DocumentsHR />
        },
        {
          path: "applicants",
          element: <Applicants />
        },
        {
          path: "employees",
          element: <Employees_hr />
        },
        {
          path: "myprofile",
          element: <MyProfileHR />
        },

        {
          path: "employeesdetails",
          element: <Employeesdetail/> 
        },

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
