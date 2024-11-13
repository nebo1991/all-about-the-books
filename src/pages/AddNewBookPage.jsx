import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { cardio } from "ldrs";

const AddNewBookPage = () => {
  cardio.register();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [pages, setPages] = useState(null);
  const [img_url, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handlePages = (e) => setPages(Number(e.target.value));
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
      <div className="space-y-12 mt-20 max-w-4xl mx-auto">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 flex justify-center items-center">
            Add new book
          </h2>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex-1 min-w-[250px]">
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
                  placeholder="Enter book title"
                  className="input input-bordered input-secondary w-full bg-white text-black"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[250px]">
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
                  placeholder="Enter full name of Author"
                  className="input input-bordered input-secondary w-full bg-white text-black"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[250px]">
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
                  placeholder="Add number of pages"
                  className="input input-bordered input-secondary w-full bg-white text-black"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[250px]">
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
                  placeholder="Add image URL"
                  className="input input-bordered input-secondary w-full bg-white text-black"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 w-full">
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
                placeholder="Add some details about this book? Why should we read it?"
                className="textarea textarea-secondary w-full bg-white text-black"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to="/books">
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
  );
};

export default AddNewBookPage;
