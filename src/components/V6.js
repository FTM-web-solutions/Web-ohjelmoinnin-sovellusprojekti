import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v6'

function V6() {

    const [iceCore, seticeCore] = useState([])

    useEffect(() => {
      axios.get(URL)
      .then((response)=>{
        seticeCore(response.data)
      }).catch(error=>{
        alert(error.response.data.error)
      })
    }, [])
    
    const data = {
      labels: iceCore.map(v6=>v6.age_gas),
      datasets: [
        {
          label: "CO2 concentration",
          data: iceCore.map(v6=>v6.co2_ppmv),
          borderColor: "blue",
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
      reponsive: true,
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
        //   min: 180,
        //   max: 300,
          title: {
            display: true,
            text: "CO2 concentration",
          },
        },
        x: {
            // reverse: true,
          title: {
            display: true,
            text: "Years",
          },
        },
      },
    };

  return (
    <div className='v6' style={{ width: "65%"}}>
        <Line options={options} data={data} />
        <a href='https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt'>Dataset source</a><br/>
        <a href='https://www.ncei.noaa.gov/access/paleo-search/study/17975'>Description source</a>
    </div>
  )
}

export default V6