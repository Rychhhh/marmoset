import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function Hero() {
  let animation = useRef(null)
  let typing = useRef(null)

  useEffect(() => {
   gsap.to(
     animation,
     5,
     {
       y: -20,
       ease: "power3.out"
     }
   )
  }, [])
  
  

  return (
    // <div className="h-[900px] bg-no-repeat bg-cover bg-left bg-hero-pattern">
      
    //   {/* Content Hero */}
    //   <div className="px-40 pt-[350px] font-nunito capitalize  w-[70%]">
    //     <h1 className='text-7xl font-bold text-emerald-200 '><span className='text-yellow-200'> Marmosets  </span>are one of the smallest primates in the world</h1>
    //     <h1 className='text-4xl font-normal my-8 text-emerald-100'> their way of life is <span className='text-red-300'>unique</span> and <span className='text-red-300'>rare.</span>  </h1>
    //   </div>

    // </div>


     <div className="h-[550px] md:h-[900px] bg-top bg-no-repeat md:bg-cover bg-hero-mobile md:bg-hero-pattern">
      
      {/* Content Hero */}
      <div className="content-hero" ref={el => {animation = el}}>
        <h1 className='text-[40px] sm:text-5xl lg:text-7xl font-bold text-white md:text-emerald-200 '><span className='text-green-300 mb:text-yellow-200'> Marmosets  </span>are one of the smallest primates in the world</h1>
        <h1 className='text-2xl font-normal my-8 text-white md:text-emerald-100' ref={el => {typing = el}}>  <span className='text-teal-200'>their way of life is unique</span> and <span className='text-purple-100'>rare.</span>  </h1>
      </div>

    </div>
  )
}
