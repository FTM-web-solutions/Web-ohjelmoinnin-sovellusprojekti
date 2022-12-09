import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v3'
const URL2 = 'http://localhost:3001/v4'
const URL3 = 'http://localhost:3001/v10'

function V3() {
    const [maunaData, setmaunaData] = useState([])
    const [iceData, seticeData] = useState([])
    const [v410State, setv410State] = useState(true)
    const [v3State, setv3State] = useState(true)
    const [v10Data, setv10Data] = useState([])

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].year != null) {
                        response.data[i].year = response.data[i].year.toString();
                    }
                }
                setmaunaData(response.data)
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

    useEffect(() => {
        axios.get(URL3)
            .then((response) => {
                setv10Data(response.data)
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
                hidden: v410State,
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
                hidden: v410State,
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
                hidden: v410State,
                parsing: {
                    xAxisKey: 'yearDSS',
                    yAxisKey: 'Co2MixRatioDSS'
                },
            },

            {
                type: 'bubble',
                label: "History",
                data: v10Data.map((x) => {
                    return {
                        x: x.Year,
                        y: 10,
                        r: 10,
                        description: x.Event,
                    }
                }),
                borderColor: '#FF10F0',
                borderWidth: 2,
                hidden: v410State,
            }
        ]
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
        elements: {
            point: {
                radius: 0
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: function (context) {
                        var title = context[0].dataset.title;
                        if (context[0].dataset.type === "bubble") {
                            title = "Year: " + context[0].parsed.x;
                        }
                        else {
                            title = "Year: " + context[0].label;
                        }
                        return title;
                    },
                    label: function (context) {
                        var label = context.dataset.label;
                        if (context.dataset.type === "bubble") {
                            label = context.raw.description;
                        }
                        else {
                            label = label + ": " + context.formattedValue;
                        }
                        return label;
                    }
                },
            },
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
                /* min: 0,
                max: 800000, */
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

    var v410_click = true;
    const v410Handle = event => {
        if (v410_click) {
            event.preventDefault()
            setv410State(!v410State)
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
        <div className='V3V4text'>
            <h3>Atmospheric CO2 concentrations</h3>
            <p>A line graph of atmospheric carbon dioxide concentrations taken at Mauna Loa, Hawaii. Time period is about 65 years. <br />
                The second (V4) graph is about atmospheric carbon dioxide concentrations based on Antarctic ice cores.
                Time period is ~1000 years. The pink bubbles are about major human evolution and culture events.</p>
            <div className="V3">
                <div style={{ width: "100%", margin: "auto" }}>
                    <div>
                        <a href='https://gml.noaa.gov/ccgg/trends/data.html'>Dataset source</a>
                        <br /><a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>Description source</a><br />
                        <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html'> V4 Description source</a><br />
                        <a href='https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat'> V4 Datasets source</a><br /><br />
                        <form>
                            <button className="Buttons" onClick={v410Handle}>V4 & V10 ON/OFF</button>
                            <button className="Buttons" onClick={v3Handle}>Change View</button>
                        </form>
                    </div>
                    <Line options={options} data={data} />
                </div>
            </div>
        </div>
    );
}

export default V3;
