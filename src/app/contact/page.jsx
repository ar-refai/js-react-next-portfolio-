'use client'
import {motion, spring} from 'framer-motion'; 
import ParticlesComponent from '@/components/Particles';


import { useState } from "react";

const ContactPage = () => {
  const TEXT  = `CONTACT ME NOW!`
  return (
    <motion.div
      className="h-full"
      initial={{y:"-200vh"}}
      animate={{y:'0%'}}
      transition = {{duration:1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER  */}
        <div className="h-1/2 lg:h-full lg:w-1/2">
          <motion.div>

          </motion.div>
        </div>
        {/* FORM CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 text-7xl flex items-center">
          {TEXT.split('').map((letter,i)=> (
            <motion.span 
            initial ={{opacity:[0.4,1]}} 
            animate={{opacity:0.2}}
            transition={{duration:1 ,repeat:Infinity , type: 'spring', stiffness: 100, damping: 48 ,delay:i*0.5}}
            key={i}>
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
      

      <div className='relative z-0'>
      <ParticlesComponent />
      </div>
    </motion.div>
  )
}

export default ContactPage