import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";
import { cardio } from "ldrs";
const API_URL = import.meta.env.VITE_BOOKS_API;

const AddLibraryPage = () => {
  cardio.register();
  const { isLoggedIn } = useAuthContext();
  const [name, setName] = useState("");
  const handleName = (e) => setName(e.target.value);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const token = localStorage.getItem("authToken");
    event.preventDefault();
    setIsLoading(true);

    try {
      await axios.post(
        `${API_URL}/libraries`,
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTimeout(() => {
        setIsLoading(false);
        navigate("/my-library");
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  if (isLoggedIn)
    return isLoading ? (
      <div className="flex justify-center my-80 ">
        <l-cardio size="250" stroke="4" speed="2" color="purple"></l-cardio>
      </div>
    ) : (
      <>
        <form onSubmit={handleSubmit}>
          <div className="space-y-12 mt-20 max-w-4xl mx-auto">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900 flex justify-center items-center">
                Library
              </h2>

              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex-1 min-w-[250px]">
                  <label
                    htmlFor="library-title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      id="library-title"
                      name="library-title"
                      type="text"
                      value={name}
                      onChange={handleName}
                      placeholder="Enter library title"
                      className="input input-bordered input-secondary w-full bg-white text-black"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Link to="/my-library">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  Cancel
                </p>
              </Link>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </>
    );
};

export default AddLibraryPage;
