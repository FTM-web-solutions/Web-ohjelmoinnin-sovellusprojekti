import React, { useState } from 'react'
import axios from 'axios'
import Constants from './Constants.json'
import { useNavigate } from 'react-router-dom'

// tee node api erikseen vielä, tämä kesken...

export default function SignupView() {

    const [signupProcessState, setSignupProcessState] = useState("idle")
    const navigate = useNavigate();

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        setSignupProcessState("processing");

        try {
            const result = await axios.post(Constants.API_ADDRESS + '/registerBasic',
                {
                    username: event.target.username.value,
                    email: event.target.email.value,
                    password: event.target.password.value
                });
            // do something with result
            console.log(result);
            
            setSignupProcessState("signupSuccess");
            setTimeout(() => {
                navigate('/loginforuser', { replace: true});
            }, 1500)

        } catch (error) {
            console.error(error);
            setSignupProcessState("signupFailure");
        }

    }
    let signupUIControls = null;
    switch(signupProcessState) {
        case "idle":
            signupUIControls = <button type="submit">Signup</button>
            break;

        case "processing":
            signupUIControls = <span style={{ color: "blue"}}>Processing...</span>
            break;

        case "signupSuccess":
            signupUIControls = <span style={{ color: "green"}}>Signup success</span>
            break;

        case "signupFailure":
            signupUIControls = <span style={{ color: "red"}}>Error</span>
            break;
    }

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignupSubmit}>
                <div>
                    Username <br />
                    <input type="text" name="username" />
                </div>
                <div>
                    Email <br />
                    <input type="text" name="email" />
                </div>
                <div>
                    Password <br />
                    <input type="text" name="password" />
                </div>
                <div>
                    { signupUIControls }
                </div>
            </form>
        </div>
    )
}
