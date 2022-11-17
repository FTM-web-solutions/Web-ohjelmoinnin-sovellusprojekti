import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/'
const URL2 = 'http://localhost:3001/v2'

function V1() {
  const [crutData, setcrutData] = useState([])
  const [nhemisphereData, setnhemisphereData] = useState([])

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

   /*const ShowVisual = () => {
    const handleClick = () => {
      nhdata()
    };
    return (
      <div>
        <button type="button" onClick={handleClick}>
          Show v2
        </button>
      </div>
    );
  };*/

  /*const nhdata = {
    labels: nhemisphereData.map(v2 => v2.Years),
    datasets: [
      {
        label: "Northern Hemisphere 2,000-year temperature reconstruction",
        data: nhemisphereData.map(v2 => v2.T),
        spanGaps: true,
        borderColor: "green",
        backgroundColor: "white",
        yAxisID: "C",
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },
    ],
  };*/

  const data = {
    labels: crutData.map(hadcrut => hadcrut.Months),
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
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
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
        type: "time",
        time: {
          unit: "month",
        },
      },
    },
  };

  return (
    <div className="V1" style={{ width: "65%" }} >
      <Line options={options} data={data} />
      <a href='https://www.metoffice.gov.uk/hadobs/hadcrut5/'>Datasets source</a><br />
      <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>V2 data measurement description</a><br />
    </div >
  );
}

export default V1