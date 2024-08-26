import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard_hr from "./Pages/HRDashboard/Dashboard/index";
import MyTaskCard from "./Pages/UserDashboard/MyTasks/MyTaskCard";
import { LoginPage } from "./Pages/Auth/LogIn/Index";
import { SignUpPage } from "./Pages/Auth/SignUp/index";
import MyTeam from "./Pages/UserDashboard/MYTeam";
import Chat from "./Pages/UserDashboard/Chat";
import MYTeamLast from "./Pages/UserDashboard/MYTeam/MyTeamLast";
import FindColleagues from "./Pages/UserDashboard/Chat/FindColleagues";
import RequireAuth from "./components/RequireAuth";
import { Dashboard } from "./Pages/UserDashboard/Dashboard";
import Tasks from "./Pages/UserDashboard/MyTasks";
import AttendanceAndLeaveUser from "./Pages/UserDashboard/AttendanceAndLeave";
import MyProfileUser from "./Pages/UserDashboard/MyProfile";
import { Navigate } from "react-router-dom";

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
          element: <Chat />,
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
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
