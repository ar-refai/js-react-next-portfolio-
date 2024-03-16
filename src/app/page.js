'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from "next/link";
import HeroText from "@/components/HeroText";
import ParticlesComponent from "@/components/Particles";
import { Button } from "@material-tailwind/react";
import { useRef } from "react";

export default function Home() {
  const sentence1 = "Hi,".split('');
  const sentence2 = "I'am".split('');
  const sentence3 = "Abdelrahman ".split('');
  const sentence4 = "A ".split('');
  const sentence5 = "Web ".split('');
  const sentence6 = "Developer".split('');
  const sentence7 = "!".split('');
  const MotionImage = motion(Image);
  const parentRef = useRef();

  return (
    <motion.div
      className="h-full z-10"
      initial={{ y: "-200vh" }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-48 text-lg text-white ">
        {/* IMAGE CONTAINER */}
        <motion.div
          ref={parentRef}
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6, ease: 'easeIn' }}
          className="md:h-1/2 lg:h-full lg:w-1/2 relative h-[340px] overflow-hidden">
          <MotionImage
            drag
            dragPropagation='true'
            dragConstraints={parentRef}
            priority={true}
            src='/hero1.png'
            alt='hero'
            fill
            sizes="(max-width: auto) , (max-height: auto) "
            className="object-contain cursor-grab active:cursor-grabbing hover:hue-rotate-90 transition-transform ease-out duration-400  hover:-translate-y-1"
          />
        </motion.div>
        {/* TEXT CONTAINER */}
        <motion.div
          initial={{ y: 700 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6, ease: 'easeIn' }}
          className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-2 md:gap-8 items-center justify-around md:justify-center">
          <h1 className="md:text-6xl text-4xl font-bold self-start">
            {sentence1.map((letter, index) => { return (<HeroText key={index}> {letter} </HeroText>) })}
            <br />
            {sentence2.map((letter, index) => { return (<HeroText key={index}> {letter} </HeroText>) })}
            {' '}
            {sentence3.map((letter, index) => { return (<HeroText key={index}> {letter} </HeroText>) })}
            <br />
            {sentence4.map((letter, index) => { return (<HeroText key={index}> {letter} </HeroText>) })}
            {' '}
            {sentence5.map((letter, index) => { return (<HeroText key={index}> {letter} </HeroText>) })}
            {' '}

            {sentence6.map((letter, index) => { return (<HeroText key={index}> {letter} </HeroText>) })}
            {' '}

            {sentence7.map((letter, index) => { return (<HeroText key={index}> {letter} </HeroText>) })}



          </h1>
          {/* DESCRIPTION */}
          <p className="text-base md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects.
          </p>
          {/* BUTTONS */}
          <div className="relative flex gap-4 w-full pb-8 md:pb-0">

            {/* BTN #1 */}
            <div className="relative inline-flex group">
              <div
                className="absolute group-hover:scale-120 transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3ba2d9] via-[#0a74ae55] to-[#1a7eb455] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <Link href="/portfolio" title="Get quote now"
                className="relative inline-flex items-center justify-center px-5 py-2 md:px-8 md:py-4 md:font-bold text-md  text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">
                  My Projects
              </Link>
            </div>

            {/* BTN #2 */ }
            <div className="relative inline-flex group">
              <div
                className="absolute group-hover:scale-110 transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#1a7eb455] via-[#0a74ae55] to-[#3ba2d9] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <Link href="/contact" title="Get quote now"
                className="relative inline-flex items-center justify-center px-5 py-2 md:px-8 md:py-4 md:font-bold text-md  text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">Contact Me
              </Link>
            </div>


            <a href="#_" className="">
            </a>


          </div>
        </motion.div>
      </div>
      <div className='relative -z-10'>
        <ParticlesComponent />
      </div>
    </motion.div>
  );
}
