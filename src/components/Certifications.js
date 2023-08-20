import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ certificationType, mentor, certifyingAuthority, infoOfCertification, linkOfCertificate }) => {
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
                    <Link href={linkOfCertificate} target="_blank">{certificationType}</Link> &nbsp;
                    {/* <a href={companyLink} 
            target="_blank" className="text-primary capitalize "
            
            > @{company}</a>  */}
                </h3>
                <span className="capitalize font-medium text-xl text-primary/80 dark:text-primaryDark xs:text-sm">
                    {mentor} | <Link href={linkOfCertificate} target="_blank">{certifyingAuthority}</Link>
                </span>
                <p className="font-medium w-full xs:text-sm">{infoOfCertification}</p>
            </motion.div>
        </li>
    );
};

const Certification = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 sm:mb-16  md:mt-8 sm:mt-8  ">Certification</h2>

            <div ref={ref} className="w-[75] mx-auto relative lg:w-[90%] md:w-full] ">
                {/* //the animated line  */}

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top

                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    dark:bg-light
                    "
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

                <Details
                        certificationType="Full Stack Web Development With MERN Stack"
                        mentor="Arpan Garg"
                        certifyingAuthority="Coding Ninjas"
                        infoOfCertification="Certified by Coding Ninjas and guided by Mentor Mitesh Darda, my accomplishment in Full Stack Web Development with MERN Stack underscores my proficiency in developing end-to-end web applications. This certification validates my expertise in utilizing MongoDB, Express.js, React.js, and Node.js to create dynamic and seamless user experiences across the entire stack."
                        linkOfCertificate="https://files.codingninjas.in/full-stack-web-development-mern-stack-3-29806.pdf"
                    />


                    <Details
                        certificationType="Front End Web Development"
                        mentor="Dheeraj Kumar"
                        certifyingAuthority="Coding Ninjas"
                        infoOfCertification="Under the mentorship of Aakash Tyagi at Coding Ninjas, I've honed my skills in Front End Web Development, mastering key elements such as HTML, CSS, and Bootstrap. This certification attests to my ability to design captivating and user-centric web interfaces, showcasing a strong grasp of essential concepts in this domain."
                        linkOfCertificate="https://files.codingninjas.in/advanced-front-end-web-development-react-29858.pdf"
                    />


                    <Details
                        certificationType="Back End Web Development"
                        mentor="Rahul Mohan"
                        certifyingAuthority="Coding Ninjas"
                        infoOfCertification="This certification focuses on Back End Web Development, covering server-side technologies, databases, and data management. Under the mentorship of Parikh Jain and with the recognition of Coding Ninjas, this certification affirms my ability to build robust and efficient back end systems to support web applications."
                        linkOfCertificate="https://files.codingninjas.in/java-full-stack-web-development-with-spring-boot-3-29515.pdf"
                    />

                    
                    <Details
                        certificationType="Data Structures and Algorithms in Java"
                        mentor="Ankush Singla"
                        certifyingAuthority="Coding Ninjas"
                        infoOfCertification="Guided by Mentor Ankush Singla and certified by Coding Ninjas, this credential signifies my proficiency in designing efficient algorithms and utilizing data structures to solve complex computational problems. This certification delves into the fundamental concepts of Data Structures and Algorithms, with a specific focus on implementation using Java."
                        linkOfCertificate="https://certificate.codingninjas.com/view/ac24461e91fe01df"
                    />
                    
                    <Details
                        certificationType="Neural Networks and Deep Learning"
                        mentor="DeepLearning.AI"
                        certifyingAuthority="Coursera"
                        infoOfCertification="Certified by Coursera and offered by DeepLearning.AI, this credential reflects my knowledge in building and training neural networks for various applications. This certification provides a comprehensive understanding of Neural Networks and Deep Learning techniques, guided by mentors from DeepLearning.AI. It contributes to advancements in the field of artificial intelligence, affirming my expertise in this cutting-edge domain."
                        linkOfCertificate="https://coursera.org/share/063294b003733f06ccd7fbe821caee48"
                    />
                    <Details
                        certificationType="High Performance Computing & Advanced AI"
                        mentor="Fice"
                        certifyingAuthority="Intel Corporation"
                        infoOfCertification="Guided by the platform provided by Fice, similar to platforms like Coursera or Udemy, this certification issued by Intel Corporation attests to my expertise in High Performance Computing and Advanced Artificial Intelligence. It showcases my capability to leverage cutting-edge technologies for optimizing computing performance and implementing advanced AI algorithms, thereby contributing to innovative solutions within the tech industry."
                        linkOfCertificate="https://drive.google.com/file/d/10-m7hmQElSjpWCfFV4KeOcDBGTzHmOJ6/view?usp=sharing"
                    />

                    <Details
                        certificationType="Database Management System (DBMS)"
                        mentor="Pratul Gupta"
                        certifyingAuthority="Coding Ninjas"
                        infoOfCertification="Earned through Coding Ninjas under the guidance of Mentor Pratik Gore, this achievement underscores my adeptness in Database Management Systems. It affirms my capability to proficiently design, implement, and administer databases, ensuring smooth data organization and retrieval. This competence significantly contributes to the creation of robust software solutions."
                        linkOfCertificate="https://certificate.codingninjas.com/view/28f82bc0fb230a47"
                    />

                    <Details
                        certificationType="System Design"
                        mentor="Vishwa Mohan"
                        certifyingAuthority="Coding Ninjas"
                        infoOfCertification="Acquired under the mentorship of Naman Jain at Coding Ninjas, this certification highlights my proficiency in System Design. It confirms my ability to architect scalable and efficient software systems, ensuring seamless performance and optimal user experiences. This expertise plays a pivotal role in shaping innovative and successful technological solutions."
                        linkOfCertificate="https://certificate.codingninjas.com/view/d862cea93dd7d09f"
                    />


                    <Details
                        certificationType="Operating System"
                        mentor="Rohan Kumar"
                        certifyingAuthority="Coding Ninjas"
                        infoOfCertification="Under the guidance of Mentor Manisha Khattar at Coding Ninjas, I achieved certification in Operating System. This accomplishment reflects my grasp of fundamental OS concepts, further enhancing my ability to contribute to software development by ensuring efficient resource management and system functionality."
                        linkOfCertificate="https://certificate.codingninjas.com/view/e06e13a6b26fc9b3"
                    />

                    

                    
                </ul>
            </div>
        </div>
    );
};

export default Certification;
