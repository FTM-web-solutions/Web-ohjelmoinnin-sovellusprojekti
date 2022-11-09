import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const URL = 'http://localhost:3001/'

function App() {
  const [crut, setcrut] = useState([])

  useEffect(() => {
    axios.get(URL)
    .then((response)=>{
      setcrut(response.data)
      console.log(response.data)
    }).catch(error=>{
      alert(error.response.data.error)
    })
  }, [])

  return (
    <div>
      <h1>FTM web proujekt</h1>
      <ol>{crut.map(hadcrut=>(
          <li key={hadcrut.Years}>{hadcrut.Years}{hadcrut.AnnualGlobalC}{hadcrut.AnnualNorthC}{hadcrut.AnnualSouthC}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
