import React from 'react'

export default function V2desc() {
    const styleObj = {
        fontSize: 26,
        color: "#black",
        textAlign: "center",
        paddingTop: "100px",
    }
    return (
        <em style={styleObj}>The official name for V2's data is "2,000-Year Northern Hemisphere Temperature". The graph shows reconstructed northern hemisphere temperatures for the past 2,000 years with purple color. Just like in V1 (other labels), it visualizes the temperature in relation to time.</em>
    )
}