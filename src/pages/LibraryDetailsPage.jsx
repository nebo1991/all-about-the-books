import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
const API_URL = import.meta.env.VITE_BOOKS_API;

const LibraryDetailsPage = () => {
  const { idLibrary } = useParams();
  const { isLoggedIn } = useAuthContext();
  const [library, setLibrary] = useState(null);
  const token = localStorage.getItem("authToken");

  // Fetch library details
  const fetchLibrary = async (idLibrary) => {
    try {
      const response = await axios.get(`${API_URL}/libraries/${idLibrary}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLibrary(response.data);
    } catch (error) {
      console.error("Error fetching library:", error);
    }
  };

  const handleRemoveBook = async (bookId) => {
    try {
      const response = await axios.put(
        `${API_URL}/libraries/${idLibrary}/remove-book`,
        { bookId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLibrary(response.data);
    } catch (error) {
      console.error("Error removing book from library:", error);
    }
  };

  useEffect(() => {
    if (idLibrary) {
      fetchLibrary(idLibrary);
    }
  }, [idLibrary]);

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
        {library.books.map((book) => (
          <div key={book._id} className="group relative">
            <Link to={`/books/${book._id}`}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt="book-cover"
                  src={book.image}
                  className="h-full w-full object-fill lg:h-full lg:w-full"
                />
              </div>
            </Link>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{book.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{book.author}</p>
              </div>
              <button
                onClick={() => handleRemoveBook(book._id)}
                className="text-red-500 hover:text-red-700"
                title="Remove Book"
              >
                💔
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryDetailsPage;
