import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const LibraryDetailsPage = () => {
  const { idLibrary } = useParams(); // Get the idLibrary from the URL parameters
  const { isLoggedIn } = useAuthContext();
  const [library, setLibrary] = useState(null);
  const token = localStorage.getItem("authToken");

  const fetchLibrary = async (idLibrary) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/libraries/${idLibrary}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response: ", response.data);
      setLibrary(response.data);
    } catch (error) {
      console.error("Error fetching library:", error);
    }
  };

  useEffect(() => {
    if (idLibrary) {
      fetchLibrary(idLibrary); // Pass idLibrary when calling the function
    }
  }, [idLibrary]); // Add idLibrary as a dependency

  if (!isLoggedIn) {
    return <p>You need to log in to view this page.</p>;
  }

  if (!library) {
    return <p>Loading library details...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black">Library Details</h1>
        <h2 className="text-2xl font-semibold text-black">{library.name}</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {library.books.map((book) => {
          return (
            <Link key={book.id} to={`/books/${book._id}`}>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt="book-cover"
                    src={book.image}
                    className="h-full w-full object-fill lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {book.title}
                      </a>
                    </h3>
                    <div className="flex items-baseline gap-20">
                      <p className="mt-1 text-sm text-gray-500">
                        {book.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LibraryDetailsPage;
