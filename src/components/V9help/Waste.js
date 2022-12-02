function Waste ({subSector, share2}) {
        
    let subSectorData = subSector.map((x, i) => {
        return {subSector: x, share2: share2[i]}
    })    

    return (
        <>
        <h3>Waste</h3>
        <ul>
            {subSectorData.slice(15,17).map((x, i) => {
                return <li key={i}>{x.subSector}: {x.share2}%</li>
            })}
        </ul>

        </>
        
    )
}

export default Waste