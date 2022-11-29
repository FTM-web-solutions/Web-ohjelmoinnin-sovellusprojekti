import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v3'
const URL2 = 'http://localhost:3001/v4'

function V3() {
    const [maunaData, setmaunaData] = useState([])
    const [iceData, seticeData] = useState([])
    const [v4State, setv4State] = useState(true)
    const [v3State, setv3State] = useState(true)

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
                console.log("veeeeeee kolmonen", response.data);
            }).catch(error => {
                alert(error.response.data.error)
            })
    }, [])

    useEffect(() => {
        axios.get(URL2)
            .then((response) => {
                seticeData(response.data)
            }).catch(error => {
                alert(error.response.data.error)
            })
    }, [])


    const data = {
        datasets: [
            {
                label: "Annual mean data",
                data: maunaData,
                spanGaps: true,
                borderColor: "blue",
                hidden: !v3State,
                parsing: {
                    xAxisKey: 'year',
                    yAxisKey: 'mean'
                },
            },

            {
                label: "Monthly mean data",
                data: maunaData,
                spanGaps: true,
                borderColor: "red",
                hidden: v3State,
                parsing: {
                    xAxisKey: 'month',
                    yAxisKey: 'average'
                },
            },

            {
                label: "DE08",
                data: iceData,
                spanGaps: true,
                borderColor: "green",
                hidden: v4State,
                parsing: {
                    xAxisKey: 'yearDE08',
                    yAxisKey: 'Co2MixRatioDE08'
                },
            },

            {
                label: "DE082",
                data: iceData,
                spanGaps: true,
                borderColor: "yellow",
                hidden: v4State,
                parsing: {
                    xAxisKey: 'yearDE082',
                    yAxisKey: 'Co2MixRatioDE082'
                },
            },

            {
                label: "DSS",
                data: iceData,
                spanGaps: true,
                borderColor: "purple",
                hidden: v4State,
                parsing: {
                    xAxisKey: 'yearDSS',
                    yAxisKey: 'Co2MixRatioDSS'
                },
            },
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
                text: "Atmospheric CO2 concentrations from Mauna Loa measurements",
            },
        },
        scales: {
            C: {
                type: "linear",
                display: true,
                position: "right",
                title: {
                    display: true,
                    text: "Mean data"
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
            }
        },
    }

    var v4_click = true;
    const v4Handle = event => {
        if (v4_click) {
            event.preventDefault()
            setv4State(!v4State)
        }
    }

    var v3_click = true;
    const v3Handle = event => {
        if (v3_click) {
            event.preventDefault()
            setv3State(!v3State)
        }
    }

    return (
        <div className='V3text'>
            <h3>Atmospheric CO2 concentrations</h3>
            <p>A line graph of atmospheric carbon dioxide concentrations taken at Mauna Loa, Hawaii. Time period is about 65 years.</p>
            <div className="V3">
                <div style={{ width: "60%" }}>
                    <div>
                        <a href='https://gml.noaa.gov/ccgg/trends/data.html'>Dataset source</a>
                        <br /><a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>Description source</a><br />
                        <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html'> V4 Description source</a><br />
                        <a href='https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat'> V4 Datasets source</a><br /><br />
                        <form>
                            <button className="Buttons" onClick={v4Handle}>Show V4</button>
                            <button className="Buttons" onClick={v3Handle}>Change view</button>
                        </form>
                    </div>
                    <Line options={options} data={data} />
                </div>
            </div>
        </div>
    );
}

export default V3;
