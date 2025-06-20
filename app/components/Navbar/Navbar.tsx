import React from 'react'
import { GrStorage } from "react-icons/gr";


const Navbar = () => {
  return (
    <div className='h-5 w-[80rem] bg-[#020617]/5 fixed top-0 z-50 p-8  ml-30 rounded-lg flex justify-between items-center backdrop-blur-3xl'>
      <div className='flex ml-6 text-white items-center gap-2'>
        {<GrStorage size={40} className='text-yellow-500/80 '/>}
        <h1 className='text-2xl font-semibold '> BugVaults</h1>
      </div>
      <div className='flex '>
        <ul className='flex gap-5 text-gray-300'>
            <li className='hover:bg-yellow-500/10 p-2 rounded-full'>
                Features
            </li>
            <li className='hover:bg-yellow-500/10 p-2 rounded-full'>
                How its work
            </li>
            <li className='hover:bg-yellow-500/10 p-2 rounded-full'>
                Pricing 
            </li>
        </ul>
      </div>
      <div className='flex gap-5 '>
        <button className='p-2 px-4 bg-neutral-900 text-white cursor-pointer rounded-lg'> Sign in</button>
        <button  className='p-2 px-4 bg-yellow-500 text-black cursor-pointer rounded-lg'> Get started</button>
      </div>
      
    </div>

  )
}

export default Navbar
