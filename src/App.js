import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./Pages/UserDashboard/Dashboard/index";
import Employees from "./Pages/UserDashboard/Employees/index";
import Tasks from "./Pages/UserDashboard/MyTasks/index";
import MyTaskCard from "./Pages/UserDashboard/MyTasks/MyTaskCard";
import { LoginPage } from "./Pages/Auth/LogIn/index";
import { SignUpPage } from "./Pages/Auth/SignUp/index";
import AttendanceAndLeave from "./Pages/UserDashboard/AttendanceAndLeave";
import MyTeam from "./Pages/UserDashboard/MYTeam";
import MyProfile from "./Pages/UserDashboard/MyProfile";
import Chat from "./Pages/UserDashboard/Chat";

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
    {
      path: "/tasks",
      element: <Tasks />,
    },
    {
      path: "mytaskcard",
      element: <MyTaskCard />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/my-tasks",
      element: <Tasks/>,
    },
    {
      path: "/my-team",
      element: <MyTeam />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/attendance-leave",
      element: <AttendanceAndLeave/>,
    },
    {
      path: "/my-profile",
      element: <MyProfile />,
    },

    {
      path: "/employees",
      element: <Employees />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
