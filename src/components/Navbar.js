import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();
    const auth = localStorage.getItem("LoggedIn")

    const Logout = async () => {
        try {
            await axios.delete(process.env.REACT_APP_API_ADDRESS+"/logout");
            navigate('/', { replace: true });
            localStorage.clear()
            navigate(0);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <nav id="nav" className="navbar navbar-expand-md navbar-dark navbar-custom">
            <div className="container-fluid">
                <Link className='navbar-brand' to='/'>Climate Visualization Page</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/N1">Temperature data</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/N2">Emission sources</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/N3">Create view</Link></li>
                    </ul>
                    {
                        auth ?
                    <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/dashboard">Profile</Link></li>
                                <li><Link className="dropdown-item" to="/n3">Create view</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item divider" onClick={Logout}>Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                    :    
                    <ul className="navbar-nav">    
                        <li className="nav-item-nav-right"><Link className="btn btn-outline-light me-2" to="/Login">Login</Link></li>
                        <li className="nav-item-nav-right"><Link className="btn btn-primary" to="/Register">Sign-up</Link></li>
                    </ul>
                    }
                </div>
            </div>
        </nav>
    );
}