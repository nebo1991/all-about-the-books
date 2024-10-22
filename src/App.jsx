import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import ListBooksPage from "./pages/ListBooksPage";
import AboutUsPage from "./pages/AboutUsPage";
// Routes, Route
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/ListBooksPage" element={<ListBooksPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
