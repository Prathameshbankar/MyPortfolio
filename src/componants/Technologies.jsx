import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
function Technologies() {
  return (
    <div className='border-b border-neutral-900 pb-24 my-4'>
      <h2 className='text-4xl text-center'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 mt-8'>
        <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 mt-8'>
        <FaNodeJs className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 mt-8'>
        <FaGithub className='text-7xl text-white'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 mt-8'>
        <FaPython className='text-7xl text-yellow-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 mt-8'>
        <FaJs className='text-7xl text-yellow-300'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
