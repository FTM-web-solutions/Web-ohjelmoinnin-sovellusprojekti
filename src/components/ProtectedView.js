import React from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import Constants from './Constants.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProtectedView(props) {
  
  const [userTodos, setUserTodos] = useState([])

  const decodedToken = jwtDecode(props.jwt)
  console.log(decodedToken)

  const loadDataWithJWT = async () => {
    try {
      const results = await axios.get(Constants.API_ADDRESS + '/todosJWT',
      {
        headers: {
          'Authorization': 'Bearer ' + props.jwt
        }
      })
      console.log(results)
      setUserTodos(results.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="protected">
        <h2>Protected view</h2>
        <div>
          Decoded JWT data from payload<br />
          User Id: { decodedToken.user.id} <br />
          User email: { decodedToken.user.email } <br />
        </div>
        <div>
          <button onClick={ loadDataWithJWT }>Click to load user todos with JWT</button>
        </div>
        <div>
          <table>
            <tbody>
              { userTodos.map(t => 
              <tr>
                <td>{t.description}</td>
                <td>{t.dueDate}</td>
                <td>{t.statue}</td>
              </tr>)}
            </tbody>
          </table>
          <div>
            <Link to="/Login">Back to LoginHome</Link>
          </div>
          <div>
            <button onClick={ props.logout }>Logout</button>
          </div>
        </div>
    </div>
  )
}
