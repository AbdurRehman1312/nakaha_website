import React from 'react'

const Button = ({name, style}) => {
  return (
   <button className={` border py-2 px-5 w-full  rounded-full  hover:transition hover:ease-in-out hover:duration-500 ${style}`}>
    <h1>{name}</h1>
   </button>
  )
}

export default Button