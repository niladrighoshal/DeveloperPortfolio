import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:text-light dark:border-light sm:text-base 
    
    '>
      <Layout className='py-6 flex items-center justify-between lg:flex-col lg:py-4 z-9999 '>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center lg:py-2 '>
          Build with <span className='text-primary dark:text-primaryDark text-3xl px-1 mt-1'>&#9825;</span>by &nbsp; <Link
            href="https://ng-webdev-portfolio.netlify.app" className='underline underline-offset-2'
          >Niladri Ghoshal</Link>
        </div>
        <Link href="https://wa.me/9635311895?text=Hello Niladri" target={'_blank'} className='underline underline-offset-2'
        >Say hello</Link>



      </Layout>
    </footer>
  )
}

export default Footer