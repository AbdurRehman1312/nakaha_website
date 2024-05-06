import React from 'react'

const Button = ({name, style}) => {
  return (
   <div className={` border py-2 px-5  rounded-full  hover:transition hover:ease-in-out hover:duration-500 ${style}`}>
    <h1>{name}</h1>
   </div>
  )
}

export default Button