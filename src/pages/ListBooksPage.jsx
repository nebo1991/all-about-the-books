import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListBooksPage = () => {
  const [books, setBook] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(
      "https://json-server-production-ef6b.up.railway.app/books"
    );
    setBook(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  //test

  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-end">
            <Link to="/books/addNewBook">
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

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {books.map((book) => (
              <Link key={book.id} to={`/books/${book.id}`}>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt="book-cover"
                      src={book.img_url}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full object-fill"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {book.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{book.name}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListBooksPage;
