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
            borderColor: "black",
            backgroundColor: "white",
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
            borderColor: "blue",
            backgroundColor: "white",
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
            borderColor: "red",
            backgroundColor: "white",
            yAxisID: "co2",
            parsing: {
                xAxisKey: "TimeYrBP",
                yAxisKey: "Co2ppm",
        },
        pointRadius: 1,
        },
        {
          label: "Annual Global Degrees",
          data: crutData.map(hadcrut=>hadcrut.AnnualGlobalC),
          borderColor: "black",
          backgroundColor: "white",
          yAxisID: "co2",
          parsing: {
              xAxisKey: "TimeYrBP",
              yAxisKey: "Co2ppm",
      },
      pointRadius: 1,
      },

      {
          label: "Annual Northern Degreens",
          data: crutData.map(hadcrut=>hadcrut.AnnualNorthC),
          borderColor: "blue",
          backgroundColor: "white",
          yAxisID: "co2",
          parsing: {
              xAxisKey: "TimeYrBP",
              yAxisKey: "Co2ppm",
      },
      pointRadius: 1,
      },

      {
          label: "Annual Southern Degrees",
          data: crutData.map(hadcrut=>hadcrut.AnnualSouthC),
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
        text: "Temperature Anomalies From 1850",
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
    <div className="App">
      <div style={{ width: "1500px" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default HadcrutLinechart