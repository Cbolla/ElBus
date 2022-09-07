import React from 'react'

export const Screen = (props) => {
  return (
    <div className='w-[90%] flex flex-col justify-center items-center m-auto mt-10'>
        {props.children}
    </div>
  )
}
