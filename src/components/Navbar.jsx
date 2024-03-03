'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
const links = [
    {id: 1 , url: '/', title: "Home" },
    {id: 2 , url: '/about', title: "About" },
    {id: 3 , url: '/portfolio', title: "Portfolio" },
    {id: 4 , url: '/contact', title: "Contact" },
]
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeTab , setActiveTab] = useState(links[0].id);
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-48 text-lg'>
            {/* Links */}
            <div className='hidden md:flex gap-2 md:justify-center md:w-1/3 md:ms-2 md:me-7 xl:me-0 xl:ms-0 ms-7'>

                {links.map((link) =>
                    <Link
                        key={link.id}
                        href={link.url}
                        onClick={() => {setActiveTab(link.id)}}
                        className={`${activeTab === link.id? "": "hover:text-black/60"} relative rounded-xl px-3 py-1.5  text-black outline-sky-400 transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                        >
                        {activeTab === link.id && (
                            <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-10 bg-white mix-blend-difference"
                            style={{ borderRadius: 10 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {link.title}
                    </Link>)
                }
            </div>
            {/* LOGO */}
            <div className='md:hidden justify-center lg:flex md:w-1/3'>
                <Link href='/'>
                    <Image 
                        src='/logo.png' 
                        width={144} 
                        height={144} 
                        alt="logo" />
                </Link>
            </div>
            {/* Social */}
            <div className="hidden md:flex gap-4 md:w-1/3">
            <Link href='/'>
                    <Image 
                        src='/github.png' 
                        width={25} 
                        height={25} 
                        alt="github" />
                </Link>

                <Link href='/'>
                    <Image 
                        src='/instagram.png' 
                        width={25} 
                        height={25} 
                        alt="instagram" />
                </Link>
                <Link href='/'>
                    <Image 
                        src='/facebook.png' 
                        width={25} 
                        height={25} 
                        alt="facebook" />
                </Link>
                <Link href='/'>
                    <Image 
                        src='/pinterest.png' 
                        width={25} 
                        height={25} 
                        alt="pinterest" />
                </Link>
                <Link href='/'>
                    <Image 
                        src='/linkedin.png' 
                        width={25} 
                        height={25} 
                        alt="linkedin" />
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className='md:hidden'>
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen((prev) => !prev)}>
                    <div className="w-10 h-1 bg-black rounded"></div>
                    <div className="w-10 h-1 bg-black rounded"></div>
                    <div className="w-10 h-1 bg-black rounded"></div>
                </button>
                {/* MENU LIST */}
                {
                    open &&
                    <div className=' absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl '>
                        {links.map((link) =>
                            <Link
                                key={link.id}
                                href={link.url}>
                                {link.title}
                            </Link>)
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar