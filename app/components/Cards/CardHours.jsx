import React from 'react'

export const  CardHours=(props) => {
  return (
    <div>
        <div className="w-full h-full flex flex-row justify-around mt-4 text-white">
                <div className="mr-2 rounded-full bg-[#26292F] w-14 h-6">
                  <p className="flex justify-center">{props.hours1}</p>
                </div>
                <div className="mr-2  rounded-full bg-[#26292F] w-14 h-6">
                  <p className="flex justify-center">{props.hours2}</p>
                </div>
                <div className="mr-2 rounded-full bg-[#26292F] w-14 h-6">
                  <p className="flex justify-center">{props.hours3}</p>
                </div>
                <div className="rounded-full bg-[#26292F] w-14 h-6">
                  <p className="flex justify-center">{props.hours4}</p>
                </div>
            </div>
            
    </div>
  )
}