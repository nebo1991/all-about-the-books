import { Link, Navigate } from "react-router-dom";
import navBarLogo from "../assets/book-logo.svg";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, setUser } = useAuthContext();
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("authToken");
    // Reset the auth state
    setIsLoggedIn(false);
    setUser(null);
    Navigate("/"); // Navigate to home or login page
  };
  return (
    <>
      <div className="flex justify-between">
        <Link to="/">
          <img
            alt="books-logo"
            src={navBarLogo}
            className="w-[100px] mx-8 my-4"
          />
        </Link>
        <div className="flex gap-20 my-10 mx-4">
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
            <Link to="/about-us">
              <p className="text-sm font-semibold leading-6 text-gray-900 my-3 hover:text-purple-400 t">
                About
              </p>
            </Link>
            {!isLoggedIn && (
              <Link to="/sign-up">
                <p className="text-sm font-semibold leading-6 text-gray-900 my-3 hover:text-purple-400 t">
                  Sign-up
                </p>
              </Link>
            )}

            {!isLoggedIn && (
              <Link to="/sign-in">
                <p className="text-sm font-semibold leading-6 text-gray-900 my-3 hover:text-purple-400 t">
                  Login <span aria-hidden="true">&rarr;</span>
                </p>
              </Link>
            )}

            {isLoggedIn && (
              <Link to="/my-library">
                <p className="text-sm font-semibold leading-6 text-gray-900 my-3 hover:text-purple-400 t">
                  Library
                </p>
              </Link>
            )}

            {isLoggedIn && (
              <Link to="/sign-in">
                <p className="text-sm font-semibold leading-6 text-gray-900 my-3 hover:text-purple-400 t">
                  <button onClick={handleLogout}>
                    Logout <span aria-hidden="true">&rarr;</span>
                  </button>
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
