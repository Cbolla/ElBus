import React from 'react'

export const  CardPrimary=(props) => {
  return (
    <div className="w-40 h-40 bg-[#26292F] flex-col rounded-[20px] flex justify-center items-center cursor-pointer select-none">
        <div className='w-[140px] h-[110px] rounded-[20px]'>
          <img className="w-full h-full pointer-events-none" src={props.image} alt={props.alt} />
        </div>
        <p className="text-white mt-2">{props.text}</p>
    </div>
  )
}
