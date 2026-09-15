import React from 'react'
import Title from './Title'
import { workData } from '../assets/assets.js'

const OurWork = () => {

    // const { title, description, image } = workData;

  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title="Our latest work" desc="From strategy to execution, we craft digital solutions that move your business forward." />

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
          {workData.map((work, index) => (
            <div key={index} className='hover:scale-102 duration-500 transition-all cursor pointer'>
                <img src={work.image} alt={work.title} className='w-full rounded-xl object-cover'/>
                <h3 className='text-lg font-medium mt-3 mb-2'>{work.title}</h3>
                <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
            </div>
          ))}
        </div>

    </div>
  )
}

export default OurWork
