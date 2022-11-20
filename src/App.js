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
import { useState } from 'react';

const jwtFromStorage = window.localStorage.getItem('appAuthData')

function App() {
  const [userJwt, setUserJwt] = useState(jwtFromStorage)

  let authRoutes = <>
  <Route path="/loginforuser" element={ <LoginView login={ newJwt => {
    setUserJwt(newJwt)
    window.localStorage.setItem('appAuthData', newJwt)
    } }/> } />
  <Route path="/signup" element={ <SignupView />} />
  </>

  if(userJwt != null) {
    authRoutes = <Route path="/protected" element={ <ProtectedView jwt={userJwt} logout={() => {
    setUserJwt(null)
    window.localStorage.removeItem('appAuthData')
    
    } } />} />
  } 

  return (
    <>
    <Navbar />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/V2desc" element={<V2desc />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginHome userLoggedIn={userJwt != null}/>} />
         { authRoutes } 
        <Route path="*" element={<LoginHome userLoggedIn={userJwt != null} />} />
      </Routes>
    {/* <Footer /> */}
    </>
  );
}

export default App;
