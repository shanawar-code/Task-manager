import { useUserContext } from "../Context/UserProvider";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
    const { user } = useUserContext()

    if (!user.isLoggedIn) {
        return <Navigate to="/" replace />
    }

    if (user?.role === allowedRoles) {
        return <Outlet />
    }

    if (user?.role === 'HR') {
        return <Navigate to="/hr/dashboard" replace />
    }
    else {
        <Navigate to="/user/dashboard" replace />
    }

}

export default RequireAuth;