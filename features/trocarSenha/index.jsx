import React from 'react'
import {Page} from "../../app/components/layout/Page"
import { Screen } from '../../app/components/layout/Screen'
import { Header } from '../../app/components/header'
import Logo from "../../public/assets/img/logo.svg"

export const TrocarSenha = () => {
  return (
    <div>
      <Page>
        <Screen>
        <Header img={Logo.src} menu="true" logo="true"/>
        <h1 className='text-white text-[25px] mt-4'>Trocar a Senha</h1>
        <input className=' text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10 mt-8' type="password" name="name" id="" placeholder='Senha Antiga' />
        <input className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10 mt-6' type="password" name="name" id="" placeholder='Nova Senha' />
        <input className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10 mt-6' type="password" name="name" id="" placeholder='Confirmar Senha' />
        <button className="bg-[#D5A518] w-44 h-12 rounded-[20px] mt-6 hover:bg-[#EFCA5D] text-white " onClick={() => alert('Senha Alterada com Sucesso!')}>
          Trocar de senha
        </button>
        </Screen>
      </Page>
    </div>
  )
}
