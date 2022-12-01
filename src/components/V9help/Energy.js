import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import AgriFish from './EnergyHelp/AgriFish';
import Buildings from './EnergyHelp/Buildings';
import Industry from './EnergyHelp/Industry';
import Fugitive from './EnergyHelp/Fugitive';
import Transport from './EnergyHelp/Transport';
import FuelCombustion from './EnergyHelp/FuelCombustion';

function Energy ({subSector, share2, subSectorFurther, share3}) {
    console.log(subSectorFurther,share3)

    const [openAgriFish, setopenAgriFish] = useState(false);
    const [openBuildings, setOpenBuildings] = useState(false);
    const [openIndustry, setOpenIndustry] = useState(false);
    const [openFugitive, setOpenFugitive] = useState(false);
    const [openTransport, setOpenTransport] = useState(false);
    const [openFuelCombustion, setOpenFuelCombustion] = useState(false);

    let subSectorData = subSector.map((x, i) => {
        return {subSector: x, share2: share2[i]}
    })

    const closeModal = () => {
        setopenAgriFish(false);
        setOpenBuildings(false);
        setOpenIndustry(false);
        setOpenFugitive(false);
        setOpenTransport(false);
        setOpenFuelCombustion(false);
    }

    const handleAgriFish = () => {
        setopenAgriFish(true);

    }
    const handleBuildings = () => {
        setOpenBuildings(true);
    }

    const handleIndustry = () => {
        setOpenIndustry(true);
    }

    const handleFugitive = () => {
        setOpenFugitive(true);
    }

    const handleTransport = () => {
        setOpenTransport(true);
    }

    const handleFuelCombustion = () => {
        setOpenFuelCombustion(true);
    }

    return(
        <>
        <h3>Energy</h3>
        <ul>
            {subSectorData.slice(0,6).map((x, i) => {
                return <li key={i}>{x.subSector}: {x.share2}%</li>
            })}
        </ul>

        <Popup open={openAgriFish} closeOnDocumentClick onClose={closeModal}>
            <AgriFish subSectorFurther={subSectorFurther} share3={share3} />
        </Popup>

        <Popup open={openBuildings} closeOnDocumentClick onClose={closeModal}>
            <Buildings subSectorFurther={subSectorFurther} share3={share3} />
        </Popup>

        <Popup open={openIndustry} closeOnDocumentClick onClose={closeModal}>
            <Industry subSectorFurther={subSectorFurther} share3={share3} />
        </Popup>

        <Popup open={openFugitive} closeOnDocumentClick onClose={closeModal}>
            <Fugitive subSectorFurther={subSectorFurther} share3={share3} />
        </Popup>

        <Popup open={openTransport} closeOnDocumentClick onClose={closeModal}>
            <Transport subSectorFurther={subSectorFurther} share3={share3} />
        </Popup>

        <Popup open={openFuelCombustion} closeOnDocumentClick onClose={closeModal}>
            <FuelCombustion subSectorFurther={subSectorFurther} share3={share3} />
        </Popup>

        <button onClick={handleAgriFish}>Energy in Agri & Fishing</button>
        <button onClick={handleBuildings}>Energy in buildings</button>
        <button onClick={handleIndustry}>Energy in industry</button>
        <button onClick={handleFugitive}>Fugitive emissions in Energy</button>
        <button onClick={handleTransport}>Energy in transport</button>
        <button onClick={handleFuelCombustion}>Unallocated fuel combustion</button>
        </>
    )
}

export default Energy