import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/OnBoarding/LoginPage';
import { SignUpPage } from './pages/OnBoarding/SignUpPage';
import { SideBar } from './components/SideBar';
import { NavBar } from './components/NavBar';
import { Dashboard } from './pages/Dashboard/Dashboard';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/SignUp",
      element: <SignUpPage />
    },
    {
      path: "/Dashboard",
      element: <Dashboard />
    },
  ])


  return (
    <>

      <RouterProvider router={router} />
    </>

  );
}

export default App;
