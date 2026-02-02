import { createContext, useState, useEffect, use } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("https://zerodha-clone-ukx9.onrender.com/fetchuser");

        if (response.status === 200) {
          setIsAuthenticated(true);
          setUserData(response.data.username)
        }
      } catch (err) {
        const msg = err.response?.data?.message || "Not authenticated or session expired"

        console.log(msg);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userData }}>
      {children}
    </AuthContext.Provider>
  );
}
