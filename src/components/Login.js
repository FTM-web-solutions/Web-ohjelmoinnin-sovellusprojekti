import "../App.css"
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [ref, setref] = useState()

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/login', {
                email: email,
                password: password
            });
            localStorage.setItem("LoggedIn", true)
            navigate('/dashboard', { replace: true });
            navigate(0);
            
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
        
    }
    

    return (
      <body className="text-center">
        <main className="form-signin-w-100-m-auto">
          <form onSubmit={Auth}>
            <h1 className="h3 mb-3 fw-normal">Sign in</h1>
            <p className="msg-style">
              {msg}
            </p>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label for="floatingInput">Email address</label><br></br>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label for="floatingPassword">Password</label>
            </div>
            <br></br><br></br>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <Link className="login-link" to="/Register">Create account</Link>

          </form>
        </main>
      </body>
);
}
export default Login;
