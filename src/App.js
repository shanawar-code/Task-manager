import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyTaskCard from "./Pages/UserDashboard/MyTasks/MyTaskCard";
import { LoginPage } from "./Pages/Auth/LogIn";
import { SignUpPage } from "./Pages/Auth/SignUp/index";
import MyTeam from "./Pages/UserDashboard/MYTeam";
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
import FindColleagues from "./Pages/UserDashboard/Chat/FindColleagues";
import Employeesdetail from "./Pages/HRDashboard/Employees/Employeesdetail";
import TeamMembers from "./Pages/UserDashboard/MYTeam/TeamMembers";



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
          path: "attendance-leave",
          element: <AttendanceAndLeaveUser />,
        },
        {
          path: 'chatfindcolleagues',
          element: <FindColleagues />
        },
        {
          path: 'my-teammembers',
          element: <TeamMembers/>
        }
       
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
          element: <Employeesdetail />
        },

      ]
    },
    // { path: "*", element: <Navigate to="/" replace /> }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
