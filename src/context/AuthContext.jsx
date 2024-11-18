import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";
const API_URL = import.meta.env.VITE_BOOKS_API;

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("authToken") ? true : false
  );
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [libraryId, setLibraryId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoading(true);
      axios
        .get(`${API_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const userData = response.data;
          setUser(userData);

          setUser(userData);

          if (userData.library && userData.library._id) {
            setLibraryId(userData.library._id);
          } else {
            setLibraryId(null);
          }

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
        libraryId,
        setIsLoggedIn,
        setIsLoading,
        setUser,
        setLibraryId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => useContext(AuthContext);
export { AuthContextProvider, useAuthContext };
