import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { Link } from 'react-router-dom';

const URL = 'http://localhost:3001/'
const URL2 = 'http://localhost:3001/v2'

function V1() {
  const [v1State, setv1State] = useState(true)
  const [v2State, setv2State] = useState(true)

  const [v1Months, setv1Months] = useState([])
  const [v2Years, setv2Years] = useState([])

  const [aGlobalC, setaGlobalC] = useState([])
  const [aNorthC, setaNorthC] = useState([])
  const [aSouthC, setaSouthC] = useState([])

  const [mGlobalC, setmGlobalC] = useState([])
  const [mNorthC, setmNorthC] = useState([])
  const [mSouthC, setmSouthC] = useState([])

  const [T, setT] = useState([])

  useEffect(() => {
    try {
      axios.get(URL)
        .then((response) => {

          let v1MonthsArray = response.data.map(hadcrut => hadcrut.Months);
          setv1Months(v1MonthsArray);

          let aGlobalCArray = response.data.map(hadcrut => hadcrut.AnnualGlobalC);
          setaGlobalC(aGlobalCArray);

          let aNorthCArray = response.data.map(hadcrut => hadcrut.AnnualNorthC);
          setaNorthC(aNorthCArray);

          let aSouthCArray = response.data.map(hadcrut => hadcrut.AnnualSouthC);
          setaSouthC(aSouthCArray);

          let mGlobalCArray = response.data.map(hadcrut => hadcrut.MonthlyGlobalC);
          setmGlobalC(mGlobalCArray);

          let mNorthCArray = response.data.map(hadcrut => hadcrut.MonthlyNorthC);
          setmNorthC(mNorthCArray);

          let mSouthCArray = response.data.map(hadcrut => hadcrut.MonthlySouthC);
          setmSouthC(mSouthCArray);

        });
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    try {
      axios.get(URL2)
        .then((response) => {

          let v2YearsArray = response.data.map(v2 => v2.Year);
          setv2Years(v2YearsArray);

          let TArray = response.data.map(v2 => v2.T);
          setT(TArray);

        });
    } catch (error) {
      console.log(error)
    }
  }, [])

  const data = {
    labels: v1Months,
    datasets: [
      {
        label: "Annual Global Degrees",
        data: aGlobalC,
        spanGaps: true,
        borderColor: "black",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: v1State,
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },

      {
        label: "Northern Hemisphere 2,000-year temperature reconstruction (V2)",
        data: T,
        spanGaps: true,
        borderColor: "purple",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: v2State,
        parsing: {
          xAxisKey: 'Year',
          yAxisKey: 'T'
        },
        pointRadius: 1,
      },

      {
        label: "Annual Northern Degrees",
        data: aNorthC,
        spanGaps: true,
        borderColor: "blue",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: v1State,
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },

      {
        label: "Annual Southern Degrees",
        data: aSouthC,
        spanGaps: true,
        borderColor: "red",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: v1State,
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Global Degrees",
        data: mGlobalC,
        borderColor: "black",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: !v1State,
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Northern Degreens",
        data: mNorthC,
        borderColor: "blue",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: !v1State,
        parsing: {
          xAxisKey: "Months",
          yAxisKey: "Celsius",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Southern Degrees",
        data: mSouthC,
        borderColor: "red",
        backgroundColor: "white",
        yAxisID: "C",
        hidden: !v1State,
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
          unit: "month"
        }
      },
    },
  };

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
        This chart is about global historical surface temperature anomalies from january 1850 onwards...<br />
        The official name for V2's data is "2,000-Year Northern Hemisphere Temperature". The graph shows reconstructed northern hemisphere temperatures for the past 2,000 years with purple color.<br />
        Just like in V1 (other labels), it visualizes the temperature in relation to time.
      </p>
      <div className="V1" style={{ width: "60%" }} >
        <a href='https://www.metoffice.gov.uk/hadobs/hadcrut5/'>Datasets source</a><br />
        <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>V2 data measurement description</a>
        <Line options={options} data={data} />
        <form>
          <button className="Buttons" onClick={v1Handle}>Change view</button>
          <button className="Buttons" onClick={v2Handle}>V2Toggle</button>
        </form>
      </div>
    </div>
  );
}

export default V1