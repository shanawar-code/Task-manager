import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard/Index";
import Employees from "./Pages/Employees/Index";
import { Layout } from "./components/Layout";
import Tasks from "./Pages/My Tasks/Index";
import MyTaskCard from "./Pages/My Tasks/MyTaskCard";
import { LoginPage } from "./components/Auth/LoginPage";
import { SignUpPage } from "./components/Auth/SignUpPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
    },
    {
      path: "/sign-up",
      element:<SignUpPage/>,
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
