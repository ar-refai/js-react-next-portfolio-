'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import {AnimatePresence , motion} from 'framer-motion';
import NavLink from './NavLink';
const links = [
    {id: 1 , url: '/', title: "Home" },
    {id: 2 , url: '/about', title: "About" },
    {id: 3 , url: '/portfolio', title: "Portfolio" },
    {id: 4 , url: '/contact', title: "Contact" },
]
const Navbar = () => {
    const [open, setOpen] = useState(false);
    // hamburger button
    const topVariants = {
        closed: {
            rotate:0
        },
        opened: {
            rotate:45,
            backgroundColor:'rgb(255,255,255)',
        }
    }
    const centerVariants = {
        closed: {
            opacity:1
        },
        opened: {
            opacity:0
        }
    }
    const bottomVariants = {
        closed: {
            rotate:0
        },
        opened: {
            rotate:-45,
            backgroundColor:'rgb(255,255,255)',
        }
    }
    // full menu animation variants
    const listVariants = {
        closed: {
            x:'100vw'
        },
        opened: {
            x:0,
            transition: {
                when:'beforeChildren',
                staggerChildren: 0.1,
            }
        }
    } 
    const listItemVariants = {
        closed: {
            x:-40,
            opacity:0,
            rotate:15
        },
        opened: {
            x:0,
            opacity:1,
            rotate:[0,-15,0]
        }
    }
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-48 text-lg'>
            {/* Links */}
            <div className='hidden  md:flex gap-2 md:justify-center md:w-1/3 md:ms-2 md:me-7 xl:me-0 xl:ms-0 ms-7 '>

                {links.map((link) =><NavLink link={link} key={link.id} />)   
                }
            </div>
            {/* LOGO */}
            <div className='md:hidden justify-center lg:flex md:w-1/3'>
                <Link href='/'>
                    <Image 
                        priority = {true}
                        src='/logo.png' 
                        width={144} 
                        height={144} 
                        sizes="(max-width: auto) , (max-width: auto) "
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
                <button className='w-10 h-8 flex flex-col justify-between relative' onClick={() => setOpen((prev) => !prev)} style={{zIndex:55}}>
                    <motion.div 
                    variants={topVariants} 
                    animate={open?'opened':'closed'}
                    className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div 
                    variants={centerVariants} 
                    animate={open?'opened':'closed'}
                    className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div 
                    variants={bottomVariants} 
                    animate={open?'opened':'closed'}
                    className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                </button>
                {/* MENU LIST */}
                {
                    open &&
                    <AnimatePresence>

                    <motion.div variants={listVariants} initial={'closed'}  animate={'opened'} className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-50'>
                        {links.map((link) =>
                        <motion.div variants={listItemVariants} key={link.id} className='relative z-50'>
                            <Link
                                href={link.url}>
                                {link.title}
                            </Link>
                            
                        </motion.div>
                        )}
                    </motion.div>
                    </AnimatePresence>

                }
            </div>
        </div>
    )
}

export default Navbar