import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard/index";
import Employees from "./Pages/Employees/index";
import Tasks from "./Pages/My Tasks/index";
import MyTaskCard from "./Pages/My Tasks/MyTaskCard";
import { LoginPage } from "./Pages/Auth/LogIn/index";
import { SignUpPage } from "./Pages/Auth/SignUp/index";
import { Layout } from "./components/Layout/DashboardLayout";

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
      element: <Dashboard />,
    },
    {
      path: "/my-team",
      element: <Dashboard />,
    },
    {
      path: "/chat",
      element: <Dashboard />,
    },
    {
      path: "/attendance-leave",
      element: <Dashboard />,
    },
    {
      path: "/my-profile",
      element: <Dashboard />,
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
