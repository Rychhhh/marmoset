import React from 'react'
import Link from 'next/link';

export default function Community() {
  return (
    <div className='container mx-auto h-[180px] overflow-visible bg-gradient-to-b from-pink-600 to-purple-800 '>
        <div className="content p-5 text-center">
            <p className="subtitle mb-2" data-aos="zoom-in-right" data-aos-delay="700">Ready For #GENERATIONOFNFT</p>
            <div className="title text-2xl font-chunky " data-aos="zoom-in-right" data-aos-delay="900">
              Join Our Discord
            </div>
            
              <Link href={'https://discord.gg/k3p9TqCEFx'}>
              <div className="button text-center cursor-pointer  duration-300 w-1/2  rounded-3xl mt-5 mx-auto py-3 px-7 bg-white text-slate-900 font-bold text-chunky text-xl active:scale-125 hover:scale-125" data-aos="fade-left" data-aos-delay="1000">
                  <a>Lets Go</a>
              </div>
            
          </Link>
        </div>
    </div>
  )
}
