import * as React from 'react'
import Layout from '../../components/Roadmap/Layout'

 const roadmapData =  [
  {
     title : 'Phase 1 Introduce',
     content :  [
        '- Will launch 50 NFT',
        '- Build offical website and community',
        '- Holders of 7 nft items we will get free shoe washing at our media partner',
        '- Giveaway Marmoset party NFT and for holder',
        '- 25 NFT sold will proceed to phase 2'
     ]     
  },

  {
     title : 'Phase 2 Grow up',
     content :  [
       '- Will continue launch 125 NFT ',
       '- Marketing with local celebrities ',
       '- A portion of the sales produceed will be used to purchases and support benefits community nft',
       '- Top collectors will get special edition' ,
       '- 100 NFT sold will proceed to phase 3',
     ]
  },

  {
     title : 'Phase 3  invasion',
     content : [
       '- Will continue lunch 500 NFT ',
      '- T-shirt special edition for holder' ,
       '- changed nft design edition from 2D to 3D',
       '- Creating community events',
       '- Collaboration with more local artist',
       '- 350 NFT sold will proceed to phase 4',
     ]
  },
  {
     title : 'Phase 4 Dominate',
     content : [
       '- Will continue launch 1500 NFT',
       '- Partnership with celebrities ',
       '- every purchase of our special nft can be customized for free',
       '- Our NFT can be exchanged for food and drinks by collecting as many as 150 of our NFT items through places and drinks that we work with.',
       '- More reward for holder (t-shirt special edition)',
       '- 1000 NFT sold will proceed to phase 5'
     ] 
  },
  {
     title : 'Phase 5 Final',
     content : [
       '- Will continue launch 1999',
       '- Marketing with famous celebrities ',
      '- utility to the greatest holder',
       '- nft we will also make games and buy land in the metaverse',
       '- help business people to promote their business through our 3D metaverse',
     ] 
  },
]

roadmapData.join('<br />');



export default function Index() {

  return (
   <Layout className='bg-main text-white'>
     <section className='w-[800px] sticky'>
          <div className="sticky top-10  py-3 z-10 shadow-xl shadow-white">
            <h2 className="group-date" data-aos="zoom-in-right" data-aos-delay="700">ROADMAP</h2>
          </div>
           {
            roadmapData.map((data) => ( 
                <div className="timeline" key={data.title} data-aos="fade-down" data-aos-delay="700">

                <div className="relative">
                  <div className="dot" data-aos="flip-up" data-aos-delay="1100"></div>
                  <div className="pl-10">
                    <span className='timeline-title' data-aos="zoom-in-right" data-aos-delay="1200">{data.title}</span>
                    <p className='font-bold text-xl mt-10' data-aos="zoom-in-right" data-aos-delay="1700">
                      {data.content.map((tag) => (
                        <h1 key={tag}>{tag}</h1>
                      ))} 
                    </p>
                  </div>
                </div>

              </div>
             ))
          }
         
     </section>
   </Layout>
  )
}
