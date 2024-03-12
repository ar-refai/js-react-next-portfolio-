'use client'
import { motion, spring } from 'framer-motion';
import ParticlesComponent from '@/components/Particles';


import { useState } from "react";

const ContactPage = () => {
  const TEXT = "CONTACT NOW";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER  */}
        <div className="h-1/6 lg:h-full lg:w-1/2 text-4xl md:text-6xl flex items-center justify-center text-center">
          {TEXT.split('').map((letter, i) => (
            <motion.span
              initial={{ opacity: [0.4, 1] }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, repeat: Infinity, type: 'spring', stiffness: 100, damping: 48, delay: i * 0.5 }}
              key={i}>
              {letter}
            </motion.span>
          ))}
        </div>
        {/* FORM CONTAINER */}
        <div className="h-5/6 lg:h-full lg:w-1/2">
          <motion.div>
            <div className="py-6 flex flex-col justify-center sm:py-12">
              <div className="relative group py-3 sm:max-w-xl sm:mx-auto">
                {/* THE UNDER CARD */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg transform group-hover:rotate-6 -rotate-6  sm:-rotate-6 rounded-lg sm:rounded-3xl duration-200 ease-out transition-all">
                </motion.div>
                {/* THE UPPER CARD */}
                <motion.div className="text-white relative px-4 py-10 bg-gradient-to-br from-gray-700 to-sky-900 shadow-lg rounded-lg sm:rounded-3xl sm:p-20 duration-200 ease-out transition-all group-hover:-rotate-3">

                  <div className="text-center pb-6">
                    <h1 className="text-3xl">Contact Me!</h1>

                    <p className="text-gray-300">
                      Fill up the form below to send me a message.
                    </p>
                  </div>

                  <form>
                    <input
                      className="shadow mb-4 appearance-none bg-transparent border-b w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Name" name="name" />

                    <input
                      className="shadow mb-4 appearance-none bg-transparent border-b w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                      type="email" placeholder="Email" name="email" />

                    <input
                      className="shadow mb-4 appearance-none bg-transparent border-b w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Subject" name="_subject" />

                    <textarea
                      className="shadow mb-4 min-h-0 appearance-none  bg-transparent border-b h-64 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Type your message here..." name="message" style={{height: 121}}></textarea>

                    <div className="flex justify-end">
                      <input
                        className="shadow cursor-pointer  hover:bg-stone-800 bg-stone-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="Send ➤" />
                  
                    </div>

                  </form>
                </motion.div>
              </div>
            </div>
        </motion.div>
        </div>
      </div >


  <div className='relative z-0'>
    <ParticlesComponent />
  </div>
    </motion.div >
  )
}

export default ContactPage