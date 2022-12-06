import React from 'react'
import V1 from './V1'
import V3 from './V3'
import V5 from './V5'
import V6 from './V6'
import V7 from './V7'
import V8 from './V8'
import V9 from './V9'
// import Form from 'react-bootstrap/Form';
// import Button from "react-bootstrap/Button";
import { useState } from 'react'

export default function N3() {
  const[v1, setV1]=useState("")

  function handleData(e) 
  {
    e.preventDefault()
  }

  function handleV1() 
  {
    <>
        <V1 />
    </>
  }
  return (
    <div>
        <h1>Custom visualization only for signup users!</h1>
        <form onSubmit={handleData}>
        <input type="checkbox" onChange={(e)=>setV1(e.target.checked)} /><span>V1</span> <br /> <br />
        <button type="submit">Show</button>
        </form>
        <button onClick={handleV1}>Show</button>
    </div>
  )
}
