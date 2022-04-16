import React, { ReactNode } from 'react'
import AboutMe from '../Home/AboutMe';
import Community from '../Home/Community';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar'
import Hero from './Hero';

interface Roadmap {
  className: string;
  children: ReactNode;
}

export default function Layout(props: Roadmap) {
    
  const { className, children } = props;

  return (
    <div className={className} style={{ background: '#131313' }}>
        <Navbar />
        <Hero />
        <div className='container mx-auto my-10'>
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
