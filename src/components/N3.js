import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import V1 from "./V1"
import V3 from "./V3"
import V5 from "./V5"
import V6 from './V6'
import V7 from './V7'
import V8 from './V8'
import V9 from './V9'

function N3() {
  const [v1state, setv1state] = useState(false)
  const [v1, setv1] = useState([])

  const [v3state, setv3state] = useState(false)
  const [v3, setv3] = useState([])

  const [v5state, setv5state] = useState(false)
  const [v5, setv5] = useState([])

  const [v6state, setv6state] = useState(false)
  const [v6, setv6] = useState([])

  const [v7state, setv7state] = useState(false)
  const [v7, setv7] = useState([])

  const [v8state, setv8state] = useState(false)
  const [v8, setv8] = useState([])

  const [v9state, setv9state] = useState(false)
  const [v9, setv9] = useState([])

  const navigate = useNavigate();

  const clear = (e) => {
	e.preventDefault();
  localStorage.removeItem("testiä", true)
	navigate(0)
  }

  const v1handler = () => {
    setv1state(!v1state)
    setv1([<V1/>])
    if(v1state == true) {
      setv1([])
    }
  }

  const v3handler = () => {
    setv3state(!v3state)
    setv3([<V3/>])
    if(v3state == true) {
      setv3([])
    }
  }

  const v5handler = () => {
    setv5state(!v5state)
    setv5([<V5/>])
    if(v5state == true) {
      setv5([])
    }
  }

  const v6handler = () => {
    setv6state(!v6state)
    setv6([<V6/>])
    if(v6state == true) {
      setv6([])
    }
  }

  const v7handler = () => {
    setv7state(!v7state)
    setv7([<V7/>])
    if(v7state == true) {
      setv7([])
    }
  }

  const v8handler = () => {
    setv8state(!v8state)
    setv8([<V8/>])
    if(v8state == true) {
      setv8([])
    }
  }

  const v9handler = () => {
    setv9state(!v9state)
    setv9([<V9/>])
    if(v9state == true) {
      setv9([])
    }
  }
    
  return (
    <>
      <div>
        <h1 className="form-head-contact-h3 ">
          Customise your own visualization!
        </h1>
        <p>Here you can select your preferred choices from every visualization</p>
        <ul className="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Visualizations</a>
            <ul class="dropdown-menu">
              <li><input type="checkbox" id="v1" name="v1" value="v1" checked={v1state} onChange={v1handler} />Hadcrut temp data</li>
              <li><input type="checkbox" id="v3" name="v3" value="v3" checked={v3state} onChange={v3handler} />Atmospheric Co2 data</li>
              <li><input type="checkbox" id="v5" name="v5" value="v5" checked={v5state} onChange={v5handler} />Vostok Co2 data</li>
              <li><input type="checkbox" id="v6" name="v6" value="v6" checked={v6state} onChange={v6handler} />Ice core composite data</li>
              <li><input type="checkbox" id="v7" name="v7" value="v7" checked={v7state} onChange={v7handler} />Global temp data</li>
              <li><input type="checkbox" id="v8" name="v8" value="v8" checked={v8state} onChange={v8handler} />Co2 emission by country</li>
              <li><input type="checkbox" id="v9" name="v9" value="v9" checked={v9state} onChange={v9handler} />Co2 emission by sector</li>
			  <button onClick={clear}>Clear</button>
			  {/* <button onClick={save}>Save</button> */}
            </ul>
          </li>
        </ul>
      </div>
      <div>
        {v1}{v3}{v5}{v6}{v7}{v8}{v9}
      </div>
    </>
  );
}
  
export default N3;