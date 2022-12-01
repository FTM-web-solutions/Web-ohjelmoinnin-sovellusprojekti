import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            // history.push("/");
            navigate('/login', { replace: true });
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
      <body className="text-center">
        <main className="form-signin-w-100-m-auto">
          <form onSubmit={Register}>
            <h1 className="h3 mb-3 fw-normal">Sign up</h1>

            <div className="form-floating">
              <input type="text" className="form-control" id="floatingInput" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} required />
              <label for="floatingInput">Username</label><br></br>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label for="floatingInput">Email address</label><br></br>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label for="floatingPassword">Choose password</label><br></br>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} required />
              <label for="floatingPassword">Confirm password</label>
            </div>
            <br></br><br></br>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <Link className="register-link" to="/Login">Go back</Link>

          </form>
        </main>
      </body>
    )
}

export default Register
