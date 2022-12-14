/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//  import { Logout } from '../../server/controllers/Users';

const Dashboard = (props) => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const [charts, setCharts] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
        // getUsers();
    }, []);

    const refreshToken = async () => { //refreshes users token if cannot find a token log user out 
        try {
            const response = await axios.get(process.env.REACT_APP_API_ADDRESS+"/token");
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate('/Login', { replace: true });
                localStorage.clear()
                // navigate(0);
            }
        }
    }

    const axiosJWT = axios.create(); //create a token for user

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get(process.env.REACT_APP_API_ADDRESS+"/token");
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const Logout = async () => { //logs user out and clears cookies and localstorage
        try {
            await axios.delete(process.env.REACT_APP_API_ADDRESS+"/logout");
            navigate('/', { replace: true });
            localStorage.clear()
            // navigate(0);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async () => { //deletes user from database and clears localstorage
        try {
            await axios.delete(process.env.REACT_APP_API_ADDRESS+"/deleteuser");
            navigate('/', { replace: true });
            localStorage.clear()
            // navigate(0);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-5">
            <h1>Welcome Back: {name}</h1>
            <button onClick={deleteUser} className="btn btn-primary btn-sm">Delete user</button>
        </div>
    )
}

export default Dashboard
