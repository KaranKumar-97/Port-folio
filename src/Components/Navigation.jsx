import React from 'react'

const Navigation = () => {
  return (
    <div className='flex max-w-[80vw] h-16 m-auto justify-between '>
      <div className='my-auto font-bold text-[#CD5FF8]'>
        Karan
      </div>
      <div className='flex gap-10 '>
        <button className='hover:border-b-4'>Home</button>
        <button className='hover:border-b-4'>About</button>
        <button className='hover:border-b-4'>Projects</button>
        <button className='hover:border-b-4'>Resume</button>

      </div>
    </div>
  )
}

export default Navigation
