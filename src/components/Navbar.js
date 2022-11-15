import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className='navbar-brand' to='/'>Climate Visualization Page</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}