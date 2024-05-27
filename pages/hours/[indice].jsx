import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import Head from "next/head"
import {Hours} from "../../features/hours"


export default function HoursPage() {
  const router = useRouter();
  const { indice } = router.query;
  const numeroDaLinha = parseInt(indice, 10) + 1;
  // puxando dados do google sheets
  const [linhas,setLinhas] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetsu.com/apis/v1.0su/605f776845cf');
        
        const data = await response.json();

        if (Array.isArray(data)) {
          setLinhas(data);
          
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
    <div >
          <Head>

            <title>ELBUS: Horarios</title>
            <meta name="keywords" content="onibus,trasporte,publico"/>
            <meta name="description" content="App para ajudar com o tranporte público"/>
        </Head>
        <Hours horario={linhas[0]?.[`Linha${numeroDaLinha}`]} horario2={linhas[1]?.[`Linha${numeroDaLinha}`]} horario3={linhas[2]?.[`Linha${numeroDaLinha}`]} horario4={linhas[3]?.[`Linha${numeroDaLinha}`]}
        horario5={linhas[4]?.[`Linha${numeroDaLinha}`]} horario6={linhas[5]?.[`Linha${numeroDaLinha}`]} horario7={linhas[6]?.[`Linha${numeroDaLinha}`]} horario8={linhas[7]?.[`Linha${numeroDaLinha}`]}
        
        tittle="Horarios" partida={linhas[indice]?.local}
        saida={linhas[indice]?.destino} />
    </div>
  )
}