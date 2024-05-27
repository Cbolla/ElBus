import React from 'react'
import { Page } from '../../app/components/layout/Page'
import { Screen } from '../../app/components/layout/Screen' 
import { Header } from '../../app/components/header'
import { useRouter } from 'next/router'

export const Perfil = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push("/trocarsenha")
  }

  return (
    <div>
        <Page>
            <Screen>
                <Header menu="" logo="true"/>
                {/* <div className='rounded-full mt-4 w-36 h-36 bg-white flex justify-center items-center'>a</div> */}
                <label className='flex justify-center items-center text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F]  mt-20'>WIlliam Fabiano</label>

                {/* <label className='flex justify-center items-center text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F]  mt-6'>Cbolla.x</label> */}

                <label className='flex justify-center items-center text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F]  mt-6' >futuro.noob@gmail.com</label>

                <button className="bg-[#D5A518] w-44 h-12 rounded-[20px] mt-6 hover:bg-[#EFCA5D] text-white " onClick={handleClick}>
                Alterar Senha
                </button>
                <button className="bg-[#D5A518] w-44 h-12 rounded-[20px] mt-6 hover:bg-[#EFCA5D] text-white " onClick={() => alert('Sua Conta foi Excluida com Sucesso!')}>
                  Excluir conta
                </button>
            </Screen>
        </Page>
    </div>
  )
}
