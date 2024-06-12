import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/OnBoarding/LoginPage';
import { SignUpPage } from './pages/OnBoarding/SignUpPage';
import { Dashboard } from './pages/Dashboard';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
    },
    {
      path: "/SignUp",
      element: <SignUpPage />
    },
  ])


  return (
    <RouterProvider router={router} />

  );
}

export default App;
