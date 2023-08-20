import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";



import algorithm from "../../public/images/project_thumbnails/algorithm.gif";
import cryptoBytes from "../../public/images/project_thumbnails/cryptoBytes.gif";




import expense from "../../public/images/project_thumbnails/income_Expence.gif";
import admin from "../../public/images/project_thumbnails/admin_dashboard_1.png";

import shoppingList from "../../public/images/project_thumbnails/shopping.jpg";
import paster from "../../public/images/project_thumbnails/paster.jpg";




const FramerImageMotion = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, githublink }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      {/* BORDER */}

      <div
        className="absolute top-0 -right-3 -z-10 w-[100.9%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] sm:w-[101%] xs:h-[102%] xs:w-[101%] xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImageMotion
          
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p
          className="my-2 font-medium text-dark dark:text-light/95 sm:text-sm "
          style={{ fontSize: "1.1rem" }}
        >
          {summary}
        </p>
        <div className="mt-12 flex items-center ">
          <Link href={githublink} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-8 rounded-lg bg-dark text-light  p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark 
            sm:px-4 sm:text-base 
            "
          >
            {" "}
            Visit Project{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, githublink }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
      border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
      "
    >
      {/* BORDER */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[100.9%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImageMotion
          priority 
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-betweenmt-4 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl pt-4 lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl  ">{title}</h2>
        </Link>
        {/* <p className='my-2 font-medium text-dark  ' style={{ fontSize: '1.1rem' }}>{summary}</p> */}
        <div className=" w-full mt-2 flex items-center justify-between  ">
          <Link
            href={link}
            target="_blank"
            className="text-xl font-semibold underline md:text-base"
          >
            {" "}
            Visit{" "}
          </Link>
          <Link href={githublink} target="_blank" className="w-8 md:w-6">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Niladri Ghoshal | Projects Page </title>

        <meta name="description" content="Niladri Ghoshal" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Creativity surpasses expertise!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={cryptoBytes}
                summary="This feature-rich application, meticulously crafted using React, Tailwind CSS, Context API, React Router, and Recharts, offers an encompassing toolkit for delving into the world of cryptocurrencies. Providing in-depth insights across a wide spectrum of digital assets, the app empowers users to effortlessly convert prices to their local currency, ensuring a seamless and user-centric experience"
                link="https://ng-cryptobytes.netlify.app/"
                githublink="https://github.com/niladrighoshal/CryptoBytes"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12 md:col-span-12">
              <Project
                title="Admin Dashboard"
                img={admin}
                // summary='This feature-rich application, meticulously crafted using React, Tailwind CSS, Context API, React Router, and Recharts, offers an encompassing toolkit for delving into the world of cryptocurrencies. Providing in-depth insights across a wide spectrum of digital assets, the app empowers users to effortlessly convert prices to their local currency, ensuring a seamless and user-centric experience'
                link="https://ng-responsive-admin-dashboard-1.netlify.app/"
                githublink="https://github.com/niladrighoshal/Responsive_Admin_Dashboard_1"
                type="Admin Panel"
              />
            </div>

            <div className="col-span-6 sm:col-span-12 md:col-span-12">
              <Project
                title="Income and Expense Tracker"
                img={expense}
                // summary='This feature-rich application, meticulously crafted using React, Tailwind CSS, Context API, React Router, and Recharts, offers an encompassing toolkit for delving into the world of cryptocurrencies. Providing in-depth insights across a wide spectrum of digital assets, the app empowers users to effortlessly convert prices to their local currency, ensuring a seamless and user-centric experience'
                link="https://ng-income-expenditure-tracker.netlify.app/"
                githublink="https://github.com/niladrighoshal/Income_and_Expense_Tracker"
                type="Expense Tracker"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Algorithm Visualizer"
                img={algorithm}
                summary="Experience algorithmic processes like never before with the Algorithm Visualizer. Built with Svelte and Tailwind CSS, this interactive platform lets you explore a range of sorting, searching, and pathfinding algorithms through engaging animations. From Merge Sort to Binary Search, witness the magic of algorithms in action. Responsive and user-friendly, the visualizer brings complex concepts to life, making learning engaging and intuitive."
                link="https://ng-algorithm-visualizer.netlify.app/"
                githublink="https://github.com/niladrighoshal/Algorithm-Visualizer-V.1"
                type="Searching Sorting & Pathfinding"
              />
            </div>

            <div className="col-span-6 sm:col-span-12 md:col-span-12">
              <Project
                title="Enable Paste Anywhere"
                img={paster}
                // summary='This feature-rich application, meticulously crafted using React, Tailwind CSS, Context API, React Router, and Recharts, offers an encompassing toolkit for delving into the world of cryptocurrencies. Providing in-depth insights across a wide spectrum of digital assets, the app empowers users to effortlessly convert prices to their local currency, ensuring a seamless and user-centric experience'
                link="https://github.com/niladrighoshal/Paster/releases/download/Paster-1/paster.exe"
                githublink="https://github.com/niladrighoshal/Paster"
                type="Python Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12 md:col-span-12">
              <Project
                title="Your Own Shopping Cart"
                img={shoppingList}
                // summary='This feature-rich application, meticulously crafted using React, Tailwind CSS, Context API, React Router, and Recharts, offers an encompassing toolkit for delving into the world of cryptocurrencies. Providing in-depth insights across a wide spectrum of digital assets, the app empowers users to effortlessly convert prices to their local currency, ensuring a seamless and user-centric experience'
                link="https://ng-shopping-list.netlify.app/"
                githublink="https://github.com/niladrighoshal/Shopping-list"
                type="CRUD App Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
