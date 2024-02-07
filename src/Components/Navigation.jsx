import React from 'react'
import { NavLink, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className='flex max-w-[80vw] h-16 m-auto justify-between '>
      <div className='my-auto font-bold text-[#CD5FF8]'>
        Karan
      </div>
      <div className='flex gap-10 '>
        <button ><NavLink to="/">
                  Home
                </NavLink></button>
        <button ><NavLink to="/about">
                  About
                </NavLink></button>
        <button ><NavLink to="/project">
                  Projects
                </NavLink></button>
        <button ><NavLink to="/resume">
                  Resume
                </NavLink></button>

      </div>
    </div>
  )
}

export default Navigation
