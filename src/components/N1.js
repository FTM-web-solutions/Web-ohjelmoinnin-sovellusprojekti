import React from 'react'
import V1 from './V1'
import V3 from './V3'
import V5 from './V5'
import V6 from './V6'
import V7 from './V7'

export default function N1() {
  return (
    <>
      <h1>Temperature data and co2 concentration</h1>
      <p>
        On this page you will find graphs about studies based on temperature data and co2 concentration...
      </p>
        <V1 />
        <V3 />
        <V5 />
        <V6 />
        <V7 />
    </>
  )
}
