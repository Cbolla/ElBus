import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCC8IcLkmnsMkk7M_OKqkVOvIrN86US11M"
  })
  
  const position ={
    lat:-23.571843,
    lng:-48.043797,
  }

  return <div className="map-border">
    <div className='w-[300px] h-[400px] mt-8]'>
      {isLoaded ?(
        <GoogleMap
          mapContainerStyle={{width:'100%', height:'50%', margin:"10px 0"}}
          center={position}
          zoom={15}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
          <Marker position={position} options={
            {
              label: {
                text:"Ponto de partida",
                className:""
              }
            }
          }/>
        </GoogleMap>
      ) :(<></>)
    }
    </div>
  </div>
}