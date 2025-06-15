import React from 'react'
import { GrStorage } from "react-icons/gr";


const Navbar = () => {
  return (
    <div className='h-10 w-full bg-[#020617]/10 fixed top-0 z-50 p-8  flex justify-between items-center backdrop-blur-2xl'>
      <div className='flex ml-6 text-white items-center gap-2'>
        {<GrStorage size={40}/>}
        <h1 className='text-2xl font-semibold '> BugVaults</h1>
      </div>
      <div className='flex '>
        <ul className='flex gap-5 text-gray-300'>
            <li className='hover:bg-gray-400/10 p-2 rounded-full'>
                Features
            </li>
            <li className='hover:bg-gray-400/10 p-2 rounded-full'>
                How its work
            </li>
            <li className='hover:bg-gray-400/10 p-2 rounded-full'>
                Pricing 
            </li>
        </ul>
      </div>
      <div className='flex gap-5 '>
        <button className='p-2 px-4 bg-neutral-200 cursor-pointer rounded-lg'> Sign in</button>
        <button  className='p-2 px-4 bg-neutral-800 text-white cursor-pointer rounded-lg'> Get started</button>
      </div>
      
    </div>

  )
}

export default Navbar
