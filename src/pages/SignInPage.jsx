// import axios from "axios";
import validator from "validator";
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const { setIsLoggedIn, isLoading, setUser } = useAuthContext();
  console.log("isLoading: ", isLoading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("All inputs are required");
      return;
    }

    if (!validator.isEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/login`, {
        email,
        password,
      });

      if (response.status !== 200) {
        setErrorMessage("Something went wrong");
        return;
      }

      localStorage.setItem("authToken", response.data.authToken);

      // Set state
      setIsLoggedIn(true);
      setUser(response.data.user);

      navigate("/books");
    } catch (error) {
      setErrorMessage("Something went wrong");
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="space-y-8 mt-10 max-w-xl w-full px-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <form onSubmit={handleLoginSubmit}>
              <div className="flex justify-center mb-6">
                <h1 className="font-bold tracking-tight text-purple-800 sm:text-4xl">
                  Welcome
                </h1>
              </div>

              {error && (
                <div className="text-red-500 text-center mb-4">{error}</div>
              )}

              <label className="input input-bordered flex items-center gap-2 bg-purple-200 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow p-2 rounded-md"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2 bg-purple-200 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow p-2 rounded-md"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                />
              </label>

              <button
                type="submit"
                className="btn btn-outline w-full py-3 mt-4 bg-purple-900 hover:bg-purple-900 hover:border-green-400 hover:text-green-400 text-white disabled:bg-gray-200 disabled:text-gray-300"
                disabled={!email || !password}
              >
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default SignInPage;
