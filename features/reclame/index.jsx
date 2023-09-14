import React from 'react'
import { Page } from '../../app/components/layout/Page'
import { Screen } from '../../app/components/layout/Screen'
import { Header } from './../../app/components/header'

export const Reclame = () => {
  return (
    <div>
        <Page>
            <Screen>
                <Header menu="" logo="true"></Header>
                <div className="flex flex-col items-center w-full mt-6">
                <h1 className='text-white text-[25px]'>Reclame Aqui</h1>

                <input className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10 mt-6' type="text" name="name" id="" placeholder='Reclame Aqui' />
                
                <textarea className='p-4 pl-10 pr-10 resize-none whitespace-normal text-white outline-none outline-[#DEAB14] mt-8 w-[90%] h-52 border-none rounded-[20px] bg-[#26292F] mt-2' type="text" name="text" id="" placeholder='Digite o que esta acontecendo aqui.' />
                
                <button className="bg-[#D5A518] w-44 h-12 rounded-[20px] mt-6 hover:bg-[#EFCA5D] text-white " onClick="">
                Enviar Reclamação
                </button>
            </div>
            </Screen>
        </Page>
    </div>
  )
}

export default Reclame