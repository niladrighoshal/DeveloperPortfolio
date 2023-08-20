import React from 'react'
import Layout from './Layout'
import {motion} from "framer-motion";
import img1 from '../../public/images/skill_images/js.webp';
import img2 from '../../public/images/skill_images/css.webp';
import img3 from '../../public/images/skill_images/docker.png';
import img4 from '../../public/images/skill_images/wordpress.png';
import img5 from '../../public/images/skill_images/figma.webp';
import img6 from '../../public/images/skill_images/firebase.webp';
import img7 from '../../public/images/skill_images/git.webp';
import img8 from '../../public/images/skill_images/html5.webp';
import img9 from '../../public/images/skill_images/java.png';
import img10 from '../../public/images/skill_images/mongodb.png';
import img11 from '../../public/images/skill_images/mysql.png';
import img12 from '../../public/images/skill_images/nextjs.png';
import img13 from '../../public/images/skill_images/nodejs.webp';
import img14 from '../../public/images/skill_images/npm.webp';
import img15 from '../../public/images/skill_images/pytest.webp';
import img16 from '../../public/images/skill_images/python.webp';
import img17 from '../../public/images/skill_images/react.png';
import img18 from '../../public/images/skill_images/sql.png';
import img19 from '../../public/images/skill_images/tailwindcss.webp';
import img20 from '../../public/images/skill_images/typescript.webp';
import img21 from '../../public/images/skill_images/android.png';
import img22 from '../../public/images/skill_images/bootstrap.webp';
import img23 from '../../public/images/skill_images/cplusplus.png';
import img24 from '../../public/images/skill_images/express.png';

import Image from 'next/image';
import Link from 'next/link';




