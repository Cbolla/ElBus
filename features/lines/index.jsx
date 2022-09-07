import React from 'react'
import { Page } from './../../app/components/layout/Page';
import {Screen} from './../../app/components/layout/Screen';
import {Header} from './../../app/components/header';
import { CardSecundary } from './../../app/components/Cards/CardSecundary';

export const Lines = () => {
  return (
    <div>
        <Page>
            <Screen>
                <Header menu="true" logo="true"/>
                <h1 className="text-white pt-6 text-xl">LINHAS, ROTAS E HORÁRIOS</h1>
                <p className="text-white pt-4">======Selecione a linha desejada======</p>
                <div className='ml-3 w-full flex flex-col items-center h-full overflow-y-scroll'>
                <CardSecundary mt="2" destiny="Angatuba" localization="Itapetininga" line="Linha 01"/>
                <CardSecundary mt="2" destiny="Itapetininga" localization="Angatuba" line="Linha 02"/>
                <CardSecundary mt="2" destiny="Gramadinho" localization="Guaruja" line="Linha 03"/>
                <CardSecundary mt="2" destiny="Retiro" localization="Maranhao" line="Linha 04"/>
                <CardSecundary mt="2" destiny="Narnia" localization="Retiro" line="Linha 05"/>
                <CardSecundary mt="2" destiny="Minas gerais" localization="Brasilia" line="Linha 06"/>
                <CardSecundary mt="2" destiny="Retiro" localization="Maranhao" line="Linha 07"/>
                </div>
            </Screen>
        </Page>
    </div>
  )
}
