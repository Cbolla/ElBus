import React from 'react'
import {Page} from "../../app/components/layout/Page"
import { Header } from "../../app/components/header"
import {Screen} from "../../app/components/layout/Screen"
import {CardPrimary} from "../../app/components/Cards/CardPrimary"
import Map from "../../public/assets/img/map-img.svg"
import Complain from "../../public/assets/img/boy-img.svg"
import Settings from "../../public/assets/img/settings-img.svg"


export const Dashboard = () => {

  return (
    <div>
        <Page>
            <Screen>
              <Header menu="true" logo="true"/>
              <h1 className='text-white text-xl mt-10 mr-auto select-none'>
                Bem Vindo(a),<br/>
                Como podemos ajudar?
              </h1>
              <div className='flex mt-4 w-full overflow-x-scroll'>
                <div className="mr-4"><CardPrimary image={Map.src} alt="Rotas e linhas" text="Linhas e Rotas"/></div>
                <div className="mr-4"><CardPrimary image={Complain.src} alt="Reclame aqui" text="Reclame Aqui"/></div>
                <div className="mr-4"><CardPrimary image={Settings.src} alt="Configurações" text="Configurações"/></div>
              </div>
              <p className="text-white select-none mt-4">Linhas mais visualizadas</p>
            </Screen>
        </Page>
    </div>
  )
}
