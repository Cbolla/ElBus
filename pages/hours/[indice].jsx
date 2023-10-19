import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import Head from "next/head"
import {Hours} from "../../features/hours"


export default function HoursPage() {
  const router = useRouter();
  const { indice } = router.query;
  // puxando dados do google sheets
  const [linhas,setLinhas] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetsu.com/apis/v1.0su/605f776845cf');
        const data = await response.json();

        if (Array.isArray(data)) {
          setLinhas(data);
          console.log(linhas)
          
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
            {console.log(linhas[0]?.horario2)}
            <title>ELBUS: Horarios</title>
            <meta name="keywords" content="onibus,trasporte,publico"/>
            <meta name="description" content="App para ajudar com o tranporte público"/>
        </Head>
        <Hours tittle="Horarios" partida={linhas[indice]?.local}
        saida={linhas[indice]?.destino} />
    </div>
  )
}