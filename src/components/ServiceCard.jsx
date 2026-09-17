import React, {useRef, useState} from 'react';
// import assets from '../assets/assets.js';
import { motion } from 'motion/react'

const ServiceCard = ({ title, description, icon, index }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null);

    const handleMouseMove = (e) => {
      const bounds = divRef.current.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      setPosition({ x, y });
    }

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: index * 0.2}}
      // viewport={{once: true}}
    className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10' onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setvisible(false)} ref={divRef} onMouseMove={handleMouseMove}>

        <div className={`pointer-event-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{ top: position.y - 150, left: position.x - 150 }} />

           <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>

             <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                <img src={icon} alt={title} className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
             </div>
             <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm mt-2">{description}</p>
             </div>
        
           </div>

        
    </motion.div>
  )
}

export default ServiceCard
