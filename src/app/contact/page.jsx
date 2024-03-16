'use client';
import { motion, spring } from 'framer-motion';
import ParticlesComponent from '@/components/Particles';
import { useState } from "react";
import { Button } from '@material-tailwind/react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  // INTRO TEXT
  const TEXT = "CONTACT";
  // SUCCESS ERROR MESSAGES
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // REF FOR FORM
  const form = useRef();
  // FORM SUBMIT FUNCTION
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    console.log(process.env.NEXT_PUBLIC_SERVICE_ID)
    emailjs
      .sendForm('service_yjqw0fq', 'template_24wxvg9', form.current, {
        publicKey: 'quDQiTGyVcGFEB5zi',
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          form.current.reset();
        },
      );
  };
  

  return (
    <motion.div
      className="h-screen bg-gradient-to-b from-zinc-950 to-slate-950"
      initial={{ y: "-200vh" }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER  */}
        <div className="h-1/6 lg:h-[calc(100vh-96px)] lg:w-1/2 text-5xl font-bold flex items-center justify-center text-center">
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
        <div className="h-5/6 lg:h-full lg:w-1/2 bg-">
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

                  <form ref={form} onSubmit={sendEmail}>
                    <label className="font-semiBold text-sky-200" htmlFor="msg"> Dear Abdelrahman, </label>
                    <textarea id='msg'
                      className="shadow mb-4 min-h-0 appearance-none  bg-transparent border-b h-64 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-sky-200 transition-all ease-out duration-200"
                      type="text" placeholder="Type your message here..." name="user-message" style={{height: 121}}></textarea>
                    
                    <label className="font-semiBold text-sky-200" htmlFor="name">Yours : </label>

                    <input id='name'
                      className="shadow mb-4 appearance-none bg-transparent border-b w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-sky-400 transition-all ease-out duration-200"
                      type="text" placeholder="Name" name="user-name" />

                      <label className="font-semiBold text-sky-200" htmlFor="email">My E-mail is : </label>
                    <input id="email"
                      className="shadow mb-4 appearance-none bg-transparent border-b w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-sky-400 transition-all ease-out duration-200"
                      type="email" placeholder="Email" name="user-email" />


                    {success && <span className='text-green-400'>Your message sent successfully.</span>}
                    {error && <span className=' text-red-400'>Something went wrong.</span>}
                    <div className="flex justify-end">
                      <input type='submit'
                        className="shadow cursor-pointer  hover:bg-stone-800 bg-stone-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-sky-400 transition-all ease-out duration-200"
                        value='Send ➤'
                        />
                          
                        
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