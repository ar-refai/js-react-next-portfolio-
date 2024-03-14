'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link';
import ParticlesComponent from '@/components/Particles';
import BgCard from '@/components/utils/ProjectCard';
import WebIllustration from '../../../public/works-illustration.svg';
import Coding from '../../../public/coding.svg';


const items = [
  {
    id: 1,
    title: "JS REACT Panda Stores E-Commerce",
    desc: "E-Commerce Store Created By Me , Using REACT, Sanity, Next And Tailwind",
    img: '/panda-stores.png',
    url: 'https://panda-stores.vercel.app/',
    github: 'https://github.com/ar-refai/JS-REACT-Panda-Stores',
    developer: 'Abdelrahman Elrefai'

  },
  {
    id: 2,
    title: "JS REACT DudeSphere Social",
    desc: "Social Media Website Created with REACT JS , tailwind CSS and Other Tools.",
    img: "/dude-sphere.png",
    url: 'https://dude-sphere.netlify.app/',
    github: 'https://github.com/ar-refai/JS-REACT-DudeSphere-Social',
    developer: 'Abdelrahman Elrefai'
  },
  {
    id: 3,
    title: "FrontendMentor Challenge huddle landing page",
    desc: "Designing A Responsive huddle-landing-page Using Pure HTML , CSS and FlexBox. ",
    img: "/landing.png",
    url: 'https://ar-refai.github.io/FrontendMentor-Newbie-Challenge-13-huddle-landing-page-Cards-Public/',
    github: 'https://github.com/ar-refai/FrontendMentor-Newbie-Challenge-13-huddle-landing-page-Cards-Public/tree/main',
    developer: 'Abdelrahman Elrefai'
  },
  {
    id: 4,
    title: "FrontendMentor Challenge FAQ Accordion Card",
    desc: "About Designing A Responsive FAQ Accordion Card Using Pure HTML , CSS , JS, and Grid Responsiveness",
    img: "/faq.png",
    url: 'https://ar-refai.github.io/FrontendMentor-Newbie-Challenge-17-FAQ-Accordion-Card/',
    github: 'https://github.com/ar-refai/FrontendMentor-Newbie-Challenge-17-FAQ-Accordion-Card/tree/main',
    developer: 'Abdelrahman Elrefai'
  },
];



const PortfolioPage = () => {
  const TEXT = "MY PROJECTS";
  const ref = useRef();
  const website = useRef(null);
  const coder = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);


  const MotionImage = motion(Image);
  const MotionLink = motion(Link);

  return (
    <>
    
      <motion.div
        className="h-full relative z-10"
        initial={{ y: "-200vh" }}
        animate={{ y: '0%' }}
        transition={{ duration: 1 }}
      >
        <div className="w-screen h-[600vh] relative" ref={ref}>
          {/* INTRO DIV */}
          <div className="flex flex-col">
            <div className="h-[calc(100vh-96px)] flex flex-col gap-2 items-center justify-center text-5xl md:text-8xl font-bold text-center">
              <div>
              {TEXT.split('').map((letter,i)=> (
            <motion.span 
            initial ={{opacity:[0.5,1]}} 
            animate={{opacity:0.3}}
            transition={{duration:1 ,repeat:Infinity , type: 'spring', stiffness: 80, damping:12 ,delay:i*0.5}}
            key={i}>
              {letter}
            </motion.span>
          ))}
              </div>
              {/* <div className='relative'>
                <MotionImage 
                priority
                src={WebIllustration}
                alt="web sites"
                width={580}
                height={580}
                ref={website}
                className='relative'
                />
                <MotionImage
                priority
                src={Coding}
                alt="web sites"
                width={280}
                height={280}
                className='absolute -left-20 bottom-5'
                ref={coder}
                />
              </div> */}

            </div>
          </div>
          {/* HORIZONTAL DIVS */}
          <div className="h-screen w-screen bg-slate-950 my-0  sticky top-0 flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex flex-row justify-between items-center" >
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-t from-zinc-950 to-slate-950" />

              {items.map((item) => (
                <div
                  className={`w-screen h-screen flex gap-4 items-center justify-center md:gap-0 m-0 border-0 bg-gradient-to-t from-zinc-950 to-slate-950`}
                  key={item.id}
                >
                  <BgCard key={item.id} item={item} />
                  <div className='relative z-0'>
                    <ParticlesComponent />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>


        </div>
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center bg-gradient-to-b from-zinc-950 to-slate-900 text-white text-center">
          {/* THE TITLE OF DIV */}
          <h1 className='text-5xl'>Hire Me Now!</h1>
          {/* THE SVG BUTTON */}
          <div className="relative">
            <motion.svg 
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px]text-white"
              animate={{rotate:360}}
              transition={{duration:8 ,ease:'linear', repeat:Infinity}}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#fff">
                <textPath xlinkHref='#circlePath' className='text-2xl'>Full Stack Web Developer</textPath>
              </text>
            </motion.svg>
            {/* HIRE ME LINK */}
                <MotionLink
                whileHover={{
                  rotate: [0 , 50 , 0],
                  scale: 1.2,
                  transition: { type: 'spring', stiffness: 900, damping: 11 },
              }}
                href='/contact' 
                className='w-16 h-16 md:w-20 md:h-20 absolute top-0 left-0 right-0 bottom-0 m-auto bg-white text-zinc-950 rounded-full flex items-center justify-center hover:font-extrabold hover:text-zinc-900'>
                Hire Me
                </MotionLink>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default PortfolioPage