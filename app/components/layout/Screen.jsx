import React from 'react'

export const Screen = (props) => {
  return (
    <div className='w-[90%] h-[100%]   flex flex-col  items-center m-auto '>
        {props.children}
    </div>
  )
}
