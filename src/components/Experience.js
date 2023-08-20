import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work, proofLink}) => {

    const ref = useRef(null)

    return( <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] ">

{/* Side icons of (rounded) on the side line   [Liicon.js]*/}

<LiIcon reference={ref}/>  {/* addding reference={ref} for passing  scrollYProgress to LiIcons.js to anumate accordingly  */}


        <motion.div
        initial={{y:60}}
        whileInView={{y:0}}
        transition={{duration:1, type:"spring"}}
        >
            <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:lg xs:mb-2 md:mb-4">
                <Link href={proofLink} target="_blank">
                {position}
                </Link>
                
                &nbsp; <a href={companyLink} 
            target="_blank" className="text-primary dark:text-primaryDark capitalize  "
            
            > @{company}</a> </h3>
            <span className="capitalize font-medium text-dark/80 dark:text-light/80 xs:text-sm ">
                {time} | {address}
            </span>
            <p className="font-medium w-full md:text-sm ">
                {work}
            </p>
        </motion.div>
    </li>
    );
};

const Experience = () => {

    const ref = useRef(null);


    const {scrollYProgress} = useScroll(

        {
            target: ref,
            offset:["start end", "center start"]
        }
    );

    return (
        <div className="my-48 sm:mt-16 sm:mb-216">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 sm:mb-16  ">
                Experience
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full] ">

{/* //the animated line  */}

<motion.div 
style={{scaleY: scrollYProgress}}
className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top
    dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]
" />
    

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details

                        position="Teaching Assistant" company="Coding Ninjas"
                        time="Dec-2022 - May-2023" address="Unitech Cyber Park, Gurgaon"
                        companyLink="https://www.codingninjas.com/"
                        work="During my Coding Ninjas internship, I proudly served as a 
                        Teaching Assistant. Guiding students in Database Management 
                        Systems (DBMS) and Operating Systems (OS), I tackled over 1200 
                        doubts of the students, delivering comprehensive solutions.
                        Mentoring 180+ students, I imparted MYSQL and OS wisdom, and 
                        played a vital role in evaluating project submissions, nurturing 
                        educational growth."
                        proofLink="https://drive.google.com/file/d/1MBa_ZRyPXtaJKPKPZE_9xNU4qfXbILpx/view?usp=sharing"

                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
