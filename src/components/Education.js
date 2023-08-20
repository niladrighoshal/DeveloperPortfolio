import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ type, time, place, info, officialWebsite }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%] "
        >
            {/* Side icons of (rounded) on the side line   [Liicon.js]*/}
            <LiIcon reference={ref} />{" "}
            {/* addding reference={ref} for passing  scrollYProgress to LiIcons.js to anumate accordingly  */}
            <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, type: "spring" }}
            >
                <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:lg xs:mb-2 md:mb-4">
                    {type} &nbsp;
                    {/* <a href={companyLink} 
            target="_blank" className="text-primary capitalize "
            
            > @{company}</a>  */}
                </h3>
                <span className="capitalize font-medium text-xl text-primary/80 dark:text-primaryDark/80 xs:text-sm">
                    {time} | <Link href={officialWebsite} target="_blank">{place}</Link>
                </span>
                <p className="font-medium w-full xs:text-sm">{info}</p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 sm:mb-16 md:mt-8 sm:mt-8 ">Education</h2>

            <div ref={ref} className="w-[75] mx-auto relative lg:w-[90%] md:w-full] ">
                {/* //the animated line  */}

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light 
                        md:w-[2px] md:left-[30px] xs:left-[20px]
                    "
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        type="Bachelor of Technology In Computer Science"
                        time="2020-Present"
                        place="SRM Institute of Science and Technology (Chennai)"
                        info="I completed courses in Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Database Management Systems, Operating Systems, Software Engineering, and Project Management. These studies fortified my theoretical foundation and equipped me with practical skills vital for the tech industry. This diverse learning experience has prepared me to tackle challenges and excel in various tech roles."
                        officialWebsite="https://www.srmist.edu.in/"
                    />

                    <Details
                        type="Coding Ninjas (Online)"
                        time="2022-Present"
                        place="Online Learning Platform"
                        info="I've been actively engaged with Coding Ninjas, an esteemed online learning platform, since 2022. During this period, I've been immersed in various facets of software development, including Database Management Systems, Operating Systems, System Design, Competitive Aptitude, Introduction to Java, Data Structures and Algorithms in Java, Front-end and Back-end development (utilizing HTML, CSS, Bootstrap, ExpressJS, Node.js), as well as React.js and MongoDB.Through this experience, I've expanded my skill set, embracing modern technologies and gaining a solid foundation in diverse areas of software engineering."
                        officialWebsite="https://www.codingninjas.com/"
                    />

                    <Details
                        type={"Higher Secondary School(12\u1D57\u02B0)"}
                        time="2018-2020"
                        place="Burdwan Municipal High School"
                        info="Completed the 12th grade, specializing in Physics, Chemistry, Mathematics, and Computer Application. My dedication and enthusiasm for these subjects led me to achieve an impressive academic result of 93.60%. This journey not only deepened my understanding of these fields but also honed my analytical and problem-solving skills, preparing me for the next chapter in my educational and professional journey."
                        officialWebsite="http://www.bmhschool.com/"
                    />

                    <Details
                        type={"High School(10\u1D57\u02B0)"}
                        time="2016-2012"
                        place="Burdwan Municipal High School"
                        info="Completed the 10th grade with a solid grasp of a wide range of subjects. My commitment to learning allowed me to achieve an outstanding result of 92.86% in the Secondary School Certificate examination. This educational milestone not only bolstered my knowledge but also fostered a sense of determination and curiosity that continues to drive my pursuit of academic and personal growth."
                        officialWebsite="http://www.bmhschool.com/"
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
