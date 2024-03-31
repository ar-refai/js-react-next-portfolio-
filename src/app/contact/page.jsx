'use client';
import { easeInOut, motion, spring } from 'framer-motion';
import ParticlesComponent from '@/components/Particles';
import { useState } from "react";
import { Button } from '@material-tailwind/react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  // INTRO TEXT
  const TEXT = "CONTACT ME";
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
  const MotionButton = motion(Button);

  return (
    <motion.div
      className="h-screen bg-gradient-to-b from-zinc-950 to-slate-950"
      initial={{ y: "-200vh" }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER  */}
        <div className="h-1/6 lg:h-[calc(100vh-96px)] lg:w-1/2 text-4xl md:text-7xl font-bold flex items-center justify-center text-center">
          {TEXT.split('').map((letter, i) => (
            <motion.span
            initial ={{opacity:[0.5,1]}} 
            animate={{opacity:0.3}}
            transition={{duration:1 ,repeat:Infinity , type: 'spring', stiffness: 80, damping:12 ,delay:i*0.5}}
              key={i}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
        {/* FORM CONTAINER */}
        <div className="h-5/6 lg:h-full lg:w-1/2 scale-[0.8] md:scale-100">
          <motion.div>
            <div className="py-4 flex flex-col justify-center sm:py-12 ">
              <div className="relative group sm:max-w-xl sm:mx-auto ">
                {/* THE UNDER CARD #1 */}
                <motion.div
                  className="absolute px-2 inset-0 bg-gradient-to-r from-sky-800 opacity-50 to-sky-900 shadow-lg transform group-hover:rotate-6 -rotate-6 rounded-lg sm:rounded-3xl duration-200 ease-out transition-all">
                </motion.div>
                {/* THE UNDER CARD #2 */}
                <motion.div
                  className="absolute px-2 inset-0 bg-gradient-to-r from-sky-900 opacity-50 to-sky-800 shadow-lg transform group-hover:rotate-12 -rotate-12  rounded-lg sm:rounded-3xl duration-200 ease-out transition-all">
                </motion.div>
                {/* THE UPPER CARD */}
                <motion.div className="text-white px-6 md:px-8 relative py-6 bg-gradient-to-br from-sky-700 to-sky-900 shadow-lg rounded-lg sm:rounded-3xl sm:p-14 duration-200 ease-out transition-all group-hover:rotate-2">

                  <div className="text-center pb-6">
                    <h1 className="text-3xl font-bold mb-2">Contact Me!</h1>

                    <p className="text-gray-300">
                      Fill up the form below to send me a message.
                    </p>
                  </div>

                  <form ref={form} onSubmit={sendEmail}>
                    <label className="font-semiBold text-sky-50  font-bold" htmlFor="msg"> Dear Abdelrahman, </label>
                    <textarea id='msg'
                      className="shadow mb-2 min-h-0 appearance-none  bg-transparent border-b h-64 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-sky-200 transition-all ease-out duration-200"
                      type="text" placeholder="Type your message here..." name="user-message" style={{height: 121}}></textarea>
                    
                    <label className="font-semiBold text-sky-50  font-bold" htmlFor="name">Yours : </label>

                    <input id='name'
                      className="shadow mb-2 appearance-none bg-transparent border-b w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-sky-400 transition-all ease-out duration-200"
                      type="text" placeholder="Name" name="user-name" />

                      <label className="font-semiBold text-sky-50  font-bold" htmlFor="email">My E-mail is : </label>
                    <input id="email"
                      className="shadow mb-2 appearance-none bg-transparent border-b w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-sky-400 transition-all ease-out duration-200"
                      type="email" placeholder="Email" name="user-email" />


                    {success && <span className='text-green-400'>Your message sent successfully.</span>}
                    {error && <span className=' text-red-400'>Something went wrong.</span>}

                    <div className="flex justify-end cursor">
                      <div className="relative inline-flex group/inner">
                        <Button 
                          type='submit'
                          className="relative inline-flex items-center justify-center cursor-pointer px-6 py-3 text-lg font-bold text-stone-950 transition-all bg-sky-50 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 z-20 ring-stone-950  y-950 hover:shadow-xl focus:scale-90 hover:translate-x-2"
                          >
                          Send ➤
                          </Button>
                        
                        
                      </div>
                        
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