import React from 'react'

export default function Hero() {
  return (
    <div className='bg-rarity-hero bg-right bg-no-repeat h-[1000px] container mx-auto' data-aos="fade-up">
        <div className="content-hero text-5xl text-center grid grid-cols-1 py-96 font-chunky duration-300 hover:scale-110">
            <span className='text-8xl pt-52 md:pt-0 text-red-400' data-aos="fade-down" data-aos-delay="700">Rarity</span>
            <span className='text-5xl text-blue-500' data-aos="fade-down" data-aos-delay="700">Is</span>
            <span className='text-6xl text-purple-400' data-aos="fade-down" data-aos-delay="700">Our <span>Priority</span></span>
        </div>
    </div>
  )
}
