'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Button,
} from "@material-tailwind/react";

import { motion } from "framer-motion";
import Link from "next/link";
import { PiGithubLogoLight } from "react-icons/pi";

export default function BgCard({ item }) {

    // Motion Card
    const MotionCard = motion(Card);

    return (
        <motion.Card
            animate = 'animate'
            className="relative grid h-[40rem] group w-full max-w-[28rem] items-end justify-center z-10 overflow-hidden text-center"
        >
            <div className="group-hover:bg-[#00000044]">

            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
                style={{backgroundImage:`url(${item.img})`}}
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">

                <motion.div className="group-hover:-translate-y-52 translate-y-0 transition-all ease-in-out duration-150">
                <Typography
                    variant="h2"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                    >
                    {item.title}
                </Typography>
                <Typography variant="h5" className="mb-4 text-stone-300">
                    {item?.developer}
                </Typography>
                <Link href='/about'>
                <Avatar
                    size="xl"
                    variant="circular"
                    alt="Abdelrahman"
                    className="border-2 border-sky-50 rounded-full w-20 h-20"
                    src="./developer.jpg"
                    />
                </Link>
                </motion.div>

                <motion.div
                className="absolute translate-y-80 group-hover:translate-y-0 transition-all ease-in-out duration-300 w-full h-20 left-0 bottom-0  justify-center align-center bg-transparent min-w-full min-h-56">
                    
                    <div className="w-96 h-48 rounded rotate-[-30deg] bg-gradient-to-br from-sky-300 to-sky-100 absolute bottom-0 left-0 -translate-x-full ease-out duration-600 transition-all -translate-y-[20%] mb-12 ml-9 group-hover:ml-0 group-hover:mb-32 md:group-hover:translate-x-0 group-hover:-translate-x-20  group-hover:translate-y-44">
                    <div className="flex flex-col mx-3 justify-center items-end gap-2 h-full">
                        {/* WEBSITE LINK */}
                        <a href={item?.url} className="relative w-16 h-16 cursor-pointer inline-flex items-center justify-center p-1 px-1 py-5 overflow-hidden font-medium bg-stone-950 text-white rounded-full transition duration-300 ease-out border-2 border-white ring-2 ring-stone-950 shadow-md group/inner  ">
                        <span className="absolute bg-white text-black inset-0 flex items-center justify-center w-full h-full  duration-300 -translate-x-full  group-hover/inner:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover/inner:translate-x-full ease">
                            GO
                            </span>
                        <span className="relative invisible">Website</span>
                        </a>
                        {/* GITHUB LINK */}
                        <a href={item?.github} className="relative  w-16 h-16 cursor-pointer inline-flex items-center justify-center p-1 px-1 py-5 overflow-hidden font-medium bg-stone-950 text-white rounded-full transition duration-300 ease-out border-2 border-white ring-2 ring-stone-950 shadow-md group/inner  ">
                        <span className="absolute bg-white text-black inset-0 flex items-center justify-center w-full h-full  duration-300 -translate-x-full bg group-hover/inner:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover/inner:translate-x-full ease">
                            <PiGithubLogoLight className="text-4xl"/>
                            </span>
                        <span className="relative invisible">GitHub</span>
                        </a>
                    </div>

                    </div>
                </motion.div>
            </CardBody>
            </div>

        </motion.Card>
    );
}





