'use client'
import React from 'react'
import { AnimatePresence , motion} from 'framer-motion'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'
const TransitionProvider = ({ children }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
                {/* First Transition Slice */}
                <motion.div 
                className='h-screen w-screen fixed rounded-b-[100px] z-40 bg-black' 
                animate= {{height:'0vh'}} 
                exit = {{height:'140vh'}}
                transition={{duration:0.5,ease:'easeOut'}}
                />
                {/* Seconed Transition Slice */}
                <motion.div 
                className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
                initial= {{opacity:1}} 
                animate= {{opacity:0,x:[0,0,100]}} 
                exit = {{opacity:0}} 
                transition={{duration:0.8,ease:'easeOut'}}
                >
                    {pathName.slice(1).toUpperCase() === '' ? 'HOME': pathName.slice(1).toUpperCase()}
                </motion.div>
                {/* Third Transition Slice */}
                <motion.div 
                className='h-screen w-screen fixed rounded-t-[100px] bottom-0 z-30 bg-black' 
                initial= {{height:'140vh'}}
                animate= {{height:'0vh' , transition:{delay:0.5}}} 
                
                />
                <div className=" relative h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-96px)]">
                    {children}
                </div>
            </div>
        </AnimatePresence >

    )
}

export default TransitionProvider