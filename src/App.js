import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

const URL = 'http://localhost:3001/'

function App() {
  const [crut, setcrut] = useState([])

  useEffect(() => {
    axios.get(URL)
    .then((response)=>{
      setcrut(response.data)
      console.log(response.data)
    }).catch(error=>{
      alert(error.response.data.error)
    })
  }, [])

  return (
    <>
    <Navbar />
    <Header />
    <div className='container'>
      <h1>FTM web proujekt</h1>
      <ol>{crut.map(hadcrut=>(
          <li key={hadcrut.Years}>{hadcrut.Years}{hadcrut.AnnualGlobalC}{hadcrut.AnnualNorthC}{hadcrut.AnnualSouthC}</li>
        ))}
      </ol>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
