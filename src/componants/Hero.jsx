import React from 'react';
import { HERO_CONTENT } from '../constants';
import pic from '../assets/Pic.jpg';

function Hero() {
  return (
    <div className="mx-8 lg:mx-28 border-b border-neutral-900 pb-8 lg:pb-12">
      <div className="flex flex-wrap items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl">
             Bankar Prathamesh
            </h1>
            <span className="mt-4 inline-block bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-4xl font-medium text-transparent">
              Developer
            </span>
          </div>
          <p className="my-4 max-w-xl py-6 font-light tracking-tight text-center lg:text-left">
            {HERO_CONTENT}
          </p>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={pic}
            alt="Profile"
            className="w-[300px] h-[300px] rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
