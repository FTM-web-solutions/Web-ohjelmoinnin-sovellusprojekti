function Industrial ({subSector, share2}) {
    
    let subSectorData = subSector.map((x, i) => {
        return {subSector: x, share2: share2[i]}
    })    

    return (
        <>
        <h3>Industrial Processes</h3>
        <ul>
            {subSectorData.slice(6,8).map((x, i) => {
                return <li key={i}>{x.subSector}: {x.share2}%</li>
            })}
        </ul>

        </>
        
    )
}

export default Industrial
