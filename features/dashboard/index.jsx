const sheetdb = require("sheetdb-node");
import {Page} from "../../app/components/layout/Page"
import { Header } from "../../app/components/header"
import {Screen} from "../../app/components/layout/Screen"
import {CardPrimary} from "../../app/components/Cards/CardPrimary"
import Map from "../../public/assets/img/map-img.svg"
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'


const client = sheetdb({ address: 'ko22hgud347gh',auth_login: '1wu6dwvj',
auth_password: 'smzidxxk452t2t60cqiz'});

export const Dashboard = () => {
  const [noticias,setNoticias] = useState([])
  const [url,setUrl] = useState("")
  // const url = "https://drive.google.com/uc?export=download&id="
  const router = useRouter()
  const handleClickMap = () => {
    router.push("/lines")
  }

  useEffect(()=>{
    const coletar = async ()=>{
      let dataRetunr;
      await client.read()
      .then((data)=>{
        dataRetunr = data
      })
      return dataRetunr
    }
    coletar().then((data)=>{
      setNoticias(JSON.parse(data))
    }
    )
    setUrl("https://drive.google.com/uc?export=download&id="+noticias[0].imagem)
  },[])

  return (
    <div className="h-full">
        <Page>
          {console.log(noticias)}
            <Screen>
              <Header menu="" logo="true"/>
              <h1 className='text-white text-xl mt-10 mr-auto select-none'>
                Bem Vindo(a),<br/>
                Como podemos ajudar?
              </h1>
              <div className='flex mt-4 w-full min-h-[200px] justify-center'>
                <div className="mr-4" onClick={handleClickMap}><CardPrimary image={Map.src} alt="Rotas e linhas" text="Linhas e Rotas"/></div>
              </div>
              <p className="text-white select-none mt-4">Notícias</p>   
              <div className="w-full flex justify-center">
                <img className="select-none rounded-[30px]" src={url} alt="Notícias" />
              </div>
        
            </Screen>
        </Page>
    </div>
  )
}
