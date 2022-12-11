import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v5'

function V5() {

  const [Age, setAge] = useState([])
  const [Co2, setCo2] = useState([])

  useEffect(() => {
    try {
      axios.get(URL)
        .then((response) => {
          let ageArray = response.data.map(v5 => v5.age_of_ice);
          setAge(ageArray);

          let co2Array = response.data.map(v5 => v5.co2_ppmv);
          setCo2(co2Array);
        });
    } catch (error) {
      console.log(error)
    }
  }, [])


  const data = {
    labels: Age,
    datasets: [
      {
        label: "CO2 concentration",
        data: Co2,
        borderColor: "red",
        backgroundColor: "white",
        yAxisID: "y",
        parsing: {
          xAxisKey: "TimeYrBP",
          yAxisKey: "Co2ppm",
        },
      },
    ],
  };
  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 1
      }
    },
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
      y: {
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
        reverse: true,
        type: "linear",
        min: 0,
        max: 200000,
        title: {
          display: true,
          text: "Years Before Present",
        },
      },
    },
  };

  return (
    <div className='V5text'>
      <h3>Vostok ice core CO2 measurements</h3>
      <p>A line graph of atmospheric carbon dioxide concentrations based on ice drilling conducted at Vostok station in the Soviet Antarctic.
        Time period ~400000 years...</p>
      <a href='https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2'>Dataset source</a><br />
      <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html'>Description source</a>
      <div className='V5' style={{ width: "100%", margin: "auto" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  )
}

export default V5