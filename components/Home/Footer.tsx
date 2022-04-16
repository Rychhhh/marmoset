import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='container mx-auto h-[200px] '>
        <div className="container content flex flex-col  justify-center mx-auto items-center">

          <div className="copyright w-[65%] text-center">
            <Image src={'/asset/img/m_logo.jpg'} alt={'logo'} width={100} height={100} data-aos="flip-down" data-aos-delay="700"/>
            <div className="subcopyright text-xl font-mono font-bold mt-4" data-aos="fade-right" data-aos-delay="900">© All rights reserved, Marmoset is Proudly </div>
          </div>
        </div>
        
    </div>
  )
}
