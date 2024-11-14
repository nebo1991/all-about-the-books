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
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import MyLibrary from "./pages/MyLibraryPage";

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
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/books/:bookId" element={<BookDetailsPage />} />
          <Route path="/books/add-new" element={<AddNewBookPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/my-library" element={<MyLibrary />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
