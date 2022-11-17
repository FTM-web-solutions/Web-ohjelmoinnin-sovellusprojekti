import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import V2desc from './components/V2desc';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Login from './components/LoginHome';
import LoginHome from './components/LoginHome';
import LoginView from './components/LoginView'
import SignupView from './components/SignupView'
import ProtectedView from './components/ProtectedView'

function App() {

  return (
    <>
    <Navbar />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/V2desc" element={<V2desc />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginHome/>} />
          <Route path="/login/loginforuser" element={ <LoginView />} />
          <Route path="/login/signup" element={ <SignupView />} />
          <Route path="/login/protected" element={ <ProtectedView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    {/* <Footer /> */}
    </>
  );
}

export default App;
