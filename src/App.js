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

function App() {

  return (
    <>
    <Navbar />
    <Header />
    <HadcrutLinechart/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
