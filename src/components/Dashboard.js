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

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:3001/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate('/Login', { replace: true });
                localStorage.clear()
                navigate(0);
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:3001/token');
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

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:3001/logout');
            navigate('/', { replace: true });
            localStorage.clear()
            navigate(0);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async () => {
        try {
            await axios.delete('http://localhost:3001/deleteuser');
            navigate('/', { replace: true });
            localStorage.clear()
            navigate(0);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-5">
            <h1>Welcome Back: {name}</h1>
            <button onClick={deleteUser} className="button">Delete user</button>
            {/* <div>
                <label>Charts</label>
                <select name="charts" value={charts} onChange={e => setCharts(e.target.value)} >
                    <option value="1.3">V1</option>
                    <option value="1.5">V2</option>
                    <option value="1.7">V3</option>
                    <option value="2">V4</option>
                    <option value="2.2">V5</option>
                </select>
            </div> */}
        </div>
    )
}

export default Dashboard
