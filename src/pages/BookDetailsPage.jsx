import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});

  const navigate = useNavigate();

  const fetchSingleBook = async (idBook) => {
    const response = await axios.get(
      `https://json-server-production-ef6b.up.railway.app/books/${idBook}`
    );

    setBook(response.data);
  };

  const deleteBook = async (idBook) => {
    try {
      await axios.delete(
        `https://json-server-production-ef6b.up.railway.app/books/${idBook}`
      );
      setTimeout(() => {
        navigate("/books");
      }, 1000);
    } catch (error) {
      console.error("There was an error deleting the book:", error);
    }
  };

  useEffect(() => {
    fetchSingleBook(bookId);
  }, [bookId]);

  const bookReviews = book.reviews;

  return (
    <>
      <div className="flex py-40 gap-16">
        <div className="ml-12">
          <img src={book.img_url} className="w-[800px] ml-10" />
        </div>
        <div>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-purple-900 sm:text-7xl">
            {book.title}
          </h1>
          <p className="mt-2 text-pretty text-2xl">{book.name}</p>
          <p className="mt-4 text-pretty text-xl font-medium text-gray-500 sm:text-xl/8">
            {book.description}
          </p>
        </div>
        <div>
          <button
            className="btn btn-circle btn-outline border-red-300 hover:bg-red-400"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fca5a5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-red-400">
              <form method="dialog">
                <div>
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white
                  "
                  >
                    ✕
                  </button>
                </div>
              </form>

              <h3 className="font-bold text-lg text-white">
                Are you sure you want to delete this book
              </h3>
              <div className="flex gap-48 mt-8">
                <p className="py-4 text-white">Press `Delete` to confirm</p>
                <button
                  className="text-white btn bg-transparent border-solid border-red-600 hover:bg-red-500 hover:border-red-600"
                  onClick={() => {
                    deleteBook(bookId);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-[#795879] sm:text-5xl ml-20">
        Reader Reviews
      </h1>
      <div>
        {bookReviews &&
          bookReviews.map((review) => {
            return (
              <div
                key={review.name}
                className="relative pl-16 mt-14 ml-20 mb-24"
              >
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500">
                    <h1 className="text-white">{review.name[0]}</h1>
                  </div>
                  {review.name}
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={24}
                    activeColor="#553c9a"
                    edit={false}
                  />
                </dt>
                <dd className="mt-2 text-lg leading-7 font-medium text-gray-800">
                  {review.comment}
                </dd>
              </div>
            );
          })}
      </div>
      <h1 className="ml-20 mb-4 text-purple-600">Add your review</h1>
      <div className="flex">
        <textarea
          className="textarea textarea-primary	w-[40rem] mb-12 ml-20 bg-white text-black"
          placeholder="Share your thoughts or experience with the book. What did you like or dislike? How did it make you feel?"
        ></textarea>

        <div className="flex flex-col ml-4  ">
          <label className="text-purple-600">Rating</label>
          <input
            type="number"
            min={1}
            max={5}
            className="bg-white w-20 h-8 rounded-xl text-black"
          ></input>
        </div>
        <div className="tooltip  tooltip-primary" data-tip="Submit">
          <button className="btn btn-circle btn-outline border-purple-400 mt-2 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default BookDetailsPage;
