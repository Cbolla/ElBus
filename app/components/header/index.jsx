import React from 'react'
import Arrow from '../../../public/assets/icons/arrow-left.svg'
import Menu from '../../../public/assets/icons/menu-icon.svg'

let menu = true

export const Header = (props)=>{
  
  return (
    <div className='w-full flex justify-between items-center'>
        <div className="bg-[#26292F] w-8 h-8 rounded-[10px] flex justify-center items-center">
          <img src={Arrow.src} alt="Voltar"/>
        </div>
        <img src={props.img} alt="Logo do App"/>
        {menu && 
        <div className="bg-[#26292F] w-8 h-8 rounded-[10px] flex justify-center items-center" >
          <img  src={Menu.src} alt="" />
        </div>}
    </div>
  )
}
