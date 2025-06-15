"use client"
import React from 'react'
import { GrStorage } from "react-icons/gr";
import { Badge } from '@/components/ui/badge';
import { FaFireAlt } from "react-icons/fa";
import { CopyBlock } from 'react-code-blocks';
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const page = () => {

  return (
 <div className="min-h-screen w-full bg-black absolute">
  {/* Emerald Radial Glow Background */}
  
  <main className=''>
    <div className='bg-black w-full p-2 flex gap-5 justify-between items-center'> 
      <div className='flex ml-6 text-white items-center gap-2'>
              {<GrStorage size={20} className='text-yellow-400'/>}
              <Link  href={"/"} className='text-2xl font-semibold '> BugVaults</Link>
      </div>
      <div className='text-white'>
        <Badge className='text-lg rounded-lg  px-10 hover:bg-yellow-400 hover:text-black  bg-gray-300/20 text-white from-primary/60 to-primary/40 border-primary/30 hover:border-primary/40 transition-all duration-300 group cursor-default space-x-3 flex gap-4'> 
        {<FaFireAlt  className='text-yellow-400 hover:text-white'/>}
        Track your Errors & Learn it </Badge>
      </div>
      <div className='text-white'>
        <button> Dark </button>
      </div>

    </div>
    <div className='flex gap-4 p-2 text-white'>

    <div className=' h-[44rem] w-[50rem] bg-gray-200/10 border border-gray-600  rounded-lg'>
      <div className=' border-b space-y-2 border-gray-800'>
        <Badge className=' mx-45 mt-1 mb-1 px-5 text-lg rounded-md bg-gray-300/10 text-white transition-all duration-300 group cursor-default  '> Errors </Badge>
      </div>
      <div className='m-5'>
        <div>
          <Input placeholder='Title' type='text'/>
             <textarea placeholder="Code Snippet" className="w-full p-2 mt-5 h-32 rounded border border-gray-700" />

          <div className="space-y-2 flex flex-col gap-2">
            <label className="block text-gray-200 text-lg">Description</label>
            <Input type="text" placeholder="Error you got" className="w-full  outline-none p-3 rounded-lg " />
            <Input type="text" placeholder="How did you resolve" className="w-full p-3 rounded-lg " />
            <Input type="text" placeholder="Describe your own" className="w-full p-3 rounded-lg" />
          </div>
          <div className='mt-5'>
          <textarea placeholder="Links" className="w-full flex border  border-gray-600 h-32 gap-5 p-3 rounded" />
          </div>
          <div className='mt-10'>
          <button className="w-full   bg-neutral-200 text-black p-2 rounded hover:cursor-pointer">Save</button>
          </div>
        
        </div>
      </div>
    </div>
    <div className='bg-gray-200/10   border border-gray-600  rounded-lg flex-col w-full'>
      <h2> right side</h2>
    </div>
    </div>
  </main>
    
</div>

  )
}

export default page
