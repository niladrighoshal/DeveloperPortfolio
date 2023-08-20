import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'

const Skill = ({name, x, y, link}) => {

        return(
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark/90 text-light 
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light/80
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent sm:hidden
        xs:dark:text-light xs:text-dark xs:font-bold         '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y, transition: {duration: 2.5} }}
        viewport={{once:true}}
        >
            <Link href={link} target='_blank' >
            {name}
            </Link>
        </motion.div>
            
        )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 sm:hidden  '> Skills</h2>

    <div className='w-full h-screen relative flex items-center justify-center rounded-full 
    
    bg-circularLight 
    dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    sm:hidden
    '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
        p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light/80 
        '
        whileHover={{scale:1.05}}
        >
            <Link href="https://github.com/niladrighoshal" target='_blank'>web</Link>
        </motion.div>

<Skill name="HTML" x="-17vw" y="-2vw" link="https://developer.mozilla.org/en-US/docs/Web/HTML" />
<Skill name="CSS" x="3vw" y="-10vw" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
<Skill name="Javascript" x="4vw" y="-17vw" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
<Skill name="ReactJs" x="-2vw" y="9.5vw" link="https://reactjs.org/" />
<Skill name="SQL" x="17vw" y="-2vw" link="https://dev.mysql.com/" />
<Skill name="Java" x="15vw" y="-11vw" link="https://www.java.com/" />
<Skill name="Python" x="-19vw" y="8vw" link="https://www.python.org/" />
<Skill name="C / C++" x="19vw" y="8vw" link="https://www.cplusplus.com/" />
<Skill name="Operating System" x="-29vw" y="-11vw" link="https://en.wikipedia.org/wiki/Operating_system" />
<Skill name="Web Design" x="37vw" y="10vw" link="https://www.w3schools.com/html/html_css.asp" />
<Skill name="Tailwind CSS" x="21vw" y="-20vw" link="https://tailwindcss.com/" />
<Skill name="Git / Github" x="-13vw" y="15vw" link="https://github.com/" />
<Skill name="NextJs" x="24vw" y="14vw" link="https://nextjs.org/" />
<Skill name="NodeJs" x="-40vw" y="-1vw" link="https://nodejs.org/en/about" />
<Skill name="Wordpress" x="32vw" y="-8vw" link="https://wordpress.org/" />
<Skill name="Bootstrap" x="-22vw" y="20vw" link="https://getbootstrap.com/" />
<Skill name="Firebase" x="-17vw" y="-22vw" link="https://firebase.google.com/" />
<Skill name="MongoDB" x="14vw" y="22vw" link="https://www.mongodb.com/" />
<Skill name="Flutter" x="-33vw" y="6vw" link="https://flutter.dev/" />
<Skill name="Android Studio" x="3vw" y="16vw" link="https://developer.android.com/studio" />
<Skill name="Machine Learning" x="-13vw" y="-15vw" link="https://www.ibm.com/topics/machine-learning" />
<Skill name="System Design" x="41vw" y="-1vw" link="https://en.wikipedia.org/wiki/Systems_design" />
<Skill name="AI" x="24vw" y="-4vw" link="https://en.wikipedia.org/wiki/Artificial_intelligence" />





    </div>
    </>
  )
}

export default Skills