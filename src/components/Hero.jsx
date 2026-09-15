import React from 'react';
import assets from '../assets/assets.js';

const Hero = () => {
  return (
    <div id='hero' className="flex flex-col items-center justify-center gap-6 text-center py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-700 dark:text-white">

        <div className="flex items-center gap-2 border border-gray-300 p-1.5 pr-2 rounded-full">
            <img src={assets.group_profile} className="w-20" alt=""/>
            <p className="text-xs font-medium">Trusted by 10k people</p>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[84px] xl:leading-[95px] font-medium dark:text-white max-w-5xl leading-snug">
          Turning imagination into <span className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent">digital</span> impact.
        </h1>

        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>
          Creating meaningful connections and turning big ideas into interactive digital experiences.
        </p>

        <div className="relative">
          <img src={assets.hero_img} className='w-full max-w-6xl' alt="Hero" />
          <img src={assets.bgImage1} className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' alt="Background" />
        </div>

    </div>
  )
}

export default Hero
