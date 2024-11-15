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
    <div>
      <h1>Library Details</h1>
      <h2>{library.name}</h2>
      <ul>
        {library.books.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
      <Link to="/libraries">Back to Libraries</Link>
    </div>
  );
};

export default LibraryDetailsPage;
