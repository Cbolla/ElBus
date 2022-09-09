import React from 'react'
import Localization from "../../../public/assets/icons/localization.svg"
import Destiny from "../../../public/assets/icons/destiny.svg"
export const CardSecundary = (props) => {
  return (
    <div className={`w-[80%] mt-${props.mt} bg-[#26292F] min-h-[90px] flex flex-col justify-center items-center rounded-[30px]`}>
        <p className="text-[20px] text-white">{props.line}</p>
        <div className="flex justify-between w-[80%] text-white text-[95%]">

            <div className="flex justify-center items-center">
                <img className='pr-2 pb-1' src={Localization.src} alt="Local de partida" />
                <p>{props.localization}</p>
            </div>
            
            <div className="flex justify-center items-center">
                <img className="pr-2" src={Destiny.src} alt="local do Destino" />
                <p>{props.destiny}</p>
            </div>

        </div>
    </div>
    
  )
}