import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v8'

function V8() {
    const [V8Data, setV8Data] = useState([]);
    const [V8Years, setV8Years] = useState([]);

    /*useEffect(() => {
        try {
            axios.get(URL)
                .then((response) => {
                    //let V8DataArray = response.data.map(v8 => v8.Finland);
                    //setV8Data(V8DataArray);
                    setV8Data(response.data);
                    let TempYears = response.data.map(v8 => v8.Year);
                    setV8Years(TempYears);
                });
        } catch (error) {
            console.log(error)
        }
    }, [])*/

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                console.log(response.data)
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].Year != null) {
                        response.data[i].Year = response.data[i].Year.toString();
                    }
                }
                let TempYears = response.data.map(v8 => v8.Year);
                setV8Years(TempYears);
                setV8Data(response.data);
                console.log("veee kasi", response.data);
            }).catch(error => {
                alert(error.response.data.error)
            })
    }, [])

    /*const data = {
        labels: V8Years,
        datasets: [
            {
                label: "C02 emissions by country",
                data: V8Data,
                yAxisKey: 'y'
            },
        ]
    }*/

    const options = {
        spanGaps: true,
        showLine: true,
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },

        elements: {
            point: {
                radius: 0
            }
        },

        scales: {
            yAxisKey: {
                position: 'left',
                stacked: true,
                min: 0,
                max: 40000,
                title: {
                    display: true,
                    text: "MtC02yr",
                }
            },
        },

        layout: {
            padding: 20
        },
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "C02 emissions by country",
            },
        }
    };

    return (
        <div className='V8text'>
            <h3>C02 emissions by country</h3>
            <p>
                ...
            </p>
            <div className='V8' style={{ width: "60%" }}>
                <a href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021">Description source<br /></a>
                <a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Dataset source</a>
                <Line
                    options={options}
                    data={{
                        labels: V8Years,
                        datasets: V8Data
                    }}
                />
            </div>
        </div>
    )
}

export default V8;