'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from "next/link";
import HeroText from "@/components/HeroText";
import ParticlesComponent from "@/components/Particles";
import { Button  } from "@material-tailwind/react";

export default function Home() {
  const sentence1 = "Hi,".split('');
  const sentence2 = "I'am".split('');
  const sentence3 = "Abdelrahman ".split('');
  const sentence4 = "A ".split('');
  const sentence5 = "Web ".split('');
  const sentence6 = "Developer".split('');
  const sentence7 = "!".split('');


  return (
    <motion.div
      className="h-full z-10"
      initial={{y:"-200vh"}}
      animate={{y:'0%'}}
      transition = {{duration:1}}
    >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-48 text-lg text-white">
        {/* IMAGE CONTAINER */}
        <motion.div initial={{y:-300}} animate={{y:0}} transition={{delay:0.6, ease:'easeIn'}} className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            priority= {true}
            src='/hero1.png'
            alt='hero'
            fill
            sizes="(max-width: auto) , (max-width: auto) "

            className="object-contain"
          />
        </motion.div>
        {/* TEXT CONTAINER */}
        <motion.div initial={{y:700}} animate={{y:0}} transition={{delay:0.6, ease:'easeIn'}} className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="md:text-6xl text-5xl font-bold self-start">
            {sentence1.map((letter,index)=>{return  (<HeroText key={index}> {letter} </HeroText>)})}
            <br/>
            {sentence2.map((letter,index)=>{return  (<HeroText key={index}> {letter} </HeroText>)})}
            {' '}
            {sentence3.map((letter,index)=>{return  (<HeroText key={index}> {letter} </HeroText>)})}
            <br/>
            {sentence4.map((letter,index)=>{return  (<HeroText key={index}> {letter} </HeroText>)})}
            {' '}
            {sentence5.map((letter,index)=>{return  (<HeroText key={index}> {letter} </HeroText>)})}
            {' '}

            {sentence6.map((letter,index)=>{return  (<HeroText key={index}> {letter} </HeroText>)})}
            {' '}

            {sentence7.map((letter,index)=>{return  (<HeroText key={index}> {letter} </HeroText>)})}



          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="relative flex gap-4 w-full">
            <Link className="relative px-6 py-3 font-bold text-black group" href='/portfolio'>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-slate-800"></span>
            <span className="relative">My Work</span>
            </Link>
            <Link className="relative px-6 py-3 font-bold text-black group" href='/contact'>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-slate-800"></span>
            <span className="relative">Contact Me</span>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className='relative -z-10'>
      <ParticlesComponent/>
      </div>
    </motion.div>
  );
}
