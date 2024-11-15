import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const MyLibrary = () => {
  const { isLoggedIn, libraryId } = useAuthContext();

  if (isLoggedIn)
    return (
      <>
        {!libraryId && (
          <div className="flex flex-col justify-center items-center my-40 ">
            <h1 className="text-center mb-4 text-black">
              Make sure you add your library first
            </h1>
            <Link to="/add-library">
              <button className="btn btn-circle btn-outline border-solid border-transparent hover:bg-purple-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#7c12e5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </Link>
          </div>
        )}
        {libraryId && <h1 className="text-center">Library is present</h1>}
      </>
    );
};

export default MyLibrary;
