import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart, TimeScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { Link } from 'react-router-dom';

const URL = 'http://localhost:3001/'
const URL2 = 'http://localhost:3001/v2'

function V1() {
  const [v1State, setv1State] = useState(true)
  const [v2State, setv2State] = useState(true)

  const [V1Data, setV1Data] = useState([])
  const [V2Data, setV2Data] = useState([])

  useEffect(() => {
      axios.get(URL)
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].Years != null) {
              response.data[i].Years = response.data[i].Years.toString();
            }
          }
          setV1Data(response.data)
        }).catch (error => {
      alert(error.response.data.error)
    })
  }, [])

  useEffect(() => {
    axios.get(URL2)
            .then((response) => {
              for(let i = 0; i < response.data.length; i++) {
                response.data[i].Year = response.data[i].Year.toString();
                response.data[i].T = response.data[i].T.toString();

                if (response.data[i].Year.length < 2) {
                  response.data[i].Year = "000" + response.data[i].Year;
                }

                if (response.data[i].Year.length < 3) {
                  response.data[i].Year = "00" + response.data[i].Year;
                }

                if (response.data[i].Year.length < 4) {
                  response.data[i].Year = "0" + response.data[i].Year;
                }
              }
                setV2Data(response.data)
            }).catch(error => {
                alert(error.response.data.error)
            })
    }, [])

  const data = {
    datasets: [
      {
        label: "Northern Hemisphere 2,000-year temperature reconstruction (V2)",
        data: V2Data,
        spanGaps: true,
        borderColor: "purple",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: v2State,
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "T"
        },
        pointRadius: 0,
      },

      {
        label: "Annual Global Degrees",
        data: V1Data,
        spanGaps: true,
        borderColor: "black",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: v1State,
        parsing: {
          xAxisKey: "Years",
          yAxisKey: "AnnualGlobalC",
        },
        pointRadius: 0,
      },

      {
        label: "Annual Northern Degrees",
        data: V1Data,
        spanGaps: true,
        borderColor: "blue",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: v1State,
        parsing: {
          xAxisKey: "Years",
          yAxisKey: "AnnualNorthC",
        },
        pointRadius: 0,
      },

      {
        label: "Annual Southern Degrees",
        data: V1Data,
        spanGaps: true,
        borderColor: "red",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: v1State,
        parsing: {
          xAxisKey: "Years",
          yAxisKey: "AnnualSouthC",
        },
        pointRadius: 0,
      },

      {
        label: "Monthly Global Degrees",
        data: V1Data,
        borderColor: "black",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: !v1State,
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "MonthlyGlobalC",
        },
        pointRadius: 0,
      },

      {
        label: "Monthly Northern Degreens",
        data: V1Data,
        borderColor: "blue",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: !v1State,
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "MonthlyNorthC",
        },
        pointRadius: 0,
      },

      {
        label: "Monthly Southern Degrees",
        data: V1Data,
        borderColor: "red",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: !v1State,
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "MonthlySouthC",
        },
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
  },
  tooltips: {
      mode: "index",
      intersect: false,
  },
  hover: {
      mode: "nearest",
      intersect: true,
  },
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
          unit: "month",
      },
      title: {
          display: true,
          text: "Time (monthly)"
      }
  },
    },
  }

  var v2_click = true;
  const v2Handle = event => {
    if (v2_click) {
      event.preventDefault()
      setv2State(!v2State)
    }
  }

  var v1_click = true;
  const v1Handle = event => {
    if (v1_click) {
      event.preventDefault()
      setv1State(!v1State)
    }
  }

  return (
    <div className='V1V2text'>
      <h3>Hadcrut temperature data</h3>
      <p>
        The main line chart is about global historical surface temperature anomalies from January 1850 onwards.<br />
        The second (v2) graph shows reconstructed northern hemisphere temperatures for the past 2,000 years with purple color.<br />
        Just like before, it visualizes the temperature in relation to time.
      </p>
      <div className="V1" style={{ width: "100%", margin: "auto" }} >
        <a href='https://www.metoffice.gov.uk/hadobs/hadcrut5/'>Datasets source</a><br />
        <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>V2 data measurement description</a>
        <Line options={options} data={data} />
        <form>
          <button className="Buttons" onClick={v2Handle}>V2 ON/OFF</button>
          <button className="Buttons" onClick={v1Handle}>Change View</button>
        </form>
      </div>
    </div>
  );
}

export default V1