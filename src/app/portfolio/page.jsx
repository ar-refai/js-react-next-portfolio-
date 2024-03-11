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
    url:'https://panda-stores.vercel.app/',
    github:'https://github.com/ar-refai/JS-REACT-Panda-Stores',
    developer:'Abdelrahman Elrefai'

  },
  {
    id: 2,
    title: "JS REACT DudeSphere Social",
    desc: "Social Media Website Created with REACT JS , tailwind CSS and Other Tools.",
    img: "/dude-sphere.png",
    url:'https://dude-sphere.netlify.app/',
    github:'https://github.com/ar-refai/JS-REACT-DudeSphere-Social',
    developer:'Abdelrahman Elrefai'
  },
  {
    id: 3,
    title: "FrontendMentor Challenge huddle landing page",
    desc: "Designing A Responsive huddle-landing-page Using Pure HTML , CSS and FlexBox. ",
    img: "/landing.png",
    url:'https://ar-refai.github.io/FrontendMentor-Newbie-Challenge-13-huddle-landing-page-Cards-Public/',
    github:'https://github.com/ar-refai/FrontendMentor-Newbie-Challenge-13-huddle-landing-page-Cards-Public/tree/main',
    developer:'Abdelrahman Elrefai'
  },
  {
    id: 4,
    title: "FrontendMentor Challenge FAQ Accordion Card",
    desc: "About Designing A Responsive FAQ Accordion Card Using Pure HTML , CSS , JS, and Grid Responsiveness",
    img: "/faq.png",
    url:'https://ar-refai.github.io/FrontendMentor-Newbie-Challenge-17-FAQ-Accordion-Card/',
    github:'https://github.com/ar-refai/FrontendMentor-Newbie-Challenge-17-FAQ-Accordion-Card/tree/main',
    developer:'Abdelrahman Elrefai'
  },
];



const PortfolioPage = () => {
  const ref = useRef();
  const website = useRef(null);
  const coder = useRef(null);


  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);


  console.log(website)
  console.log(coder)
  const MotionImage = motion(Image);


  return (
    <>
      <motion.div
        className="h-full relative z-10"
        initial={{ y: "-200vh" }}
        animate={{ y: '0%' }}
        transition={{ duration: 1 }}
      >
        <div className="w-screen h-[600vh]  relative" ref={ref}>
          {/* INTRO DIV */}
          <div className="flex flex-col">
            <div className="h-[calc(100vh-96px)] flex flex-col gap-2 items-center justify-center text-8xl font-extrabold text-center">
            <div>
                My Works
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
          <div className="  sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div style={{ x }} className="  flex">
              <div className="h-screen w-screen  flex items-center justify-center bg-gradient-to-t from-zinc-950 to-slate-950" />

              {items.map((item) => (
                <div
                  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-t border-0 from-zinc-950 to-slate-950`}
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

      </motion.div>
    </>
  )
}

export default PortfolioPage