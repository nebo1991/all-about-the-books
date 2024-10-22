import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});

  const fetchSingleBook = async (idBook) => {
    const response = await axios.get(`http://localhost:3000/books/${idBook}`);
    setBook(response.data);
  };

  useEffect(() => {
    fetchSingleBook(bookId);
  }, [bookId]);

  return (
    <>
      <div className="flex py-40">
        <div className="ml-12">
          <img src={book.img_url} className="w-[80%] ml-10" />
        </div>
        <div>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-purple-800 sm:text-7xl">
            {book.title}
          </h1>
          <p className="mt-2 text-pretty text-2xl">{book.name}</p>
          <p className="mt-4 text-pretty text-xl font-medium text-gray-500 sm:text-xl/8">
            {book.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default BookDetailsPage;
