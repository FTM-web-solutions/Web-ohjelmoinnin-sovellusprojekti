import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v8'

function V8() {
    const [V8Data, setV8Data] = useState([]);
    const [V8Years, setV8Years] = useState([]);

    useEffect(() => {
        try {
            axios.get(URL)
                .then((response) => {
                    //let V8DataArray = response.data.map(v8 => v8.Democratic_Republic_of_the_Congo);
                    //setV8Data(V8DataArray);
                    setV8Data(response.data);
                    let TempYears = response.data.map(v8 => v8.Year);
                    setV8Years(TempYears);
                });
        } catch (error) {
            console.log(error)
        }
    }, [])

    /*useEffect(() => {
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
                console.log("veeeeeee kasi", response.data);
            }).catch(error => {
                alert(error.response.data.error)
            })
    }, [])*/

    /*const data = {
        labels: V8Years,
        datasets: [
            {
                label: "V8 CO2 emissions by country",
                data: V8Data,
                showLine: true,
                spanGaps: true,
                borderColor: 'black',
                backgroundColor: "white",
                parsing: {
                    xAxisKey: 'year',
                    yAxisKey: 'y'
                },
            },
        ]
    }*/

    const options = {
        animation: false,
        borderColor: 'darkred',
        spanGaps: true,
        showLine: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        elements: {
            point: {
                radius: 0
            }
        },
        responsive: true,
        scales: {
            y: {
                stacked: true,
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
                text: "V8 C02 emissions by country",
            },
        }
    };

    return (
        <div className='V8' style={{ width: "60%" }}>
            <Line
                options={options}
                data={{
                    labels: V8Years,
                    datasets: V8Data,
                }}
            />
        </div>
    )
}

export default V8;