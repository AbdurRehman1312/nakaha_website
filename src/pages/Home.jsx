import React from 'react'
import Hero from '../components/Hero'
import WhatWeOffer from '../components/WhatWeOffer'
import BlogHome from '../components/BlogHome'
import Partners from '@/components/Partners'

const Home = () => {
  return <>
    <div className='container m-auto px-2'>
      <Hero />
      <WhatWeOffer />
      <BlogHome />
      <Partners />
    </div>
  </>
}

export default Home