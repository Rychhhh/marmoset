import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutMe() {
  return (
    <div>
      <div className="container mx-auto h-[600px]  py-20 w-full text-center text-5xl font-chunky">
        <h1 data-aos="zoom-in-up" data-aos-delay="300">DISCOVER <span className='text-red-500' data-aos="zoom-in-up" data-aos-delay="1700">ME</span> </h1>

        <div className="content-discover grid grid-cols-1">

            <div className="roadmap text-3xl mt-10">
              <div className="image">
                <Image src={'/asset/logo/location.svg'} alt='comunity' width={50} height={50} className="text-white" data-aos="flip-up" data-aos-duration="700" />
              </div>
              <div className="content" data-aos="zoom-in-right" data-aos-delay="700">Find our roadmap</div>
              <Link href={'/roadmap'}>
                  <div className="button rounded-3xl text-xl py-2 px-5 mx-auto mt-5 bg-pink-400 w-1/2 duration-300 active:scale-125 cursor-pointer" data-aos="zoom-in-up" data-aos-delay="700">Roadmap</div>
              </Link>
             
            </div>

            <div className="roadmap text-3xl mt-10" data-aos-delay="3700">
              <div className="image">
                 <Image src={'/asset/logo/people.svg'} alt='comunity' width={50} height={50} className="text-white" data-aos="flip-up" data-aos-delay="2000"/>
              </div>
              <div className="content " data-aos="zoom-in-right" data-aos-delay="2000">Join To Our Community</div>
              <Link href={'https://discord.gg/k3p9TqCEFx'}>
                  <div className="button rounded-3xl text-xl py-2 px-5 mx-auto mt-5 bg-pink-400 w-1/2 duration-300 active:scale-125 cursor-pointer" data-aos="zoom-in-up" data-aos-delay="2000">Community</div>
              </Link>
             
            </div>
            
        </div>
      </div>
    </div>
  )
}
