function Buildings ({subSectorFurther, share3}) {
    console.log(subSectorFurther,share3)
    let subSectorFurtherData = subSectorFurther.map((x, i) => {
        return {subSectorFurther: x, share3: share3[i]}
    })
    return (
        <>
        <h3>Energy in buildings</h3>
        <ul>
            {subSectorFurtherData.slice(5,7).map((x, i) => {
                return <li key={i}>{x.subSectorFurther}: {x.share3}%</li>
            })}
        </ul>
        </>
    )
}

export default Buildings