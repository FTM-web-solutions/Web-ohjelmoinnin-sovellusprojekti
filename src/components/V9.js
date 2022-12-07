import axios from 'axios'
import React, { useEffect, useState, useRef} from 'react'
import Waste from './V9help/Waste';
import Industrial from './V9help/Industrial';
import Agriculture from './V9help/Agriculture';
import Energy from './V9help/Energy';
//import { Chart } from "chart.js/auto";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const URL = 'http://localhost:3001/v9'

function V9() {
    const [sector, setSector] = useState([])
    const [share1, setShare1] = useState([])
    const [subSector, setSubSector] = useState([])
    const [share2, setShare2] = useState([])
    const [subSectorFurther, setSubSectorFurther] = useState([])
    const [share3, setShare3] = useState([])
    const [openWaste, setOpenWaste] = useState(false);
    const [openIndustrial, setOpenIndustrial] = useState(false);
    const [opneAgriculture, setOpenAgriculture] = useState(false);
    const [openEnergy, setOpenEnergy] = useState(false);

    const chartRef = useRef();

    const closeModal = () => {
      setOpenWaste(false);
      setOpenAgriculture(false);
      setOpenIndustrial(false);
      setOpenEnergy(false);
    }
    const onClick = (event) => {
      let element = getElementAtEvent(chartRef.current,event)

      if (element[0].index === 0) {
        setOpenEnergy(true);
      }
        else if (element[0].index === 1) {
          setOpenIndustrial(true);
      }
        else if (element[0].index === 3) {
          setOpenAgriculture(true);
      }
        else if (element[0].index === 2) {
          setOpenWaste(true);
      }
}

    useEffect(() => {
        axios.get(URL)
          .then((response) => {

            let sector1 = response.data.map(x=>x.Sector)
            setSector(sector1)
            let  share1= response.data.map(x=>x.Share1)
            setShare1(share1)

            let subSector = response.data.map(x=>x.Subsector)
            setSubSector(subSector)
            let share2 = response.data.map(x=>x.Share2)
            setShare2(share2)

            let subSectorFurther1 = response.data.map(x=>x.Subsector_Further)
            setSubSectorFurther(subSectorFurther1)
            let share3 = response.data.map(x=>x.Share3)
            setShare3(share3)

          }).catch(error => {
            alert(error.response.data.error)
          })
      }, [])
      
      const data = {
        labels: ['Energy','Industrial process', 'Waste','Agriculture,Forestry & Land Use'],
        datasets: [{
          data: share1,
          backgroundColor: [
            'red',
            'blue',
            'yellow',
            'green'
          ],
          hoverOffset: 4
        }]
      };

    const options = {

        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "CO2 emissions by sectors",
            },
        },

    }

    return (
        <div className="V9">
          <Popup contentStyle={{ width: 1138 }} open={openEnergy} closeOnDocumentClick onClose={closeModal}>
                        <Energy subSector={subSector} share2={share2} subSectorFurther={subSectorFurther}
                            share3={share3} />
          </Popup>

          <Popup open={openWaste} closeOnDocumentClick onClose={closeModal}>
                        <Waste subSector={subSector} share2={share2} />
          </Popup>

          <Popup open={openIndustrial} closeOnDocumentClick onClose={closeModal}>
                        <Industrial subSector={subSector} share2={share2} />
          </Popup>

          <Popup open={opneAgriculture} closeOnDocumentClick onClose={closeModal}>
                        <Agriculture subSector={subSector} share2={share2} />
          </Popup>
            <div style={{ height: "50%", width: "50%" }}>
                <form>
                </form>
                <Doughnut options={options} ref={chartRef} data={data} onClick={(event)=>onClick(event)}/>
            </div>
        </div>
    );
}

export default V9;
