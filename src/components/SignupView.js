import React from 'react'
import axios from 'axios'
import Constants from './Constants.json'

// tee node api erikseen vielä, tämä kesken...

export default function SignupView() {

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);

    try {
        const result = await axios.post(Constants.API_ADDRESS + '/registerBasic', 
        {
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value
        }); 
        // do something with result
        console.log(result);
    } catch (error) {
        console.error(error);   
    }

  }
    
  return (
    <div>
        <h2>Signup</h2>
        <form onSubmit={ handleSignupSubmit }>
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
                <button type="submit">Signup</button>
            </div>
        </form>    
    </div>
  )
}
