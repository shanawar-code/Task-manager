import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLoggedIn: false,
        role: ""
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);
export default UserContext;