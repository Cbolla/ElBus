import React from 'react'
import {Page} from "../../app/components/layout/Page"
import { Header } from "../../app/components/header"
import {Screen} from "../../app/components/layout/Screen"
import {CardPrimary} from "../../app/components/Cards/CardPrimary"
import {CardSecundary} from "../../app/components/Cards/CardSecundary"
import Map from "../../public/assets/img/map-img.svg"
import Complain from "../../public/assets/img/boy-img.svg"
import Settings from "../../public/assets/img/settings-img.svg"
import { useRouter } from 'next/router'

export const Dashboard = () => {
  const router = useRouter()
  const handleClickMap = () => {
    router.push("/lines")
  }

  return (
    <div className="h-full">
        <Page>
            <Screen>
              <Header menu="" logo="true"/>
              <h1 className='text-white text-xl mt-10 mr-auto select-none'>
                Bem Vindo(a),<br/>
                Como podemos ajudar?
              </h1>
              <div className='flex mt-4 w-full min-h-[200px] justify-center'>
                <div className="mr-4" onClick={handleClickMap}><CardPrimary image={Map.src} alt="Rotas e linhas" text="Linhas e Rotas"/></div>
              </div>
              <p className="text-white select-none mt-4">Linhas mais visualizadas</p>   
              <div className='w-full min-h-[30%] flex flex-col items-center overflow-y-scroll'>
                <CardSecundary mt="2" destiny="Angatuba" localization="Itapetininga" line="Linha 01"/>
                <CardSecundary mt="2" destiny="Itapetininga" localization="Angatuba" line="Linha 02"/>
                <CardSecundary mt="2" destiny="Gramadinho" localization="Itapetininga" line="Linha 03"/>
                <CardSecundary mt="2" destiny="Retiro" localization="Maranhao" line="Linha 04"/>
                
                
              </div>
            </Screen>
        </Page>
    </div>
  )
}
