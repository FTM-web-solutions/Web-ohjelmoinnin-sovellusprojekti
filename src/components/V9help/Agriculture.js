function Agriculture ({subSector, share2}) {
    
    let subSectorData = subSector.map((x, i) => {
        return {subSector: x, share2: share2[i]}
    })    

    return (
        <>
        <h3>Agriculture</h3>
        <ul>
            {subSectorData.slice(8,15).map((x, i) => {
                return <li key={i}>{x.subSector}: {x.share2}%</li>
            })}
        </ul>

        </>
        
    )
}

export default Agriculture