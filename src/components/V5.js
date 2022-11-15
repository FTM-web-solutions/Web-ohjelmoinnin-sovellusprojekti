import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v5'

function V5() {

    const [vostokData, setvostokData] = useState([])

    useEffect(() => {
      axios.get(URL)
      .then((response)=>{
        setvostokData(response.data)
      }).catch(error=>{
        alert(error.response.data.error)
      })
    }, [])
    
    const data = {
      labels: vostokData.map(v5=>v5.age_of_ice),
      datasets: [
        {
          label: "CO2 concentration",
          data: vostokData.map(v5=>v5.co2_ppmv),
          borderColor: "blue",
          yAxisID: "co2",
          parsing: {
            xAxisKey: "TimeYrBP",
            yAxisKey: "Co2ppm",
          },
        },
      ],
    };
    const options = {
      reponsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Historical CO2 Record from the Vostok Ice Core, 417160 - 2342 years BP",
        },
      },
      scales: {
        co2: {
          type: "linear",
          position: "right",
          min: 180,
          max: 300,
          title: {
            display: true,
            text: "CO2 concentration"
          },
        },
        x: {
          title: {
            display: true,
            text: "Years"
          },
        },
      },
    };

  return (
    <div className='V5' style={{ width: "65%"}}>
        <Line options={options} data={data} />
        <a href='https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2'>Dataset source</a><br/>
        <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html'>Description source</a>
    </div>
  )
}

export default V5