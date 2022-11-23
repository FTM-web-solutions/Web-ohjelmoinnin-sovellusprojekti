import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v3'
const URL2 =  'http://localhost:3001/v4'

function V3() {
    const [maunaData, setmaunaData] = useState([])
    const [iceData, seticeData] = useState([])
    const [visible, setVisible] = useState();
    const [timetype, settimetype] = useState();

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
                hidden: visible,
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
                hidden: !visible,
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
                hidden: visible,
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
                hidden: visible,
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
                hidden: visible,
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
                    unit: timetype,
                },
                title: {
                    display: true,
                    text: "Years"
                }
            }
        },

    }

    var first_click = true;
    const ClickHandle = event => {
        if (first_click) {
            event.preventDefault()
            setVisible(true)
            first_click = false;
            settimetype("month");
        } else {
            event.preventDefault()
            setVisible(false)
            settimetype("year");
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
                <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>Description source</a><br />
                <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html'> V4 Description source</a><br />
                <a href='https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat'> V4 Datasets source</a>

            </div>
        </div>
    );
}

export default V3;
