import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import ListBooksPage from "./pages/ListBooksPage";
import AboutUsPage from "./pages/AboutUsPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import AddNewBookPage from "./pages/AddNewBookPage";
// Routes, Route
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/books" element={<ListBooksPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/books/:bookId" element={<BookDetailsPage />} />
          <Route path="/books/addNewBook" element={<AddNewBookPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
