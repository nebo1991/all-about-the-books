import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cardio } from "ldrs";

cardio.register();

// Default values shown

const AddNewBookPage = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [pages, setPages] = useState(null);
  const [price, setPrice] = useState(null);
  const [img_url, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handlePages = (e) => setPages(Number(e.target.value));
  const handlePrice = (e) => setPrice(Number(e.target.value));
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(
        "https://json-server-production-ef6b.up.railway.app/books",
        {
          title,
          name,
          pages,
          price,
          img_url,
          description,
        }
      );

      setTimeout(() => {
        setIsLoading(false);
        navigate("/books");
      }, 4000);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return isLoading ? (
    <div className="flex justify-center my-80 ">
      <l-cardio size="250" stroke="4" speed="2" color="purple"></l-cardio>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 mt-20">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 flex justify-center items-center">
            Add new book
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/*Title*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="book-title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  id="book-title"
                  name="book-title"
                  type="text"
                  value={title}
                  onChange={handleTitle}
                  placeholder=" Enter book title"
                  className="block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/*Author*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="book-author"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Author
              </label>
              <div className="mt-2">
                <input
                  id="book-author"
                  name="book-author"
                  type="text"
                  value={name}
                  onChange={handleName}
                  placeholder=" Enter full name of Author"
                  className=" bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/*Pages*/}
            <div className="sm:col-span-2">
              <label
                htmlFor="book-pages"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pages
              </label>
              <div className="mt-2">
                <input
                  id="book-pages"
                  name="book-pages"
                  type="number"
                  value={pages}
                  onChange={handlePages}
                  placeholder=" Add number of pages"
                  className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/*Price*/}
            <div className="sm:col-span-2">
              <label
                htmlFor="book-price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  id="book-price"
                  name="book-price"
                  type="number"
                  value={price}
                  onChange={handlePrice}
                  placeholder=" Add book price"
                  className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/*Image URL*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="book-image-url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image URL
              </label>
              <div className="mt-2">
                <input
                  id="book-image-url"
                  name="book-image-url"
                  type="text"
                  value={img_url}
                  onChange={handleImageUrl}
                  placeholder=" Add image URL"
                  className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="book-description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Book description
            </label>
            <div className="mt-2">
              <textarea
                id="book-description"
                name="book-description"
                rows={3}
                value={description}
                onChange={handleDescription}
                placeholder=" Add some details about this book? Why should we read it?"
                className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Book submit and cancel button*/}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddNewBookPage;
