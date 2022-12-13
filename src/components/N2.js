import React from 'react'
import V8 from './V8'
import V9 from './V9'

export default function N2() {
  return (
    <>
      <div className='pagelayout'>
        <h1>Emission sources</h1>
        <p>
          On this page you will find graphs about studies based on emission data.
        </p>
        <V8 />
        <V9 />
      </div>
    </>
  )
}
