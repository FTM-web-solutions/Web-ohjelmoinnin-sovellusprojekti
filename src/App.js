import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import N1 from './components/N1';
import N2 from './components/N2';
import N3 from './components/N3';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';


function App() {
  return ( 
    <>
    <Navbar />
    <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/N1" element={<N1 />} />
        <Route path="/N2" element={<N2 />} />
        <Route path="/N3" element={<N3 />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
