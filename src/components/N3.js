import React, { useState } from "react";
import V1 from "./V1"
import V3 from "./V3";

function N3() {
  const [v1state, setv1state] = useState(false)
  const [v1, setv1] = useState([])

  const [v3state, setv3state] = useState(false)
  const [v3, setv3] = useState([])

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
    
  return (
    <>
    <div>
          <h3 className="form-head-contact-h3 ">
            Your programming expertise lies in what languages?{" "}
          </h3>
          <input
          type="checkbox"
          id="v1"
          name="v1"
          value="v1"
          checked={v1state}
          onChange={v1handler}
          />
          V1
          <input
          type="checkbox"
          id="v3"
          name="v3"
          value="v3"
          checked={v3state}
          onChange={v3handler}
          />
          V3
          </div>
          <div>
            {v1}{v3}
          </div>
    </>
  );
}
  
export default N3;