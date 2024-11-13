import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  // Check if user is already logged in from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("authToken") ? true : false
  );
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Use effect to get user info from localStorage (if any) when the page loads
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Assume you have an endpoint to fetch user info by token
      setIsLoading(true);
      axios
        .get("http://localhost:3000/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        setIsLoggedIn,
        setIsLoading,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => useContext(AuthContext);
export { AuthContextProvider, useAuthContext };
