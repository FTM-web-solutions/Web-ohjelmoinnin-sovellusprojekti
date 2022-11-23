import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v7'
const URL2 = 'http://localhost:3001/v6'

function V7() {

    const [co2_ppmv, setco2_ppmv] = useState([])
    const [mean_co2_ppmv, setmean_co2_ppmv] = useState([])
    const [v7, setv7] = useState([])

    useEffect(() => {
        try {
            axios.get(URL2)
                .then((response) => {

                    let co2_ppmv = response.data.map(v6 => v6.co2_ppmv);
                    setco2_ppmv(co2_ppmv);

                    let mean_co2_ppmv = response.data.map(v6 => v6.mean_co2_ppmv);
                    setmean_co2_ppmv(mean_co2_ppmv);
                });
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                setv7(response.data)
            }).catch(error => {
                alert(error.response.data.error)
            })
    }, [])

    return (
        <div>mankeli</div>
    )
}

export default V7