import React from 'react'
import {Page} from "../../app/components/layout/Page"
import Logo from "../../public/assets/img/logo.svg"
import {Header} from "../../app/components/header"

export const Register = () => {
  return (
    <div>
        <Page>
          <div className='w-[90%] flex flex-col justify-center items-center m-auto'>  
          <Header img={Logo.src} />    
            <img className='w-[200px]' src={Logo.src} alt="Logo do Aplicativo"/>
            <div className="flex flex-col items-center mt-10 w-full">
              <input className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="text" name="name" id="" placeholder='Nome'/>
              <input className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10 mt-4' type="text" name="emial" id="" placeholder='E-mail'/>
              <input className='text-white outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="password" name="password" id="" placeholder='Senha'/>
              <input className='text-white outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="password" name="passwordConfirm" id="" placeholder='Confirmar senha'/>
            </div>
            <button className="bg-[#D5A518] w-44 h-10 rounded-[20px] mt-6 hover:bg-[#EFCA5D] text-whi" onClick={()=>{}}>
              Cadastrar-se
            </button>
          </div>
        </Page>
    </div>
  )
}

