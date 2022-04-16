import React from 'react'
import Layout from '../../components/Rarity/Layout'

export default function index() {
  const rarity = [
    {
      color: 'rgb(239 68 68 / var(--tw-bg-opacity)', 
      title: '???',
      multiple: 'x5',
      eth: '0.1 ETH'
    },
    {
      color: 'rgb(234 179 8 / var(--tw-bg-opacity)', 
      title: 'legendary items',
      multiple: 'x10',
      eth: '0.05 ETH'
    },
    {
      color: 'rgb(2 132 199 / var(--tw-bg-opacity)', 
      title: 'epic items',
      multiple: 'x15',
      eth: '0.01 ETH'
    },
    {
      color: 'rgb(96 165 250 / var(--tw-bg-opacity)', 
      title: 'rare items',
      multiple: 'x30',
      eth: '0.005 ETH'
    },
    {
      color: 'rgb(241 245 249 / var(--tw-bg-opacity)', 
      title: 'basic items',
      multiple: 'x40',
      eth: '0.001 ETH'
    },
  ]
  return (
    <Layout className='bg-main text-white'>
            <div>
              {/* Rarity Content */}
              <div className=" grid grid-cols-1 text-center uppercase font-nunito">
    
                 {rarity.map((rar) => (
                   <div key={rar.title}>
                          <div className="card hover:scale-125  max-w-sm py-10 rounded-xl" style={{ background: rar.color }} data-aos="fade-up" data-aos-delay="1100">
                          </div>
                          <div className="desc py-5 space-y-4">
                            <h1>{rar.title}</h1>
                            <h1>{rar.multiple}</h1>
                            <h1>{rar.eth}</h1>
                          </div>
                   </div>  
                 ))}

              </div>
              
            </div>
    </Layout>
  )
}
