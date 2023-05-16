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
        const response = await fetch('https://sheetsu.com/apis/v1.0su/ad0e6353e76d');
        const data = await response.json();

        if (Array.isArray(data)) {
          setLinhas(data);
          
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      } catch (error) {
        console.error(error);
      }
      console.log( linhas , "olaaaaaaaaaaaaaaaaaaaaaaaaaa")
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
        <Hours tittle="Horarios" partida={linhas[indice]?.local}
        saida={linhas[indice]?.destino} />
    </div>
  )
}