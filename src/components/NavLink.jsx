"use client";
import Link from "next/link";
import { motion } from 'framer-motion'
import { useState } from "react";
import { usePathname } from "next/navigation";
const TABS = ['home' , 'about' , 'portfolio' , 'contact'];

const NavLink = ({ link }) => {
    const [hover, setHover] = useState('home');
    const pathName = usePathname();
    // console.log('#'.repeat(33));
    // console.log(link.title.toLowerCase());
    // console.log('#'.repeat(33));


    return (
            <>
            <Link
                className={`relative text-lg px-5 py-2 font-light text-zinc-400 hover:cursor-pointer hover:text-zinc-100 transition-all duration-200 hover:bg-[#ffffff11] rounded-md ${link.url=== pathName && 'bg-[#ffffff11] text-zinc-200 font-extrabold'}`}
                href={link.url}
                >
                    {link.title}
            </Link>
                </>
    );
};

export default NavLink;