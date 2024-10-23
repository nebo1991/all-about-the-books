import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  // const [isUpdating, setIsUpdating] = useState(book);

  const fetchSingleBook = async (idBook) => {
    const response = await axios.get(
      `https://json-server-production-ef6b.up.railway.app/books${idBook}`
    );
    setBook(response.data);
  };

  useEffect(() => {
    fetchSingleBook(bookId);
  }, [bookId]);

  // const bookReviews = book.reviews;

  return (
    <>
      <div className="flex py-40 gap-16">
        <div className="ml-12">
          <img src={book.img_url} className="w-[800px] ml-10" />
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
      {/* <div>
        {bookReviews &&
          bookReviews.map((review) => {
            return (
              <div
                key={review.name}
                className=" px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
              >
                User:{review.name}
                {review.comment}
              </div>
            );
          })}
      </div> */}
    </>
  );
};

export default BookDetailsPage;
