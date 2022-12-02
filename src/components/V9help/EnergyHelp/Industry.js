function Industry ({subSectorFurther, share3}) {
    let subSectorFurtherData = subSectorFurther.map((x, i) => {
        return {subSectorFurther: x, share3: share3[i]}
    })
    return (
        <>
        <h3>Energy in industry</h3>
        <ul>
            {subSectorFurtherData.slice(7,14).map((x, i) => {
                return <li key={i}>{x.subSectorFurther}: {x.share3}%</li>
            })}
        </ul>
        </>
    )
}

export default Industry

