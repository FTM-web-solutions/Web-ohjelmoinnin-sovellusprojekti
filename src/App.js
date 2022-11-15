import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import HadcrutLinechart from './components/HadcrutLinechart';
import { Routes, Route } from 'react-router-dom';
import Login from './components/LoginHome';

function App() {

  return (
    <>
    <Navbar />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
