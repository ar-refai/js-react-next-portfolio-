'use client'
import React from 'react';
import {motion} from 'framer-motion'; 
import ParticlesComponent from '@/components/Particles';
const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{y:"-200vh"}}
      animate={{y:'0%'}}
      transition = {{duration:1}}
    >
      Contact Page
      <div className='relative z-0'>
      <ParticlesComponent />
      </div>
    </motion.div>
  )
}

export default ContactPage