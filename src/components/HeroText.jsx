'use client';
import { motion, useAnimationControls } from 'framer-motion';

const HeroText = ({ children }) => {
    const controls = useAnimationControls();
    return (
        <motion.span 
        className='inline-block' 
        animate={controls}
        onMouseLeave={() => {controls.start({color: 'white'})}}
        onMouseOver={ () => 
            {controls.start(
                {
                    transform: [
                        'scale3d(1,1,1)',
                        'scale3d(1.4,.55,1)',
                        'scale3d(.75,1.25,1)',
                        'scale3d(1.25,.85,1)',
                        'scale3d(.9,1.05,1)',
                        'scale3d(1,1,1)',
                    ]
                })}}
        >
            {children}
        </motion.span>
    )
}

export default HeroText