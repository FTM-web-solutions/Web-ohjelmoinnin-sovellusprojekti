import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const URL = 'http://localhost:3001/'

function HadcrutLinechart() {
    const [crutData, setcrutData] = useState([])

  useEffect(() => {
    axios.get(URL)
    .then((response)=>{
      setcrutData(response.data)
      console.log(response.data)
    }).catch(error=>{
      alert(error.response.data.error)
    })
  }, [])

  const data = {
    labels: crutData.map(hadcrut=>hadcrut.Months),
    datasets: [
        {
            label: "Monthly Global Degrees",
            data: crutData.map(hadcrut=>hadcrut.MonthlyGlobalC),
            borderColor: "rgb(255, 0, 0)",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            yAxisID: "co2",
            parsing: {
                xAxisKey: "TimeYrBP",
                yAxisKey: "Co2ppm",
        },
        pointRadius: 1,
        },

        {
            label: "Monthly Northern Degreens",
            data: crutData.map(hadcrut=>hadcrut.MonthlyNorthC),
            borderColor: "rgb(0, 255, 0)",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            yAxisID: "co2",
            parsing: {
                xAxisKey: "TimeYrBP",
                yAxisKey: "Co2ppm",
        },
        pointRadius: 1,
        },

        {
            label: "Monthly Southern Degrees",
            data: crutData.map(hadcrut=>hadcrut.MonthlySouthC),
            borderColor: "rgb(0, 0, 255)",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
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
        text: "Demo Co2 plot",
      },
    },
    scales: {
      co2: {
        type: "linear",
        display: true,
        position: "right",
      },
    },
  };
    
  return (
    <div>
        <Line options={options} data={data}/>
    </div>
  )
}

export default HadcrutLinechart