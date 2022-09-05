import React from 'react'
import Arrow from '../../../public/assets/icons/arrow-left.svg'
import Menu from '../../../public/assets/icons/menu-icon.svg'
import { useRouter } from 'next/router'

export const Header = (props)=>{
  const router = useRouter()

  const handleOnClick = ()=>{
    router.back()
  }


  return (
    <div className='w-full flex justify-between items-center'>
        <div className="bg-[#26292F] w-8 h-8 rounded-[10px] flex justify-center items-center cursor-pointer" onClick={handleOnClick}>
          <img src={Arrow.src} alt="Voltar"/>
        </div>

        <img src={props.img} alt="Logo do App"/>

        {props.menu ?
        <div className="bg-[#26292F] w-8 h-8 rounded-[10px] flex justify-center items-center cursor-pointer" >
          <img  src={Menu.src} alt="" />
        </div> 
        : <div className=" w-8 h-8 rounded-[10px] flex justify-center items-center" ></div> }

    </div>
  )
}
