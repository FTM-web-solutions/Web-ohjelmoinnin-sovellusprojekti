import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// const jwtFromStorage = window.localStorage.getItem('appAuthData')

function App() {
  // const [userJwt, setUserJwt] = useState(jwtFromStorage)

  // let authRoutes = <>
  // <Route path="/loginforuser" element={ <LoginView login={ newJwt => {
  //   setUserJwt(newJwt)
  //   window.localStorage.setItem('appAuthData', newJwt)
  //   } }/> } />
  // <Route path="/signup" element={ <SignupView />} />
  // </>

  // if(userJwt != null) {
  //   authRoutes = <Route path="/protected" element={ <ProtectedView jwt={userJwt} logout={() => {
  //   setUserJwt(null)
  //   window.localStorage.removeItem('appAuthData')
    
  //   } } />} />
  // } 

  return (
    <>
    <Navbar />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="*" element={<LoginHome />} /> */}
      </Routes>
    {/* <Footer /> */}
    </>
  );
}

export default App;
