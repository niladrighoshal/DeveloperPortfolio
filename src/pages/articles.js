import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";

import featuredArticleIMG1 from "../../public/images/articles/featured1.jpg";
import featuredArticleIMG2 from "../../public/images/articles/7F.jpg";

import otherImage1 from "../../public/images/articles/2.jpg";
import otherImage2 from "../../public/images/articles/1.jpg";
import otherImage3 from "../../public/images/articles/3.jpg";
import otherImage4 from "../../public/images/articles/4.jpg";
import otherImage5 from "../../public/images/articles/5.jpg";
import otherImage6 from "../../public/images/articles/6.1.jpg";
import otherImage7 from "../../public/images/articles/8.jpg";
import otherImage8 from "../../public/images/articles/10.jpg";
import otherImage9 from "../../public/images/articles/11.jpeg";

import { motion, useMotionValue } from "framer-motion";

const FramerImageMotion = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImageMotion
        priority 
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, timeToRead, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light ">
      {/* DARK BORDER  */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[100.9%] h-[102%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light 
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block  cursor-pointer overflow-hidden rounded-xl "
      >
        <FramerImageMotion
          src={img}
          alt={title}
          className="w-full  h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className=" capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg  ">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary dark:text-primaryDark font-semibold">
          {timeToRead}
        </span>
      </Link>
    </li>
  );
};

const OtherArticles = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: 0.5, ease: "easeInOut" }}
      exit={null}
      // viewport={{once:true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
       bg-light first:mt-0 last:mb-10 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark 
    sm:flex-col odd:
    "
    >
      <MovingImage title={title} img={img} link={link} />
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-semibold hover:underline ">
          {/* {title} */}
        </h2>
      </Link>

      <Link href={link} target="_blank">
        <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:pl-0 xs:text-sm sm:hidden ">
          {date}
        </span>
      </Link>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Niladri Ghoshal | Articles Page </title>

        <meta name="description" content="Niladri Ghoshal" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light  ">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl md:pt-12 " />


          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Mastering the Art of Web Development: Crafting Stunning and Responsive Online Experiences"
              summary="Dive into the world of web development: design captivating interfaces, code interactive features, and deploy seamless experiences. Explore languages, tools, and strategies for modern websites."
              timeToRead="6 min read"
              link="https://niladrighoshal21.blogspot.com/2023/08/web-development-overview-web.html"
              img={featuredArticleIMG1}
            />

            <FeaturedArticle
              title="Robotics now, Robotics next: Exploring the Present and Future of Robotics"
              summary="Embark on the Fascinating World of Robotics: Sensors, AI, Autonomous Vehicles, and Space Exploration. Uncover the Transformative Potential of Robots Across Diverse Industries and Daily Life."
              timeToRead="5 min read"
              link="https://niladrighoshal21.blogspot.com/2023/08/robotics-now-robotics-next-basics-of.html"
              img={featuredArticleIMG2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>

          <ul>
            <OtherArticles
              title="Unveiling the AI Era: Navigating Technological Revolution in Modern Society"
              date="May 12,2023"
              link="https://niladrighoshal21.blogspot.com/2023/08/human-intelligence-vs-artificial.html"
              img={otherImage1}
            />

            <OtherArticles
              title="Navigating the AI Revolution: Striking a Harmonious Balance in a Tech-Driven World"
              date="May 14,2023"
              link="https://niladrighoshal21.blogspot.com/2023/08/essence-of-ai-in-daily-life-ai-has.html"
              img={otherImage2}
            />

            <OtherArticles
              title="Nature and Artificial Intelligence: Complex Impacts on Environment and Conservation"
              date="May 17,2023"
              link="https://niladrighoshal21.blogspot.com/2023/08/nature-and-artificial-intelligence-ai.html"
              img={otherImage3}
            />

            <OtherArticles
              title="Gazing into the Abyss: Unraveling the Enigma of AI's Predictive Powers for Future Events"
              date="May 24,2023"
              link="https://niladrighoshal21.blogspot.com/2023/08/can-ai-see-future-ai-as-it-currently.html"
              img={otherImage4}
            />

            <OtherArticles
              title="Safeguarding Our Digital Frontiers: Unveiling the World of Cyber Attacks and Cybersecurity"
              date="May 29,2023"
              link="https://niladrighoshal21.blogspot.com/2023/08/our-data-in-safe-hands-cyber-attack.html"
              img={otherImage5}
            />

            <OtherArticles
              title="Unlocking the Future: Delving into the Potential and Possibilities of Quantum Computing"
              date="June 08,2023"
              link="https://niladrighoshal21.blogspot.com/2023/08/quantum-computing-quantum-computing-is.html"
              img={otherImage6}
            />

            <OtherArticles
              title="Into the Shadows: Unveiling the Enigma of the Dark Web and Its Ominous Threats"
              date="June 22,2023"
              link="https://niladrighoshal21.blogspot.com/2023/08/web-mystery-with-threats.html"
              img={otherImage7}
            />

            <OtherArticles
              title="Unlocking Insights and Decisions with Data Analytics: Strategies for Success"
              date="July 16,2023"
              link="https://niladrighoshal21.blogspot.com/2023/08/data-analytics-data-analytics-is.html"
              img={otherImage8}
            />

            <OtherArticles
              title="Decoding Cloud Seeding: Navigating Weather Modification's Science and Controversies"
              date="July 22,2023"
              link="https://niladrighoshal21.blogspot.com/2023/08/cloud-seeding-navigating-skies-of.html"
              img={otherImage9}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
