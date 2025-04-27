import { createContext,} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const token = localStorage.getItem("token");

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}