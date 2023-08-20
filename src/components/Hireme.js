import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import {motion } from "framer-motion";

const Hireme = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute
    sm:right-0 
    '>
        <motion.div className='w-48 h-auto flex items-center justify-center relative md:w-24'
        initial={{ opacity: 0 }} // Initial opacity is 0
        animate={{ opacity: 1, transition: { delay: 2, duration: 4 } }} // Animate opacity to 1 with a 2-second delay and 1-second duration
        
        >
            <CircularText  className={"fill-dark animate-spin-slow dark:fill-light"}/>

            {/* <motion.Link href='mailto:niladrighoshal.20@gmail.com' target='_blank' className='flex items-center justify-center absolute
            left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2  bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full 
            font-semibold hover:bg-light hover:text-dark

            dark:bg-white dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            md:w-12 md:h-12 md:text-[10px] z-30
            '>Hire me</motion.Link> */}
            <motion.a
  href='mailto:niladrighoshal.20@gmail.com'
  target='_blank'
  className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-white dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px] z-30'
  initial={{ opacity: 0 }} // Initial opacity is 0
  animate={{ opacity: 1, transition: { delay: 2, duration: 3 } }} // Animate opacity to 1 with a 2-second delay and 1-second duration
>
  Hire me
</motion.a>


        </motion.div>
        
        </div>
  )
}

export default Hireme