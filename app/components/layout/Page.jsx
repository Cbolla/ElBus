import React from 'react'

export const Page = (props)=> {
  return (
    <div className="bg-[#494C52] h-[90vh] sm:w-full md:w-1/2 xl:w-1/3 md:m-auto md:mt-8  py-2 rounded-lg ">
        <div className="relative min-h-[90%] h-[100%] md:m-auto py-2 rounded-lg">
          <div className='mt-4 h-full'>{props.children}</div>
      </div>
    </div>
  )
}

