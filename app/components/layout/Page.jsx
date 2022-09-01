import React from 'react'

export const Page = (props)=> {
  return (
    <div className="bg-[#494C52] relative min-h-[90vh] h-full sm:w-full md:w-1/2 xl:w-1/3 md:m-auto md:mt-8  py-2 rounded-lg ">
        <div className="relative min-h-[90vh] h-full md:m-auto py-2 rounded-lg">
          <div className='mt-8'>{props.children}</div>
      </div>
    </div>
  )
}

