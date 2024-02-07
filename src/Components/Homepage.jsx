import React from 'react'
import Navigation from './Navigation'
import { TypeAnimation } from 'react-type-animation'
import Layout from './Layout'
const Homepage = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className='h-full w-ful'>
        <div className='flex flex-col h-[50vh] w-[50vw] justify-center items-center'>
        <div className=''>
          <p className='text-2xl font-semibold'>Hello There!✋</p>
          <p className='text-2xl font-semibold'>I'm <span className='text-[#CD5FF8]'>karan Kumar</span></p>
          <TypeAnimation sequence={[
              'Software Developer',
              1000,
              'open Source Contributor',
              1000,
              'MERN stack Devloper',
              1000,
              ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
        </div>
        <div className='w-[20%] absolute right-[5vw]'>
          <img src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg" alt="" />
        </div>
        </div>
      </div>
    </>
    
  )
}

export default Homepage