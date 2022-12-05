import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const auth = localStorage.getItem("LoggedIn")

    return (
        <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className='navbar-brand' to='/'>Climate Visualization Page</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/N1">N1</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/N2">N2</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/N3">N3</Link></li>
                            {
                            auth ? <li className="nav"><Link className="btn btn-outline-light me-2" to="/Login">Logout</Link></li>
                            :<>
                            <li className="nav"><Link className="btn btn-outline-light me-2" to="/Login">Login</Link></li>
                            <li className="nav"><Link className="btn btn-warning" to="/Register">Sign-in</Link></li>
                            </>
                            }
                    </ul>
                </div>
            </div>
        </nav>
    );
}