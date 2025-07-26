import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  username: string;
  role: 'ADMIN' | 'SUPER_ADMIN' | null;
}

interface JwtPayload {
  sub: string;
  roles: string[];
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean; 
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  loading: true, 
  login: () => {},
  logout: () => {},
});


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (token) {
        const decoded = jwtDecode<JwtPayload>(token);
        const userRole = decoded.roles[0]?.replace('ROLE_', '') as User['role'];
        setUser({ username: decoded.sub, role: userRole });
      }
    } catch (error) {
      console.error("Invalid token found in storage.", error);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [token]); 

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };


  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
    return useContext(AuthContext);
}
