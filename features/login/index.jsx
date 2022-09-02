import React from 'react'
import {Page} from "../../app/components/layout/Page"
import Logo from "../../public/assets/img/logo.svg"
import Google from "../../public/assets/icons/google-icon.svg"
export const Login = ()=> {
  return (
    <div className=''>
      <Page>
        <div className='w-[90%] flex flex-col justify-center items-center m-auto mt-20'>
          <img className='w-[200px]' src={Logo.src} alt="Logo do Aplicativo"/>
          <div className="flex flex-col items-center mt-10 w-full">
            <input className='outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="text" name="" id="" placeholder='Usuário ou E-mail'/>
            <input className='outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="password" name="" id="" placeholder='Senha'/>
          </div>
          <p className="mt-4 text-[#9A9A9A] cursor-pointer">Cadastrar-se</p>
          <button className="bg-[#D5A518] w-44 h-10 rounded-[20px] mt-6">
            Logar
          </button>
          <img className='mt-8' src={Google.src} alt="Conta Google" />
        </div>
      </Page> 
    </div>
  )
}
