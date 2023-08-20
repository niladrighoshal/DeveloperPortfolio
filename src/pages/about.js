import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/nila1393x1920.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";
import Education from "@/components/Education";
import Certification from "@/components/Certifications";
import MiniScreenSkills from "@/components/MiniScreenSkills";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 4000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const About = () => {
    return (
        <>
            <Head>
                <title>Niladri Ghoshal | About Page </title>

                <meta name="description" content="Niladri Ghoshal" />
            </Head>
            <TransitionEffect />

            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Passion Fuels Purpose!"
                        className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-10 "
                    ></AnimatedText>

                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">

{/* BIOGRAPHY                  */}
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 ">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/80 dark:text-light/80 ">
                                Biograpy
                            </h2>

                            <p
                                className="mt-4 font-medium text-dark dark:text-light"
                                style={{ fontSize: "1.1rem" }}
                            >
                                Hello,
                            </p>
                            <p className="mt-0 font-medium " style={{ fontSize: "1.1rem" }}>
                                &nbsp; &nbsp;
                                <span style={{ fontSize: "1.2rem" }}>I</span>
                                &apos;m Niladri Ghoshal—a full stack web developer passionate about crafting stunning digital experiences. With over two years of experience,  I&apos;ve honed my abilities to deliver exceptional results across various projects As a B Tech CSE student in SRM Institute of Science and Technology,  I&apos;ve embraced a wide range of skills, covering major areas of expertise.
                            </p>

                            <p className="my-12 font-medium " style={{ fontSize: "1.1rem" }}>
                                <span style={{ fontSize: "1.2rem" }}>F</span>
                                or me, design means more than aesthetics; it&apos;s about problem-solving and delivering delightful interactions. Each project I handle, be it a website, app, Python project, or digital product, reflects my commitment to design excellence and user-centered thinking.
                            </p>

                            <p className=" mb-2 font-medium  " style={{ fontSize: "1.1rem" }}>
                                <span style={{ fontSize: "1.2rem" }}>B</span>
                                eyond web development, I excel in diverse subjects. From Python, Java, and DBMS to C++, DSA, OS, and Networking, my skills cover multiple domains. I&apos;m excited to combine this expertise with new projects and ideas, creating impactful digital solutions.
                            </p>
                        </div>



{/* IMAGE                           */}

                        <div
                            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-6 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 md:mb-8
                        
                        "
                        >
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light  " />

                            <Image
                                src={profilePic}
                                alt="Niladri Ghoshal"
                                className="w-full h-auto rounded-2xl "
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>



{/* NUMBERS  */}
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
                            <div className="flex flex-col items-end justify-center xl:items-center ">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl ">
                                    <AnimatedNumbers value={6} /> +
                                </span>
                                <h2 className="text-2xl font-medium capitalize text-dark/75 dark:text-light/80 xl:text-center md:text-lg sm:text-base
                                xs:text-sm ">
                                    satisfied clients
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl ">
                                    <AnimatedNumbers value={14} /> +
                                </span>
                                <h2 className="text-2xl font-medium capitalize text-dark/75 dark:text-light/80 xl:text-center md:text-lg sm:text-base
                                xs:text-sm ">
                                    projects completed
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl ">
                                    <AnimatedNumbers value={2} /> +
                                </span>
                                <h2 className="text-2xl font-medium capitalize text-dark/75 dark:text-light/80 xl:text-center md:text-lg sm:text-base
                                xs:text-sm ">
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <MiniScreenSkills />
                    <Experience />
                    <Education />
                    <Certification />
                </Layout>
            </main>
        </>
    );
};

export default About;
