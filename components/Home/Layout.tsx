import Head from 'next/head'
import React, { ReactNode } from 'react'
import AboutMe from './AboutMe'
import Community from './Community'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import SubHero from './SubHero'


interface Home { 
    className: string;
    children: ReactNode;
}

export default function Layout(props: Home) {
    const {className , children} = props;
  return (
    <div className={className}>
        <Head>
            <title>Marmoset - Home</title>
        </Head>
        <Navbar />
        <Hero />
        <SubHero /> 
        {/* <Content/> */}
        <div>
            {children}
        </div>
        <AboutMe/>
        <Community />
        <Footer/>
    </div>
  )
}
