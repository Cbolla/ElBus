import { Page } from "../../app/components/layout/Page"
import { Screen } from "../../app/components/layout/Screen"
import { Header } from './../../app/components/header';
import { CardHours } from './../../app/components/Cards/CardHours';
import { useRouter } from 'next/router';



export const Hours = (props) => {
  
  return (

    <div className=''>
      <Page>
        <Screen>
          <Header logo="true"/>
          <h1 className="text-white text-[30px] mt-10">{props.tittle}</h1>
          <p className="text-white text-[15px] mt-4">====== TARIFA: R$ 3,50 ======</p>
          <div className="flex justfy-center flex-col items-center">
            <p className="text-white text-[18px] mt-4">Partidas de {props.partida}</p>
            <CardHours hours1='7:20' hours2='8:20' hours3='9:20' hours4='10:20'/>
            <CardHours hours1='14:20' hours2='15:20' hours3='7:20' hours4='7:20'/>
            <CardHours hours1='7:20' hours2='7:20' hours3='7:20' hours4='7:20'/>
            <CardHours hours1='7:20' hours2='7:20' hours3='7:20' hours4='7:20'/>
            
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
