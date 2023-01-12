import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const myLoader = ({ src, width, quality }) => {
  return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`;
};

const skills = [
  [
    "Clean Coding & Refactoring",
    " Plan Agile Sprints",
    "Software Debugging",
    "Code Validation",
    "Multitasking",
    "Teamwork",
    "Test Driven Development",
    "Manage Programs",
    "Update Software",
    "Data Structure & Algorithms",
    "Design Patterns",
    "Problem-solving",
    "Software Testing & Security",
    "Strong Communication",
    "Adaptability",
  ],
  [
    "JavaScript",
    "TypeScript",
    "Solidity",
    "HTML5",
    "CSS3",
    "ReactJS",
    "NextJS",
    "React Native",
    "Tailwind CSS",
    "Redux",
    "NodeJS",
    "NestJS",
    "ExpressJS",
    "Docker",
    "Prisma",
    "GraphQL",
    "AWS",
    "MongoDB",
    "Truffle",
    "Hardhat",
    "IPFS",
    "Ethers.JS",
  ],
];

const About = ({ aboutRef, contactRef, color }) => {
  const { darkText, text, primary, secondary } = color;
  return (
    <section
      className="w-full my-10 md:p-10 p-4 overflow-hidden"
      ref={aboutRef}
    >
      <div className="flex flex-col w-full">
        <h2
          className={`text-gray-700 dark:text-white align-middle text-4xl font-bold mb-12`}
        >
          Get to Know me
        </h2>

        <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between items-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full md:w-1/2 p-6 justify-center items-center"
          >
            <SwiperSlide className="flex justify-center items-center align-middle text-center overflow-hidden">
              {" "}
              <Image
                loader={myLoader}
                src="photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&"
                alt="Picture of the author"
                width={550}
                height={600}
                quality={60}
                className="h-full w-full"
              />{" "}
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center align-middle text-center overflow-hidden">
              {" "}
              <img
                src="https://media.istockphoto.com/photos/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-picture-id1355110818?b=1&k=20&m=1355110818&s=170667a&w=0&h=O58XhltYuAw0ssiUWXAFlIitq_4kj-WdJFWcTLEoUi0="
                alt="Picture of the author"
                width={550}
                height={600}
              />{" "}
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center align-middle text-center overflow-hidden">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="Picture of the author"
                width={550}
                height={600}
                className="overflow-hidden"
              />{" "}
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col relative justify-start items-start w-full md:w-1/2 p-4 z-10">
            <h2
              className={`absolute text-gray-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 sm:rotate-0   text-8xl font-bold opacity-10 -z-10`}
            >
              {" "}
              ABOUT
            </h2>
            <h2
              className={`text-gray-700 dark:text-gray-300 text-2xl font-bold opacity-70`}
            >
              {" "}
              Who am I?
            </h2>
            <h2
              className={`text-gray-600 dark:text-gray-300 text-xl font-bold mt-4`}
            >
              {" "}
              {"I'm Samuel Ajibola"}
            </h2>
            <p
              className={`text-gray-800 dark:text-gray-100 text-base font-medium text-justify leading-10 `}
            >
              Knowledgeable, diligent and skilled software development
              professional with over 5 years of experience offering advanced
              abilities in a wide range of programming languages, including
              JavaScript, TypeScript, and Solidity. Quickly understands
              requirements for new systems and creates high-quality, clean, and
              robust code. Familiar with testing, debugging, and correcting
              problems found in existing software systems.
            </p>
            <div className="flex justify-center items-center mt-4 w-full">
              <button
                className={`font-semibold hover:text-black dark:hover:text-white bg-gray-900 dark:bg-gray-100 hover:bg-transparent dark:hover:bg-transparent text-gray-100 dark:text-gray-800  py-2 px-4 mr-4 hover:border-transparent rounded`}
                onClick={() => contactRef.current.scrollIntoView()}
              >
                {`Let's Talk`}
              </button>
              <a
                className={`bg-transparent hover:bg-white dark:hover:bg-gray-900 text-gray-600 dark:text-gray-300 dark:hover:border-none font-semibold hover:text-gray-900 py-2 px-4 border border-gray-800 dark:border-gray-300 hover:border-transparent rounded `}
                href="/samuelajibola_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                {`Download CV`}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative mt-4 space-y-4">
          <h2
            className={`absolute text-gray-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 sm:rotate-0   text-8xl font-bold opacity-10`}
          >
            SKILLS
          </h2>{" "}
          <h2 className={`text-gray-800 font-bold text-xl dark:text-gray-200`}>
            Soft SKills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills[0].map((skill) => (
              <p
                key={skill}
                className={`text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-100 text-black dark:bg-gray-900 dark:text-white rounded-full`}
              >
                {skill}
              </p>
            ))}
          </div>
          <h2 className={`text-gray-800 font-bold text-xl dark:text-gray-200`}>
            Hard SKills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills[1].map((skill) => (
              <p
                key={skill}
                className={`text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-black dark:bg-gray-900 dark:text-white rounded-full`}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
