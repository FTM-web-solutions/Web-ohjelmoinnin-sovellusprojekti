import React from 'react'
import { Link } from 'react-router-dom'


export default function LoginHome() {
  return (
    <div>
      <h1>Home page where is the logic for signing up</h1>
      <Link to="signup">Sign up</Link><br />
      <Link to="loginforuser">Login</Link><br />
    </div>
  )
}

//<Route path="/login" element={ <LoginHome />} />