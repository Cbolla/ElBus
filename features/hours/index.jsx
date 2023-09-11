import { Page } from "../../app/components/layout/Page"
import { Screen } from "../../app/components/layout/Screen"
import { Header } from './../../app/components/header';
import { CardHours } from './../../app/components/Cards/CardHours';
import { useRouter } from 'next/router';
import { useState,useEffect } from "react";


export const Hours = (props) => {
  // puxando dados do google sheets
  const [horario,setHorario] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetsu.com/apis/v1.0su/605f776845cf');
        const data = await response.json();
        

        if (Array.isArray(data)) {
          setHorario(data[0].horario.split(","))
          
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);

  console.log(horario[0])



  return (

    <div className=''>
      <Page>
        <Screen>
          <Header logo="true"/>
          {console.log(horario)}
          <h1 className="text-white text-[30px] mt-10">{props.tittle}</h1>
          <p className="text-white text-[15px] mt-4">====== TARIFA: R$ 3,50 ======</p>
          <div className="flex justfy-center flex-col items-center">
            <p className="text-white text-[18px] mt-4">Partidas de {props.partida}</p>
            {horario?.map((p,indice)=>{
  
              return <CardHours indice={indice} hours1={horario}/>
              
            })}
            
            
            <p className="text-white text-[18px] mt-4">Saida de {props.saida}</p>
            <CardHours hours1='7:20' hours2='7:20' hours3='7:20' hours4='7:20'/>
            <CardHours hours1='7:20' hours2='7:20' hours3='7:20' hours4='7:20'/>
            <CardHours hours1='7:20' hours2='7:20' hours3='7:20' hours4='7:20'/>
            <CardHours hours1='7:20' hours2='7:20' hours3='7:20' hours4='7:20'/>
          </div>
        </Screen>
      </Page>
    </div>
  )
}
