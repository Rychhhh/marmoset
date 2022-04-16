import gsap from 'gsap'
import React from 'react'

export default function Hero() {
  return (

     <div className="h-[550px] md:h-[900px] bg-top bg-no-repeat md:bg-cover bg-hero-mobile md:bg-hero-pattern">
      
      {/* Content Hero */}
      <div className="content-hero">
        <h1 className='text-[40px] sm:text-5xl lg:text-7xl font-bold text-white md:text-emerald-200 '><span className='text-green-300 mb:text-yellow-200'> Marmosets  </span>are one of the smallest primates in the world</h1>
        <h1 className='text-2xl font-normal my-8 text-white md:text-emerald-100'>  <span className='text-teal-200'>their way of life is unique</span> and <span className='text-purple-100'>rare.</span>  </h1>
      </div>

    </div>
  )
}
