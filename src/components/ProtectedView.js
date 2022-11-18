import React from 'react'
import jwtDecode from 'jwt-decode'

export default function ProtectedView(props) {
  
  const decodedToken = jwtDecode(props.jwtDecode)
  console.log(decodedToken)
  
  return (
    <div className="protected">
        <h2>Protected view</h2>
        <div>
          Decoded JWT data from payload<br />
        </div>
    </div>
  )
}
