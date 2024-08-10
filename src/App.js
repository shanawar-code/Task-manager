import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./Pages/OnBoarding/LoginPage";
import { SignUpPage } from "../src/Pages/OnBoarding/SignUpPage";
import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";
// import { Dashboard } from './pages/Dashboard/Dashboard';
import { Dashboard } from "./Pages/Dashboard/Dashboard";

import Employees from "./Pages/Employees/Employees";
import { Layout } from "./components/Layout";
import Calendar from "./Pages/Dashboard/Calendar";
import Tasks from "./Pages/My Tasks/Tasks";
import MyTaskCard from "./Pages/My Tasks/MyTaskCard";

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
      path: '/calendar',
      element: <Calendar/>
    },
    {
      path: '/tasks',
      element:<Tasks/>
    },
    {
      path: 'mytaskcard',
      element:<MyTaskCard/>
    },
    {
      path: "/dashboard",
      element: <Layout/>,
      children:[
        {
          path: '',
          element:<Dashboard/>
        },
      
      ]
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
