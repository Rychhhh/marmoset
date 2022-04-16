import React, { ReactNode } from 'react'
import Navbar from '../Home/Navbar';
import Hero from './Hero';
import AboutMe from '../Home/AboutMe';
import Community from '../Home/Community';
import Footer from '../Home/Footer';

interface Roadmap {
  className: string;
  children: ReactNode;
}

export default function Layout(props: Roadmap) {
    
  const { className, children } = props;

  return (
    <div className={className}>
        <Navbar />
        <Hero />
        <div className={` ${className} mx-[150px] lg:mx-[300px] py-10 h-[1000px] `}>
            {children}
        </div>
        <AboutMe />
        <Community />
        <div className="pt-10">
          <Footer />
        </div>
    </div>
  )
}
