import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
