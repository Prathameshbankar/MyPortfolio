import React from 'react';
import pic from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "motion/react"
function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-4 text-center text-4xl text-white'>About me</h1>
      <span className='text-neutral-500'></span>
      <div className='flex flex-wrap'>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}} className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img src={pic} alt="" className='rounded-lg w-1/2' />
          </div>
        </motion.div>
        <motion.div
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:100}}
         transition={{duration:0.5}}
         className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <p className='text-justify max-w-xl my-2 py-6 max-sm:p-5'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
