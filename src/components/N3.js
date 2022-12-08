import React from 'react'
import * as ReactDOM from 'react-dom/client'; 
import V1 from './V1'
import { Component } from 'react'
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
    const [userinfo, setUserInfo] = useState({
      Charts: [<V1 />],
      // response: [],
    });

    const handleChange = (e) => {
      // Destructuring
      const { value, checked } = e.target;
      const { Charts } = userinfo;
      
      console.log(`${value} is ${checked}`);
      
      // Case 1 : The user checks the box
      if (!checked) {
      setUserInfo({
        Charts: [...Charts, value],
        // response: [...Charts, value],
      });
      }
    
      // Case 2 : The user unchecks the box
      else {
      setUserInfo({
        Charts: Charts.filter((e) => e !== value),
        response: Charts.filter((e) => e !== value),
      });
      }
    };
    return (
    <>
	<div className="container-fluid top ">
		<div className="container mt-5 pb-5 pt-5">
		<h3 className="form-head-contact-h3 ">
			Your programming expertise lies in what languages?{" "}
		</h3>
		<form>
			 <div className="row">
			<div className="col-md-6">
				<div className="form-check m-3">
				</div>
				<div className="form-check m-3">
				<input
					className="form-check-input"
					type="checkbox"
					name="Charts"
					value="v1"
					id="flexCheckDefault"
					onChange={handleChange}
				/>
				<label
					className="form-check-label"
					htmlFor="flexCheckDefault"
				>
					 V1
				</label>
				</div>
			</div>
			</div>

			<div className="form-floating mt-3 mb-3 text-center">
			<label htmlFor="exampleFormControlTextarea1">
				{/* You're proficient in the following languages :{" "} */}
			</label>
      {userinfo.response}
			</div>
		</form>
		</div>
	</div>
	</>
);
    
}