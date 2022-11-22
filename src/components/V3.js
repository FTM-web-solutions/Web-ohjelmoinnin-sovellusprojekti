import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v3'

function V3() {
    const [maunaData, setmaunaData] = useState([])
    const [visible, setVisible] = useState();

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                console.log(response.data)
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].year != null) {
                        response.data[i].year = response.data[i].year.toString();
                    }

                }
                setmaunaData(response.data)
                console.log(response.data);
            }).catch(error => {
                alert(error.response.data.error)
            })
    }, [])

    const data = {
        datasets: [
            {
                label: "CO2 annual mean data",
                data: maunaData,
                spanGaps: true,
                borderColor: "blue",
                hidden: visible,
                parsing: {
                    xAxisKey: 'year',
                    yAxisKey: 'mean'
                },
            },

            {
                label: "CO2 monthly mean data",
                data: maunaData,
                spanGaps: true,
                borderColor: "red",
                hidden: !visible,
                parsing: {
                    xAxisKey: 'month',
                    yAxisKey: 'average'
                },
            }
        ]
    };

    const options = {

        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958",
            },
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'year'
                },
            }
        },

    }

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
        <div className="V3">
            <div style={{ width: "75%" }}>
                <form>
                    <button className="Buttons" onClick={ClickHandle}>Change View</button>
                </form>
                <Line options={options} data={data} />
                <a href='https://gml.noaa.gov/ccgg/trends/data.html'>Dataset source</a><br />
                <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>Description source</a>
            </div>
        </div>
    );
}

export default V3;
