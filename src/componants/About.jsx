import React from 'react';
import pic from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-4 text-center text-4xl text-white'>About me</h1>
      <span className='text-neutral-500'></span>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img src={pic} alt="" className='rounded-lg w-1/2' />
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <p className='text-justify max-w-xl my-2 py-6 max-sm:p-5'>{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
