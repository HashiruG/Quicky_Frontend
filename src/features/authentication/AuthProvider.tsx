import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({ isAuthenticated: false });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const token = localStorage.getItem("token");

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}