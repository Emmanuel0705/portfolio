import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ExperienceCard = ({
    position,
    employer,
    from,
    to,
    achievements,
    keyAchievement,
}) => (
    <div
        className={`flex flex-col items-start p-8 dark:bg-gray-900 bg-white  backdrop-blur-lg backdrop-brightness-50 backdrop-filter-none bg-opacity-60 rounded-lg `}
    >
        <h1 className="font-bold text-xl text-white">{position}</h1>
        <h3 className="font-bold text-lg text-gray-300 italic whitespace-pre">
            {employer},{" "}
            <span className="font-normal text-base text-gray-400 whitespace-pre-wrap">
                {" "}
                {from} - {to}
            </span>
        </h3>
        <ol className="list-disc list-outside ml-8 my-2 text-base text-gray-200 space-y-2">
            {achievements?.map((achievement, i) => (
                <li key={`${i}`}>{achievement}</li>
            ))}
        </ol>
        {keyAchievement && (
            <>
                <h5 className="font-bold my-2 text-gray-100">
                    Key achievement:{" "}
                </h5>
                <ol className="list-disc list-outside ml-8 text-gray-200 ">
                    <li>{keyAchievement}</li>
                </ol>
            </>
        )}
    </div>
);

const experiences = [
    {
        position: "Senior Backend Engineer",
        employer: "Bossbusworld ",
        from: "Sep 2021",
        to: "Current",
        achievements: [
            "Maintained existing API software applications, including fixing bugs, code revamping, installing latest technologies and removing old",
            "Installed and configured server environments for Nodejs server deployments in Digital Ocean Droplet and GIT CI/CD deployments",
            "Maintained and updated project dependencies as well as fix any conflicts, used Winson and web vitals for bug reporting, tracing and steady component optimization",
        ],
        keyAchievement:
            "Worked with other JavaScript developers and software engineers to develop front-end and back-end architecture that’s well structured and flexible,",
    },
    {
        position: " Software Engineer",
        employer: "CloudFift · Full-time",
        from: "Oct 2020",
        to: "Feb 2021 ",
        achievements: [
            "Developed 3 highly interactive web applications utilizing JavaScript, HTML5, CSS, JSON, React JS, Next JS and Node JS, while integrating Restful API and external web services, ensuring high performance.",
            "Designed, configured, and developed the fully automated CI/CD life cycle for the high- volume external web application, successfully resulting in a 5x reduction of average deployment time for the entire project",
            "Performed Full Stack development of the high-profile external web app utilizing OOP principles and SOLID principles in NODE JS, React JS/Next JS framework, resulting in 5 bug-free releases that have been deployed within all set deadlines and targets.",
        ],
        keyAchievement: " Built reusable code and libraries for future use.",
    },
    {
        position: "Full-stack Developer",
        employer: "Bitpowr · Full-time",
        from: "Dec 2020",
        to: "June 2021",
        achievements: [
            "Worked with a team of 6 devs to build a blockchain powered solutions for payment gateways, wallets , fintech and web3 applications",
            "Developed a power finance mobile application using react native",
            " Collaborated with Front-end developers to integrate user-facing elements with server side logic",
        ],
        keyAchievement: `Improved functionalities and pipeline integration by designing and implementing cross- platform
        frameworks`,
    },
];

const pagination = {
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    clickable: true,
    type: "progressbar",
};

