import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Home/Layout'

const Home: NextPage = () => {

  const Product = [
    {link: '/asset/product/product1.jpeg', alt: 'product1', delay: '100'},
    {link: '/asset/product/product2.jpeg', alt: 'product2', delay: '500'},
    {link: '/asset/product/product3.jpeg', alt: 'product3', delay: '1000'},
  ]


  return (
      <Layout className='hi bg-home text-white'>

        {/* Page Next Generation of NFT */}
        <div className='home-container'> 

          {/* Heading */}
          <div className="heading-container"> 
           
            <h1 className='text-heading' data-aos-delay="400" >
              <span className='text-cyan-600' data-aos="zoom-in" >Next Generation</span> 
              <span className='text-yellow-400' data-aos="zoom-in">Of</span>  
              <span className='text-red-500' data-aos="zoom-in">NFT</span>
            <sub className='text-xl px-5 pt-10 font-thin' data-aos="zoom-in-up" data-aos-delay="500 ">Its not about generation, its about <span className='text-red-500'>NFT</span> </sub>
            </h1>
           
          </div>
          {/* End Heading */}

          <div className="left-right-content">

          {/* Left Content */}
          <div className="left relative" data-aos="zoom-in-right"  data-aos-delay="400">
            <span className='span-content-left'>
              <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF0066" d="M47.2,-80.6C61.6,-73.4,74,-61.7,81.3,-47.5C88.5,-33.3,90.7,-16.6,90.2,-0.3C89.8,16.1,86.7,32.2,78.6,44.9C70.5,57.6,57.2,66.9,43.3,73.8C29.3,80.8,14.7,85.3,-0.3,85.9C-15.3,86.4,-30.7,83.1,-44.7,76.2C-58.8,69.4,-71.5,59,-78.8,45.7C-86.1,32.4,-87.9,16.2,-86.6,0.7C-85.4,-14.8,-81.2,-29.6,-74.2,-43.3C-67.1,-57,-57.3,-69.6,-44.5,-77.6C-31.6,-85.6,-15.8,-89.1,0.3,-89.6C16.4,-90.1,32.8,-87.7,47.2,-80.6Z" transform="translate(100 100)" />
              </svg>
            </span>
            <Image className='relative' src={'/asset/img/instagramarmoset.png'} alt={'igmarmoset'} width={350} height={450}/>
          </div>
          {/* End Left Content */}

           {/* Right Content */}
           <div className="w-1/2 mx-auto">
             <div className="w-full">
                <img src="https://www.svgrepo.com/show/410173/card-3.svg" alt="logo" className='bg-white w-10 p-1 rounded-xl'data-aos="flip-up" />
                <h1 className='title-promotion' data-aos="fade-left" data-aos-duration="4000">Reedemable NFT</h1>
                <h1 className='subtitle-promotion'>MARMOSET <span className='text-red-400' data-aos="fade-up" data-aos-delay="800"> NFT </span> </h1>
             </div>

             <div className='collect-box'>
               <div className="box mt-10" data-aos="zoom-in-up" data-aos-delay="100">
                 <h1 className='box-title' >New Kind NFT</h1>
                 <h3 className='box-content'>Its Collection And Smart Utility Asset</h3>
               </div>
               <div className="box" data-aos="zoom-in-up" data-aos-delay="500">
                 <h1 className='box-title'>No Bored Again</h1>
                 <h3 className='box-content'>NFT Will be collection experience more fun!</h3>
               </div>
               <div className="box" data-aos="zoom-in-up" data-aos-delay="700">
                 <h1 className='box-title' >New Kind NFT</h1>
                 <h3 className='box-content'>Its Collection And Smart Utility Asset</h3>
               </div>
             </div>
             <br />
             <br />
                <Link href={'https://www.instagram.com/marmoset.party/'}>
                <a href="https://www.instagram.com/marmoset.party/" className='instagram-button' data-aos="zoom-in-left" data-aos-delay="1700">
                  Our Instagram
                </a>
              </Link>
           </div>
          {/* End Right Content */}
          </div>

          {/* Start Product */}
          <div className="pt-32 ml-0 sm:ml-40 lg:ml-96">
              <div className="title pb-20 font-chunky text-7xl">
                  <h1>
                    <span className='text-blue-500'data-aos="zoom-in-up" data-aos-delay="100">P</span>
                    <span className='text-red-500'data-aos="zoom-in-up" data-aos-delay="300">R</span>
                    <span className='text-yellow-500'data-aos="zoom-in-up" data-aos-delay="500">O</span>
                    <span className='text-blue-500'data-aos="zoom-in-up" data-aos-delay="700">D</span>
                    <span className='text-green-500'data-aos="zoom-in-up" data-aos-delay="900">U</span>
                    <span className='text-red-500'data-aos="zoom-in-up" data-aos-delay="1100">C</span>
                    <span className='text-blue-500'data-aos="zoom-in-up" data-aos-delay="1300">t</span>
                  </h1>
                </div>
                
              <div className='home-product'>
                  {Product.map((img) => (
                    <div className="image-product " key={img.alt}>
                    <Image src={img.link} key={img.alt} alt={img.alt} width={320} height={320} data-aos="flip-right" data-aos-delay={img.delay}/>
                    </div>
                  ))}

                  <div className="button-product" data-aos="zoom-in-up" data-aos-delay="700">
                    <Link href={'https://opensea.io/collection/marmosetparty'}>
                      More Project
                    </Link>
                  </div>
              </div>
          </div>
          {/* End Start Product */}

        </div>
        {/* End Page Next Generation of NFT */}

      </Layout>
  ) 
}

export default Home