const MiniScreenSkills = () => {
  return (
    <>
    <main className='hidden lg:hidden xl:hidden 2xl:hidden sm:block md:hidden '>
    <Layout className=''>
    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 sm:mb-16 hidden lg:hidden xl:hidden 2xl:hidden sm:block md:hidden mt-16 '> Skills</h2>

    {/* <ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'>
        <li><Link href="/" target='_blank'>  <Image src={img1}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img2}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img3}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img4}></Image> </Link> </li>

    </ul>


    <ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'>
        <li><Link href="/" target='_blank'>  <Image src={img5}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img6}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img7}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img8}></Image> </Link> </li>

    </ul>

    <ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'>
        <li><Link href="/" target='_blank'>  <Image src={img9}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img10}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img11}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img12}></Image> </Link> </li>

    </ul>

    <ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'>
        <li><Link href="/" target='_blank'>  <Image src={img13}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img14}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img15}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img16}></Image> </Link> </li>

    </ul>

    <ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'>
        <li><Link href="/" target='_blank'>  <Image src={img17}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img18}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img19}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img20}></Image> </Link> </li>

    </ul>

    <ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'>
        <li><Link href="/" target='_blank'>  <Image src={img21}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img22}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img23}></Image> </Link> </li>
        <li><Link href="/" target='_blank'>  <Image src={img24}></Image> </Link> </li>

    </ul> */}


<motion.ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0 mt-16'
initial={{ y: 150 }}
whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
// whileInView={{ y: 0, transition: 1, ease: "easeInOut" }}
exit={null}
viewport={{once:true}}
>
    <li><Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'>  <Image src={img1} alt='Javascript' priority ></Image> </Link> </li>
    <li><Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>  <Image src={img2} alt='CSS' priority ></Image> </Link> </li>
    <li><Link href="https://www.docker.com/" target='_blank'>  <Image src={img3} alt='Docker'  priority ></Image> </Link> </li>
    <li><Link href="https://wordpress.org/" target='_blank'>  <Image src={img4} alt='Wordpress'  priority ></Image> </Link> </li>
</motion.ul>

<motion.ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'
initial={{ y: 145 }}
whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
// whileInView={{ y: 0, transition: 1, ease: "easeInOut" }}
exit={null}
viewport={{once:true}}

>
    <li><Link href="https://www.figma.com/" target='_blank'>  <Image src={img5} alt='Figma'  priority ></Image> </Link> </li>
    <li><Link href="https://firebase.google.com/" target='_blank'>  <Image src={img6} alt='Firebase'  priority ></Image> </Link> </li>
    <li><Link href="https://github.com/" target='_blank'>  <Image src={img7} alt='GitHub'  priority ></Image> </Link> </li>
    <li><Link href="https://www.w3schools.com/html/" target='_blank'>  <Image src={img8} alt='Html5'  priority ></Image> </Link> </li>
</motion.ul>

<motion.ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'
initial={{ y: 140 }}
whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
// whileInView={{ y: 0, transition: 1, ease: "easeInOut" }}
exit={null}
viewport={{once:true}}
>
    <li><Link href="https://www.java.com/" target='_blank'>  <Image src={img9} alt='Java'  priority ></Image> </Link> </li>
    <li><Link href="https://www.mongodb.com/" target='_blank'>  <Image src={img10} alt='MongoDB'  priority ></Image> </Link> </li>
    <li><Link href="https://www.mysql.com/" target='_blank'>  <Image src={img11} alt='MySQL'  priority ></Image> </Link> </li>
    <li><Link href="https://nextjs.org/" target='_blank'>  <Image src={img12} alt='NextJs'  priority ></Image> </Link> </li>
</motion.ul>

<motion.ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'
initial={{ y: 135 }}
whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
// whileInView={{ y: 0, transition: 1, ease: "easeInOut" }}
exit={null}
viewport={{once:true}}
>
    <li><Link href="https://nodejs.org/" target='_blank'>  <Image src={img13} alt='NodeJs'  priority ></Image> </Link> </li>
    <li><Link href="https://www.npmjs.com/" target='_blank'>  <Image src={img14} alt='NPM'  priority ></Image> </Link> </li>
    <li><Link href="https://docs.pytest.org/en/stable/" target='_blank'>  <Image src={img15} alt='Pytest'  priority ></Image> </Link> </li>
    <li><Link href="https://www.python.org/" target='_blank'>  <Image src={img16} alt='Python'  priority ></Image> </Link> </li>
</motion.ul>

<motion.ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'
initial={{ y: 130 }}
whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
// whileInView={{ y: 0, transition: 1, ease: "easeInOut" }}
exit={null}
viewport={{once:true}}
>
    <li><Link href="https://reactjs.org/" target='_blank'>  <Image src={img17} alt='ReactJS'  priority ></Image> </Link> </li>
    <li><Link href="https://www.w3schools.com/sql/" target='_blank'>  <Image src={img18} alt='SQL'  priority ></Image> </Link> </li>
    <li><Link href="https://tailwindcss.com/" target='_blank'>  <Image src={img19} alt='Tailwind CSS'  priority ></Image> </Link> </li>
    <li><Link href="https://www.typescriptlang.org/" target='_blank'>  <Image src={img20} alt='TypeScript'  priority ></Image> </Link> </li>
</motion.ul>

<motion.ul className='grid grid-cols-4 gap-8 py-5 first:pt-0 last:pb-0'
initial={{ y: 110 }}
whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
// whileInView={{ y: 0, transition: 1, ease: "easeInOut" }}
exit={null}
viewport={{once:true}}
>
    <li><Link href="https://developer.android.com/studio" target='_blank'>  <Image src={img21} alt='Android Studio'  priority ></Image> </Link> </li>
    <li><Link href="https://getbootstrap.com/" target='_blank'>  <Image src={img22} alt='Bootstrap'  priority ></Image> </Link> </li>
    <li><Link href="https://www.cplusplus.com/" target='_blank'>  <Image src={img23} alt='C Plus plus'  priority ></Image> </Link> </li>
    <li><Link href="https://expressjs.com/" target='_blank'>  <Image src={img24} alt='ExpressJs'  priority ></Image> </Link> </li>
</motion.ul>




    </Layout>
    </main>
    
    </>
  )
}

export default MiniScreenSkills