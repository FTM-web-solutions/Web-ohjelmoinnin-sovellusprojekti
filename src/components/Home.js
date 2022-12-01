import React from 'react'
import V1 from './V1'
import V3 from './V3'
import V5 from './V5'
import V6 from './V6'
import V7 from './V7'
import V8 from './V8'
import V9 from './V9'

export default function Home() {
  return (
    <form>
    <div>
      <h1>Temperature data and co2 concentration</h1>
      <p>
        On this page you will find graphs about studies based on temperature data and co2 concentration...
      </p>
    </div>
    <div>
        <V1/><br/>
        <V3/><br/>
        <V5/><br/>
        <V6/><br/>
        <V7/><br/>
        <V8/><br/>
        <V9/><br/>
    </div>
    </form>
  )
}