import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v3'
const URL2 = 'http://localhost:3001/v4'
const URL3 = 'http://localhost:3001/v10'

function V3() {
    const [maunaData, setmaunaData] = useState([])
    const [iceData, seticeData] = useState([])
    const [v4State, setv4State] = useState(true)
    const [v3State, setv3State] = useState(true)
    const [v10State, setv10State] = useState(true)
    const [v10Data, setv10Data] = useState([])
    const [timetype, settimetype] = useState("time")

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
                    xAxisKey: 'year',
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

            {
                type: 'bubble',
                label: "History",
                data: v10Data.map((x) => {
                    return {
                        x: x.Year,
                        y: 350,
                        r: 18,
                        description: x.Event,
                    }
                }),
                borderColor: '#F89880',
                borderWidth: 3,
                hidden: v10State
            }
        ]
    };

    const options = {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
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
                display: v10State,
                reverse: !v10State,
                type: timetype,
                time: {
                    unit: "month",
                },
                title: {
                    display: true,
                    text: "Time (monthly)",
                },
            },
            x2: {
                display: !v10State,
                reverse: true,
                min: 0,
                max: 700000,
                type: 'linear',
                title: {
                    display: true,
                    text: "Years Before Present"
                }
            },
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

    var v10_click = true;
    const v10Handle = event => {
        if (v10_click) {
            settimetype("linear")
            event.preventDefault()
            setv10State(!v10State)
            v10_click = false
        }
        if (!v10State) {
            settimetype("time")
        }
    }

    return (
        <div className='visualization'>
            <br></br><h3>Atmospheric CO2 concentrations</h3>
            <p>A line graph of atmospheric carbon dioxide concentrations taken at Mauna Loa, Hawaii. Time period is about 65 years. <br />
                The second (V4) graph is about atmospheric carbon dioxide concentrations based on Antarctic ice cores.
                Time period is ~1000 years. The pink (V10) bubbles are about major human evolution and culture events.</p>
            <div className="chart">
                <div style={{ width: "100%", margin: "auto" }}>
                    <Line options={options} data={data} />
                        <form>
                            <button className="btn btn-primary btn-gap" onClick={v4Handle}>V4 ON/OFF</button>
                            <button className="btn btn-primary btn-gap" onClick={v3Handle}>Change View</button>
                            <button className="btn btn-primary btn-gap" onClick={v10Handle}>V10 ON/OFF</button>
                        </form>
                        <div>
                        <a className='register-link' href='https://gml.noaa.gov/ccgg/trends/data.html'>Dataset source</a><br />
                        <a className='register-link' href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>Description source</a><br />
                        <a className='register-link' href='https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html'> V4 Description source</a><br />
                        <a className='register-link' href='https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat'> V4 Datasets source</a><br /><br />
                    </div>
                </div>
            </div><br></br><br></br>
        </div>
    );
}

export default V3;
