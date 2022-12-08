import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Bubble, Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v7'
const URL2 = 'http://localhost:3001/v6'
const URL3 = 'http://localhost:3001/v10'

function V7() {

    const [co2_ppmv, setco2_ppmv] = useState([])
    const [v7, setv7] = useState([])
    const [age_gas, setage_gas] = useState([]);
    const [v10State, setv10State] = useState(true)
    const [v10Data, setv10Data] = useState([])

    useEffect(() => {
        try {
            axios.get(URL2)
                .then((response) => {
                    let co2_ppmvArray = response.data.map(v6 => v6.co2_ppmv);
                    setco2_ppmv(co2_ppmvArray);
                    let age_gasArray = response.data.map(v6 => v6.age_gas);
                    setage_gas(age_gasArray);
                });
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        try {
            axios.get(URL)
                .then((response) => {
                    let v7Array = response.data.map(v7 => v7.p50);
                    setv7(v7Array);
                });
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        try {
            axios.get(URL3)
                .then((response) => {
                    setv10Data(response.data)
                });
        } catch (error) {
            console.log(error)
        }
    }, [])

    const options = {
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Evolution of global temperature over the past two million years combined",
            },
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },

        elements: {
            point: {
                radius: 1
            }
        },

        scales: {
            y1: {
                position: 'right',
                min: -10,
                max: 15,
                title: {
                    display: true,
                    text: "Surface temperature change (C)",
                }
            },
            y2: {
                position: 'left',
                min: 100,
                max: 300,
                title: {
                    display: true,
                    text: "C02 ppm",
                }
            },
            x: {
                min: -500000,
                max: 1000000,
                type: "linear",
                title: {
                    display: true,
                    text: "Time",
                }
            },
        }
    };

    const data = {
        labels: age_gas,
        datasets: [
            {
                label: "Change in global temperature (C)",
                type: 'line',
                data: v7,
                showLine: true,
                borderColor: 'blue',
                backgroundColor: "white",
                parsing: {
                    yAxisID: 'y1',
                    xAxisID: 'x'
                }
            },

            {
                label: "C02 measurements from the 800k year period",
                type: 'line',
                data: co2_ppmv,
                showLine: true,
                borderColor: 'red',
                backgroundColor: "white",
                yAxisID: 'y2'
            },

            {
                label: "Human Evolution and Activities",
                type: 'bubble',
                data: v10Data,
                borderWidth: 10,
                radius: 10,
                borderColor: "green",
                backgroundColor: "lightgreen",
                showLine: false,
                hidden: v10State,
                parsing: {
                    yAxisID: 'Event',
                    xAxisID: 'Year'
                }
            },
        ]
    }

    var v10_click = true;
    const v10Handle = event => {
        if (v10_click) {
            event.preventDefault()
            setv10State(!v10State)
        }
    }

    return (
        <div className='V7text'>
            <h3>Evolution of global temperature over the past two million years</h3>
            <p>
                A multiaxis and combination line chart of the temperature record from the available 2m year period
                with the available co2 measurements from the previous (atmospheric carbon dioxide concentrations) 800k year period.
            </p>
            <div className='V7' style={{ width: "100%", margin: "auto" }}>
                <a href="http://carolynsnyder.com/publications.php">Dataset source</a><br />
                <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">Description source</a><br /><br />
                <form>
                    <button className="Buttons" onClick={v10Handle}>V10 ON/OFF</button>
                </form>
                <Line
                    options={options}
                    data={data}
                />
            </div>
        </div>
    )
}

export default V7