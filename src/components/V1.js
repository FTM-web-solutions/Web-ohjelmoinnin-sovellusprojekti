import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { Link } from 'react-router-dom';

const URL = 'http://localhost:3001/'
const URL2 = 'http://localhost:3001/v2'

function V1() {
  const [crutData, setcrutData] = useState([])
  const [nhemisphereData, setnhemisphereData] = useState([])
  const [visible, setVisible] = useState();

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setcrutData(response.data)
      }).catch(error => {
        alert(error.response.data.error)
      })
  }, [])

  useEffect(() => {
    axios.get(URL2)
      .then((response) => {
        setnhemisphereData(response.data)
      }).catch(error => {
        alert(error.response.data.error)
      })
  }, [])

  const data = {
    labels: crutData.map(crutData => crutData.Months),
    datasets: [
      {
        label: "Annual Global Degrees",
        data: crutData.map(hadcrut => hadcrut.AnnualGlobalC),
        spanGaps: true,
        borderColor: "black",
        backgroundColor: "white",
        yAxisID: "C",
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },

      {
        label: "Northern Hemisphere 2,000-year temperature reconstruction (V2)",
        data: nhemisphereData.map(v2 => v2.T),
        spanGaps: true,
        borderColor: "purple",
        backgroundColor: "white",
        yAxisID: "C",
        parsing: {
          xAxisKey: 'Year',
          yAxisKey: 'T'
        },
        pointRadius: 1,
        hidden: visible
      },

      {
        label: "Annual Northern Degrees",
        data: crutData.map(hadcrut => hadcrut.AnnualNorthC),
        spanGaps: true,
        borderColor: "blue",
        backgroundColor: "white",
        yAxisID: "C",
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },

      {
        label: "Annual Southern Degrees",
        data: crutData.map(hadcrut => hadcrut.AnnualSouthC),
        spanGaps: true,
        borderColor: "red",
        backgroundColor: "white",
        yAxisID: "C",
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Global Degrees",
        data: crutData.map(hadcrut => hadcrut.MonthlyGlobalC),
        borderColor: "black",
        backgroundColor: "white",
        yAxisID: "C",
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Northern Degreens",
        data: crutData.map(hadcrut => hadcrut.MonthlyNorthC),
        borderColor: "blue",
        backgroundColor: "white",
        yAxisID: "C",
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Southern Degrees",
        data: crutData.map(hadcrut => hadcrut.MonthlySouthC),
        borderColor: "red",
        backgroundColor: "white",
        yAxisID: "C",
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
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
      C: {
        type: "linear",
        min: -2.0,
        max: 2.0,
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Degrees (°C)"
        },
      },
      x: {
        type: 'time',
        time: {
          unit: 'year'
        },
      }
    },
  };
  
  var first_click = true;
  const ClickHandle = event => {
    if (first_click) {
      event.preventDefault()
      setVisible(true)
      first_click = false;
    } else {
      event.preventDefault()
      setVisible(false)
    }
  }

  return (
    <div className='V1'>
      <h3>Hadcrut temperature data</h3>
      <p>
        This chart is about global historical surface temperature anomalies from january 1850 onwards...
      </p>
      <div className="V1" style={{ width: "65%" }} >
        <Line options={options} data={data} />
        <form>
          <button style={{ background: 'lightblue' }} onClick={ClickHandle}>V2Toggle</button>
        </form>
        <a href='https://www.metoffice.gov.uk/hadobs/hadcrut5/'>Datasets source</a><br />
        <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>V2 data measurement description</a><br />
        <em>The official name for V2's data is "2,000-Year Northern Hemisphere Temperature". The graph shows reconstructed northern hemisphere temperatures for the past 2,000 years with purple color. Just like in V1 (other labels), it visualizes the temperature in relation to time.</em>
      </div>
    </div>
  );
}

export default V1