import Link from 'next/link'

export default function SubHero() {


  return (
    <div className="w-full mt-20 md:mt-0 h-[350px] md:h-[300px] mb-96 bg-cyan-900 text-center   space-y-5 font-chunky">

        <div className="content  fadeIn">
            <h1 className=' text-3xl py-10  capitalize mb-5 font-bold md:mb-0 md:text-5xl fadeIn' data-aos="fade" data-aos-duration="3000" >COMMUNITY IS HERE ! </h1>
            <h1 className='subheading  capitalize font-thin text-sm md:text-md fadeIn pb-10' data-aos="fade" data-aos-duration="3000" >thanks for you to visit this community round! join our discord server to update regarding the the product </h1>
              <Link href={'https://discord.gg/k3p9TqCEFx'}>
                  <a href='https://discord.gg/k3p9TqCEFx' className="px-5 py-3 border-4 hover:shadow-[0_5px_45px_white]" data-aos="fade-up" data-aos-duration="3000">Join Discord</a>
              </Link>
        </div>
       
       <div className="mb-20 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#164e63"  d="M0,96L48,122.7C96,149,192,203,288,234.7C384,267,480,277,576,245.3C672,213,768,139,864,128C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
       </div>
    </div>
  )
}
