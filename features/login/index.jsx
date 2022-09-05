import React from 'react'
import {Page} from "../../app/components/layout/Page"
import Logo from "../../public/assets/img/logo.svg"
import Google from "../../public/assets/icons/google-icon.svg"
import { useRouter } from 'next/router'

export const Login = ()=> {
  const router = useRouter()
  let handleClick = () => {
    router.push("/register");
  }
  return (
    <div className=''>
      <Page>
        <div className='w-[90%] flex flex-col justify-center items-center m-auto mt-20'>
          <img className='w-[200px]' src={Logo.src} alt="Logo do Aplicativo"/>
          <div className="flex flex-col items-center mt-10 w-full">
            <input className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="text" name="" id="" placeholder='Usuário ou E-mail'/>
            <input className='text-white outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="password" name="" id="" placeholder='Senha'/>
          </div>
          <p className="mt-4 text-[#9A9A9A] cursor-pointer select-none hover:text-white" onClick={handleClick}>Cadastrar-se</p>
          <button className="bg-[#D5A518] w-44 h-10 rounded-[20px] mt-6 hover:bg-[#EFCA5D]" onClick={()=>{}}>
            Logar
          </button>
          <img className='cursor-pointer mt-8' src={Google.src} alt="Conta Google" />
        </div>
      </Page> 
    </div>
  )
}