const Experience = ({ experienceRef, color }) => {
    return (
        <section
            className="w-full md:p-10 p-4 overflow-hidden"
            ref={experienceRef}
        >
            <h2
                className={`text-gray-700 dark:text-gray-200 align-middle text-4xl font-bold mb-12`}
            >
                My Experience
            </h2>

            <div className="flex relative flex-wrap">
                <h2
                    className={`absolute text-gray-900 dark:text-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 sm:rotate-0  -z-10 text-8xl font-bold opacity-10`}
                >
                    EXPERIENCE
                </h2>{" "}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={pagination}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1120: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mt-4"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {experiences?.map(
                        (
                            {
                                employer,
                                achievements,
                                from,
                                to,
                                position,
                                keyAchievement,
                            },
                            i
                        ) => (
                            <SwiperSlide
                                key={employer + i}
                                className="animate-slideright"
                            >
                                <div
                                    className={`flex flex-col items-start lg:p-8 p-2 bg-gray-100 dark:bg-gray-900 backdrop-blur-lg dark:backdrop-blur-sm   backdrop-brightness-60 backdrop-filter-none bg-opacity-50 dark:bg-opacity-50 rounded-lg shadow-lg hover:backdrop-blur-0 dark:hover:backdrop-blur-0 dark:hover:bg-opacity-100 hover:bg-opacity-100`}
                                >
                                    <h1
                                        className={`font-bold text-xl text-gray-700 dark:text-gray-300`}
                                    >
                                        {position}
                                    </h1>
                                    <h3
                                        className={`font-bold text-lg text-gray-600 italic whitespace-pre dark:text-gray-200`}
                                    >
                                        {employer},{" "}
                                        <span
                                            className={`font-normal text-base text-gray-500 dark:text-gray-200 whitespace-normal opacity-90`}
                                        >
                                            {" "}
                                            {from} - {to}
                                        </span>
                                    </h3>
                                    <ol
                                        className={`list-disc list-outside ml-8 my-2 text-base text-gray-700 dark:text-gray-200 space-y-2`}
                                    >
                                        {achievements?.map((achievement, i) => (
                                            <li key={`${i}`}>{achievement}</li>
                                        ))}
                                    </ol>
                                    {keyAchievement && (
                                        <>
                                            <h5
                                                className={`font-bold my-2 text-gray-800 dark:text-gray-50`}
                                            >
                                                Key achievement:{" "}
                                            </h5>
                                            <ol
                                                className={`"list-disc list-outside ml-8 text-gray-700 dark:text-gray-300`}
                                            >
                                                <li>{keyAchievement}</li>
                                            </ol>
                                        </>
                                    )}
                                </div>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
            {/* <div className="w-full pt-8">
                <h2
                    className={`text-gray-700 dark:text-gray-200 font-bold text-xl my-4`}
                >
                    Education
                </h2>
                <div
                    className={`flex flex-col items-start p-8 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-30 backdrop-blur-sm dark:backdrop-blur-lg hover:backdrop-blur-0 dark:hover:backdrop-blur-0 hover:bg-opacity-100 dark:hover:bg-opacity-100 backdrop-filter-none bg-opacity-50 rounded-lg shadow-lg`}
                >
                    <div className="flex flex-col w-full md:flex-row md:justify-between md:items-center">
                        <div className="flex flex-col">
                            <div className="flex flex-col md:flex-row">
                                <p
                                    className={`font-bold text-xl text-gray-700 dark:text-gray-100 `}
                                >
                                    Bachelor of Science,{"  "}
                                </p>
                                <p
                                    className={`font-bold text-lg text-gray-600 dark:text-gray-200  italic  whitespace-pre`}
                                >
                                    Computer Science
                                </p>
                            </div>
                            <p
                                className={`font-bold text-lg text-gray-500 dark:text-gray-300  italic`}
                            >
                                University of Ibadan,{" "}
                                <span
                                    className={`font-normal text-gray-500 dark:text-gray-300`}
                                >
                                    Ibadan, OY, Nigeria.
                                </span>
                            </p>
                        </div>

                        <div
                            className={`font-normal text-base text-gray-400 dark:text-gray-200 whitespace-pre-wrap italic`}
                        >
                            <p> Nov 2016 - April 2021</p>
                        </div>
                    </div>

                    <ol
                        className={`list-disc list-outside ml-8 my-2 text-base text-gray-800 dark:text-gray-200  space-y-2`}
                    >
                        <li>
                            Heavy focus on full stack engineering with modules
                            on both front and back-end processes.
                        </li>
                        <li>
                            Built a mock payment system for an Android eCommerce
                            app for a senior year project.
                        </li>
                    </ol>
                </div>
            </div> */}
        </section>
    );
};

export default Experience;
