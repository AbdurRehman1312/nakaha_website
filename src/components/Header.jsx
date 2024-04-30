import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as images from "../assets"
import Button from './Button'
const Header = () => {

  let links = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
  ];
  return (
    <>
      <div className='bg-primary py-4 text-xl'>
        <div className='flex gap-4 items-center justify-center'>
          <h1 className='text-white'>Want to make an appointment?</h1>
          <Link>
            <Button name="Book Now" />
          </Link>
        </div>
      </div>
      <header className='mt-8 w-[85%] m-auto'>
        <div className='flex justify-between items-center'>
          <div>
            <NavLink to={"/"}><img src={images.logo2} alt="" width={110} /></NavLink>
          </div>
          <div>
            <ul className='flex gap-7'>
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.link}
                  >
                    <Button name={link.name} style="bg-primary text-lg"/>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header