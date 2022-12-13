import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = process.env.REACT_APP_API_ADDRESS+"/v6"

function V6() {

  const [iceCore, seticeCore] = useState([])

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        seticeCore(response.data)
      }).catch(error => {
        alert(error.response.data.error)
      })
  }, [])

  const data = {
    labels: iceCore.map(v6 => v6.age_gas),
    datasets: [
      {
        label: "CO2 concentration",
        data: iceCore.map(v6 => v6.co2_ppmv),
        borderColor: "red",
        backgroundColor: "white",
        yAxisID: "co2",
        parsing: {
          xAxisKey: "TimeYrBP",
          yAxisKey: "Co2ppm",
        },
        pointRadius: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Ice core 800k year composite study CO2 measurements",
      },
    },
    scales: {
      co2: {
        type: "linear",
        position: "right",
        min: 150,
        max: 400,
        title: {
          display: true,
          text: "CO2 concentration",
        },
      },
      x: {
        reverse: true,
        type: "linear",
        min: -2000,
        max: 810000,
        title: {
          display: true,
          text: "Years Before Present",
        },
      },
    },
  };

  return (
    <div className='visualization'>
      <h3>Ice core composite study CO2 measurement</h3>
      <p>
        A line graph of atmospheric carbon dioxide concentrations based on a combined study of ice cores in the southern hemisphere.
        Time period ~800000 years.
      </p>
      <div className="chart">
      <div style={{ width: "100%", margin: "auto" }}>
        <Line options={options} data={data} />
        <a className='register-link' href='https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt'>Dataset source</a><br />
        <a className='register-link' href='https://www.ncei.noaa.gov/access/paleo-search/study/17975'>Description source</a>
      </div><br></br>
    </div><br></br><br></br>
    </div>
  )
}

export default V6