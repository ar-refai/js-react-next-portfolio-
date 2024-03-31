'use client'
import { motion, useInView, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image';
import svgIcon from '../../../public/signature.svg';
import Brain from '@/components/Brain';
import ParticlesComponent from '@/components/Particles';
import TooltipButton from '@/components/utils/TooltipButton';

const SKILLS = [
  {
    name: 'HTML5',
    icon:'IoLogoHtml5',
  },
  {
    name: 'CSS3',
    icon:'IoLogoCss3',
  },
  {
    name: 'SASS',
    icon:'IoLogoSass',
  },
  {
    name: 'BOOTSTRAP',
    icon:'BsBootstrapFill',
  },
  {
    name: 'TAILWIND',
    icon:'mSiTailwindcss',
  },
  {
    name: 'JS',
    icon:'DiJavascript1',
  },
  {
    name: 'REACT',
    icon:'IoLogoReact ',
  },
  {
    name: 'JSX',
    icon:'TbFileTypeJsx ',
  },
  {
    name: 'NEXT',
    icon:'IoLogoReact ',
  },
  {
    name: 'PHP',
    icon:'FaPhp',
  },
  {
    name: 'MYSQL',
    icon:'SiMysql ',
  },
  {
    name: 'LARAVEL',
    icon:'IoLogoLaravel ',
  },
  {
    name: 'API',
    icon:' TbApi',
  },
  {
    name: 'JSON',
    icon:'TbJson ',
  },
  {
    name: 'FRAMER',
    icon:'TbBrandFramer ',
  },
  {
    name: 'PYTHON',
    icon:'IoLogoPython ',
  },
  {
    name: 'PHOTOSHOP',
    icon:'SiAdobephotoshop ',
  },
  {
    name: 'GIT',
    icon:'FaGit',
  },
  {
    name: 'GITHUB',
    icon:'BsGithub ',
  }
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
              src="/developer.jpg"
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
            I graduated from Suez University with a degree in computer science in Sep 2021, where I learned various programming languages and frameworks, such as Laravel, PHP, and Java Script. Since Apr 2022, I have been working as a system administrator and web developer at the Egyptian army and on Freelance websites, where I manage databases, servers, and websites for various projects and operations.
            </motion.p>

            <motion.p initial={{ y: '300px' }} animate={isBioInView ? { y: 0 } : {}} transition={{ delay: 0.2 }} className='text-lg'>
            In my current role, I have done a lot of projects and learned a lot of full stack web development skills, such as creating dynamic and responsive web pages, integrating APIs, and deploying applications. I have also worked as an army officer, where I gained leadership, teamwork, and problem-solving skills, as well as a sense of duty and honor.
            </motion.p>
            <motion.p initial={{ y: '300px' }} animate={isBioInView ? { y: 0 } : {}} transition={{ delay: 0.2 }} className='text-lg'>
            I am passionate about using technology to improve my job efficiency, and I would love to join an organization that shares this vision and values. I believe I can bring diverse perspectives and experiences to the team, as well as a strong work ethic, a creative mindset, and a willingness to learn and grow.
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
          <div className="flex flex-col text-zinc-950 gap-12 justify-center mb-96 pb-96" >
            <h1 className='font-bold text-2xl text-white'>EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            <div className="">
              {/* EXPERIENCE LIST ITEM*/}
              <div className="flex justify-between  h-48" ref={expRef}>
                {/* LEFT */}
                <motion.div initial={{ x: '-300px' }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.5 }} className="w-1/3">
                  {/* JOB#1 */}
                  <div>
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semiBold text-md md:text-lg rounded-b-lg rounded-s-lg w-fit">Full Stack Web Developer</div>
                    {/* JOB DESC */}
                    <div className="p-3 text-[12px] md:text-sm text-white italic">Juncky Coders, a Local tech firm in Suez that specializes in providing a range of online services to users specially web projects. It was my first job in tech field ever! </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-sky-400 text-[12px] md:text-sm font-semiBold">
                      2018 {'-->'} 2020 (2 years)

                    </div>
                    {/* COMPANY NAME */}
                    <div className="p-1 rounded bg-white text-[12px] md:text-sm font-semiBold w-fit">Junkey Coders</div>
                  </div>
                  {/* JOB#2 */}
                  {/* JOB TITLE */}
                  <div className="pt-48 pb-20">
                    <div className="bg-white  p-3 font-semiBold text-md md:text-lg rounded-b-lg rounded-s-lg w-fit">Front End Web Developer <span className='text-sky-400'>
                    (freelancer)</span>
                      </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-[12px] md:text-sm text-white italic">Worked as a freelancer on several websites and fixed alot of bugs in design and delivered very good services to my clients. </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-sky-400 text-[12px] md:text-sm font-semiBold">
                    2020 {'-->'} 2022 (2 years)
                    </div>
                    {/* COMPANY NAME */}
                    <div className="p-1 rounded bg-white text-[12px] md:text-sm font-semiBold w-fit mb-96">Fiverr inc</div>
                  </div>
                </motion.div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center mt-32 sm:mt-44 md:mt-44 lg:mt-32 xl:34">
                  {/* LINE */}
                  <div className=" w-1 h-[500px] bg-gray-700 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-3 h-3 rounded-full ring-4 ring-gray-700 top-[0] -left-1 bg-sky-300"></div>
                    <div className="absolute w-3 h-3 rounded-full ring-4 ring-gray-700 top-[250px] -left-1 bg-sky-300"></div>
                    <div className="absolute w-3 h-3 rounded-full ring-4 ring-gray-700 bottom-[0] -left-1 bg-sky-300"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <motion.div className="w-1/3 " initial={{ x: '300px' }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.5 }}>
                  <div className="pt-48">
                    {/* JOB TITLE */}
                    <div className="bg-white  p-3 font-semiBold text-md md:text-lg rounded-b-lg rounded-e-lg w-fit">DB Administrator and Web Developer</div>
                    {/* JOB DESC */}
                    <div className="p-3 text-[12px] md:text-sm text-white italic">I was A DB administrator and created some web applications using react js , next js sanity cms , php , laravel and my SQL using alot of third parties , tools and APIs. </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-sky-400 text-[12px] md:text-sm font-semiBold">
                      2022 {'-->'} 2024
                    </div>
                    {/* COMPANY NAME */}
                    <div className="p-1 rounded bg-white text-[12px] md:text-sm font-semiBold w-fit">Egyptian Army</div>
                  </div>
                </motion.div>

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