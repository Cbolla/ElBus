import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export const Map = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCC8IcLkmnsMkk7M_OKqkVOvIrN86US11M"
  })
  
  const position ={
    lat:props.lat,
    lng:props.lng,
  }

  return <div className='w-[300px] h-[100px] mt-8]'>
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
}