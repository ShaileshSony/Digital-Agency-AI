import React from 'react'
import assets from '../assets/assets.js'
import Title from './Title.jsx'
import {servicesData} from '../assets/assets.js'
import ServiceCard from './ServiceCard.jsx'

const Services = () => {

  const { title, description } = servicesData;

  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="Services" />
        <Title title="How can we help?" desc="We offer a wide range of digital marketing services to help your business grow and succeed online." />
        <div className='flex flex-col md:grid grid-cols-2'>
          {servicesData.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} index={index} />
        ))}
        </div>
    </div>
  )
}

export default Services
