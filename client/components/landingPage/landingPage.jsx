import React from 'react'
import Carrusel from '../carrusel/carrusel'

export default function LandingPage() {
  return (

    <div className='flex flex-col top-0'> 
        <div className='flex w-full  h-full'>
            <img src="home.jpg" alt="backgroud" className=' absolute bg-cover' />
        </div>
        <div className=' pt-48 '>
          <Carrusel/>
        </div>
    </div>
  )
}
