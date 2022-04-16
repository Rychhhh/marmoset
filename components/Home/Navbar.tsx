import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

import { Power3, TweenMax } from 'gsap'
import Popup from 'reactjs-popup'


export default function Navbar() {
  let animation = useRef(null)


  useEffect(() => {
     TweenMax.to(
       animation,
       .5,
       {
         opacity: 1,
         y: -20,
         ease: Power3.easeOut
       }
     )
  }, [])


  let Links = [
    { class: 'link', name: 'HOME', href: '/'},
    { class: 'link', name: 'ROADMAP', href: '/roadmap'},
    { class: 'link', name: 'RARITY', href: '/rarity'},
  ]

  return (
    <div className='flex mx-auto py-5 px-10 md:px-20 items-center justify-between'>
    <div className="span w-1/2 md:w-none">
        <Link href={'/'}>
          <a href="">
            <Image src={'/asset/img/logo-preview.png'} alt="logo" width={300} height={150}/>
          </a>
        </Link>
      </div>

        <button className="group mx-2 flex flex-col rounded py-3 px-4 space-y-2 hover:bg-slate-400  md:hidden">
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
          <div className="absolute top-0 right-full h-screen w-8/12 bg-main border opacity-0
            group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col space-y-10 items-center w-full text-base cursor-pointer pt-10 h-full">
                {Links.map((link) => (
                  <div key={link.name} className='link-active'>
                        <Link href={link.href} key={link.class}>{link.name}</Link>
                        <a href="">Whitepaper</a>
                  </div>
                  
              
                ))}
                
              </ul>
            </div>
        </button>

       <ul className='hidden xl:flex items-center space-x-10 font-bold text-xl' ref={el => {animation = el}}>

          {Links.map((link) => (
            <Link href={link.href} key={link.class}>{link.name}</Link>
          ))}

          <Popup trigger={<div className='cursor-pointer'> Whitepaper</div>} position="bottom center">
                    <h1 className='p-4 cursor-wait bg-white'>Coming Soon</h1>
          </Popup>
          
        </ul>
        <div className='hidden xl:block items-center text-center mr-10 w-1/2 my-20 duration-150 hover:scale-125 '>
          <Link href={'https://discord.gg/hdWKymgq'}>
            <a href="https://discord.gg/hdWKymgq" className='px-5 py-2 rounded-[70px] bg-gradient-to-r from-btn-gradient1 to-btn-gradient2 font-bold text-sm '>Join Our Discord</a>
          </Link>
        </div>
    </div>
  )

  
}
