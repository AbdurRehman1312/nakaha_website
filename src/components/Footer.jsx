import React from 'react'
import * as images from "../assets"
const Footer = () => {
  return (
    <footer className='bg-primary p-5'>
        <img src={images.logo} alt="" className='w-[10%]' />
    </footer>
  )
}

export default Footer