'use client'
import { motion, useInView, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image';
import svgIcon from '../../../public/signature.svg';
import Brain from '@/components/Brain';
import ParticlesComponent from '@/components/Particles';
import TooltipButton from '@/components/utils/TooltipButton';

const SKILLS = [
  { name: 'C#' },
  { name: '.NET 8' },
  { name: 'ASP.NET Core' },
  { name: 'Clean Architecture' },
  { name: 'Onion Architecture' },
  { name: 'SOLID' },
  { name: 'Domain-Driven Design (DDD)' },
  { name: 'TypeScript' },
  { name: 'React.js' },
  { name: 'Next.js' },
  { name: 'SQL Server' },
  { name: 'Docker' },
  { name: 'RESTful API' },
  { name: 'Azure OpenAI' },
  { name: 'Git' }
]

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { once: true });

  const bioRef = useRef();
  const isBioInView = useInView(bioRef, { once: true });

  const expRef = useRef();
  const isExpInView = useInView(expRef, { once: true });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll overflow-x-hidden lg:flex relative z-10" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-2/3">
          {/* BIO */}
          <div className="flex flex-col gap-12 justify-center" ref={bioRef}>
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/hero-face.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIO TITLE */}
            <motion.h1 initial={{ x: '-300px' }} animate={isBioInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='font-bold text-2xl'>
              BIOGRAPHY
            </motion.h1>

            {/* BIO DESC */}
            <motion.p initial={{ y: '300px' }} animate={isBioInView ? { y: 0 } : {}} transition={{ delay: 0.2 }} className='text-lg'>
            I am a Backend Engineer with 3+ years of experience building production ASP.NET Core APIs and enterprise systems. I specialize in Clean/Onion Architecture, SOLID principles, and Domain-Driven Design (DDD).
            </motion.p>

            <motion.p initial={{ y: '300px' }} animate={isBioInView ? { y: 0 } : {}} transition={{ delay: 0.2 }} className='text-lg'>
            I have a strong track record of delivering multi-tenant platforms, automated financial workflows, and secure payment gateway integrations for real production traffic.
            </motion.p>
            <motion.p initial={{ y: '300px' }} animate={isBioInView ? { y: 0 } : {}} transition={{ delay: 0.2 }} className='text-lg'>
            Currently, I am extending this backend foundation into AI-enabled application development, integrating LLM APIs with structured output and tool calling into ASP.NET Core services.
            </motion.p>
            {/* BIO QUOTE */}

            <motion.span initial={{ y: '300px' }} animate={isBioInView ? { y: 0 } : {}} transition={{ delay: 0.2 }} className='italic'>
              Hope You Find it descriptive.
            </motion.span>

            {/* BIOGRAPHY SIGN SVG*/}
            <motion.div initial={{ x: '-300px' }} animate={isBioInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="self-end">
              <Image
                src={svgIcon}
                alt="My SVG"
                width={400}
                height={200}
              />
            </motion.div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#ffffff" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS Container*/}
          <div className="flex flex-col gap-12 justify-center " ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1 initial={{ x: '-300px' }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='font-bold text-2xl'>
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div initial={{ x: '-300px' }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.3 }} className=" flex gap-4 flex-wrap">
              {
                SKILLS.map((skill, i) =>
                (<TooltipButton key={i}>
                  {skill}
                </TooltipButton>)
                )
              }


            </motion.div>
            {/* SKILL SCROLL SVG */}
            <div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#ffffff"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#ffffff" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#ffffff"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col text-zinc-950 gap-12 justify-center pb-48 pt-24" ref={expRef}>
            <motion.h1 initial={{ x: '-300px' }} animate={isExpInView ? { x: 0 } : {}} transition={{ delay: 0.1 }} className='font-bold text-2xl text-white'>EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <div className="flex flex-col">

              {/* JOB 3 (Newest) */}
              <div className="flex justify-between h-64 sm:h-56 group">
                {/* LEFT */}
                <motion.div initial={{ x: '-300px' }} animate={isExpInView ? { x: 0 } : {}} transition={{ delay: 0.3 }} className="w-1/3">
                  <div className="bg-white p-3 font-bold text-sm md:text-lg rounded-b-lg rounded-s-lg w-fit shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-shadow duration-300">.NET Core API Developer</div>
                  <div className="p-2 md:p-3 text-[12px] md:text-sm text-gray-300 italic group-hover:text-white transition-colors duration-300">Architected scalable RESTful APIs on ASP.NET Core (.NET 8). Integrated Stripe/Aman and optimized SQL Server queries.</div>
                  <div className="p-2 md:p-3 text-sky-400 text-[11px] md:text-sm font-semibold">10/2024 - Present</div>
                  <div className="p-1 rounded bg-white text-[11px] md:text-sm font-semibold w-fit">Merge for Digital Solutions</div>
                </motion.div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-700 rounded relative group-hover:bg-sky-700 transition-colors duration-300">
                    <div className="absolute w-4 h-4 rounded-full ring-4 ring-sky-900 top-4 -left-1.5 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.9)] group-hover:scale-125 transition-all duration-300"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* JOB 2 (Middle) */}
              <div className="flex justify-between h-64 sm:h-56 group">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-700 rounded relative group-hover:bg-sky-700 transition-colors duration-300">
                    <div className="absolute w-4 h-4 rounded-full ring-4 ring-sky-900 top-4 -left-1.5 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.9)] group-hover:scale-125 transition-all duration-300"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <motion.div initial={{ x: '300px' }} animate={isExpInView ? { x: 0 } : {}} transition={{ delay: 0.5 }} className="w-1/3">
                  <div className="bg-white p-3 font-bold text-sm md:text-lg rounded-b-lg rounded-e-lg w-fit shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-shadow duration-300">Full Stack Developer</div>
                  <div className="p-2 md:p-3 text-[12px] md:text-sm text-gray-300 italic group-hover:text-white transition-colors duration-300">Refactored legacy systems into modular architectures. Built secure RESTful APIs with role-based auth.</div>
                  <div className="p-2 md:p-3 text-sky-400 text-[11px] md:text-sm font-semibold">04/2024 - 10/2024</div>
                  <div className="p-1 rounded bg-white text-[11px] md:text-sm font-semibold w-fit">Staron Egypt</div>
                </motion.div>
              </div>

              {/* JOB 1 (Oldest) */}
              <div className="flex justify-between h-64 sm:h-56 group">
                {/* LEFT */}
                <motion.div initial={{ x: '-300px' }} animate={isExpInView ? { x: 0 } : {}} transition={{ delay: 0.7 }} className="w-1/3">
                  <div className="bg-white p-3 font-bold text-sm md:text-lg rounded-b-lg rounded-s-lg w-fit shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-shadow duration-300">DB Admin & Full Stack Developer</div>
                  <div className="p-2 md:p-3 text-[12px] md:text-sm text-gray-300 italic group-hover:text-white transition-colors duration-300">Maintained large-scale Oracle-based systems. Refactored tightly-coupled C# desktop modules.</div>
                  <div className="p-2 md:p-3 text-sky-400 text-[11px] md:text-sm font-semibold">04/2022 - 04/2024</div>
                  <div className="p-1 rounded bg-white text-[11px] md:text-sm font-semibold w-fit">Egyptian Army</div>
                </motion.div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-700 rounded relative group-hover:bg-sky-700 transition-colors duration-300">
                    <div className="absolute w-4 h-4 rounded-full ring-4 ring-sky-900 top-4 -left-1.5 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.9)] group-hover:scale-125 transition-all duration-300"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

            </div>
          </div>

        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} className="" />
        </div>
      </div>
      <div className='relative z-0'>
        <ParticlesComponent />
      </div>
    </motion.div>
  )
}

export default AboutPage