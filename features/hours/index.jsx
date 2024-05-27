import { Page } from "../../app/components/layout/Page"
import { Screen } from "../../app/components/layout/Screen"
import { Header } from './../../app/components/header';
import { CardHours } from './../../app/components/Cards/CardHours';
import { useState,useEffect } from "react";
import {Map} from "../../app/components/map/MyMap";


export const Hours = (props) => {
  // puxando dados do google sheets
  const [horario,setHorario] = useState([])
  const [horario2,setHorario2] = useState([])
  const [horario3,setHorario3] = useState([])
  const [horario4,setHorario4] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetsu.com/apis/v1.0su/605f776845cf');
        const data = await response.json();
        

        if (Array.isArray(data)) {
          setHorario(data[0].horario.split(","))
          setHorario2(data[1].horario2.split(","))
          setHorario3(data[2].horario3.split(","))
          setHorario4(data[3].horario4.split(","))
          setHorario5(data[4].horario5.split(","))
          setHorario6(data[5].horario6.split(","))
          setHorario7(data[6].horario7.split(","))
          setHorario8(data[7].horario7.split(","))
          
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);

  return (

    <div className=''>
      <Page>
        <Screen>
          <Header logo="true"/>
          <h1 className="text-white text-[30px] mt-10">{props.tittle}</h1>
          <p className="text-white text-[15px] mt-4">====== TARIFA: R$ 3,50 ======</p>
          <div className="flex justfy-center flex-col items-center">
            <p className="text-white text-[18px] mt-4">Partidas de {props.partida}</p>
            <CardHours hours1={props.horario} hours2={props.horario2} hours3={props.horario3} hours4={props.horario4}/>
            <CardHours hours1={props.horario5} hours2={props.horario6} hours3={props.horario7} hours4={props.horario8}/>
            <CardHours hours1={props.horario} hours2={props.horario} hours3={props.horario} hours4={props.horario}/>
            <CardHours hours1={props.horario} hours2={props.horario} hours3={props.horario} hours4={props.horario}/>
            
            
            <p className="text-white text-[18px] mt-4">Saida de {props.saida}</p>
            <CardHours hours1={props.horario} hours2={props.horario2} hours3={props.horario3} hours4={props.horario4}/>
            <CardHours hours1={props.horario5} hours2={props.horario6} hours3={props.horario7} hours4={props.horario8}/>
            <CardHours hours1={props.horario} hours2={props.horario} hours3={props.horario} hours4={props.horario}/>
            <CardHours hours1={props.horario} hours2={props.horario} hours3={props.horario} hours4={props.horario}/>
          </div>

         <div><Map/></div>
        </Screen>
      </Page>
    </div>
  )
}
