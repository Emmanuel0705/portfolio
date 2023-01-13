import React, { useEffect, useMemo, useState } from "react";
import { FaGlobe, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { FcSmartphoneTablet } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const pagination = {
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    clickable: true,
    type: "progressbar",
};

const ProjectCard = ({
    image,
    name,
    description,
    tools,
    url,
    github,
    icon,
    type,
}) => (
    <div className="w-full h-[60vh] relative group p-2 animate-slideup">
        <div
            className=" w-full block h-full flex-none bg-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden "
            style={{
                backgroundImage: `url(${image})`,
            }}
            title={name}
        >
            <div className="dark:bg-gray-900 h-full flex w-[90%] lg:w-[40%]  bg-white backdrop-blur-lg dark:backdrop-blur-sm backdrop-filter justify-between z-50 dark:backdrop-filter bg-opacity-50 dark:bg-opacity-50  rounded-b lg:rounded-b-none p-4 flex-col leading-normal   animate-slideright">
                <div className="mb-2 flex flex-col gap-3">
                    <div>
                        <p className="text-sm font-bold dark:text-gray-200 text-gray-700 flex items-center">
                            {type === "Web" ? (
                                <FaGlobe className="mr-2" />
                            ) : (
                                <FcSmartphoneTablet className="mr-2" />
                            )}

                            {type}
                        </p>
                        <div className="dark:text-gray-300 text-gray-700 font-bold text-lg text-left mb-2">
                            {name}
                        </div>
                        <p className="dark:text-gray-100 text-gray-700 text-sm font-light text-left">
                            {description}.
                        </p>
                    </div>
                    <div className="flex flex-wrap">
                        {tools.map((tool) => (
                            <span
                                key={tool}
                                className="inline-block italic whitespace-nowrap dark:bg-gray-700 bg-gray-200 rounded-full px-2 py-1 text-xs font-medium dark:text-gray-200 text-gray-900   mr-1 mb-2"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-start items-center gap-2">
                    <div className="hover:border-gray-300 text-gray-700 dark:text-gray-100 hover:text-gray-300 border-transparent border p-2 rounded-md">
                        <a href={url} target="_blank" rel="noreferrer">
                            <FaExternalLinkAlt className="w-4 h-4 " />{" "}
                        </a>
                    </div>
                    <div className="hover:border-gray-300 border-transparent border p-2 rounded-md text-gray-700 dark:text-gray-100 hover:text-gray-300">
                        <FaCodeBranch className="w-4 h-4 " />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const projects = [
    {
        name: "Unideals",
        description:
            "A platform that help students save big on every purchase across multiple categories is our bread and butter!",
        tools: ["React", "TailwindCSS", "Redux", "Nextjs"],
        url: "https://myunideals.com",
        github: "",
        image: "/unideal.png",
        type: "Web",
    },
    {
        name: "BossBus",
        description:
            "Bossbus has an efficient transportation platform, equipped with a smart routing system that allows for smooth and comfortable rides",
        tools: ["Nodejs", "NestJS", "Aws", "Microservices", "Docker"],
        url: "https://bossbusworld.com/",
        github: "https://bossbusworld.com/",
        image: "/bossbus.png",
        type: "Web",
    },
    {
        name: "BitSpine Lending And Borrowing",
        description:
            "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
        tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
        url: "http://bitspinendn.netlify.app/",
        github: "",
        image: "/bitspine.png",
        type: "Web",
    },

    {
        name: "BitPowr",
        description:
            "Secure and scalable wallet infrastructure for digital asset management.",
        tools: [
            "React",
            "TailwindCSS",
            "Compound API",
            "Ethers.js",
            "React Native",
            "NextJs",
        ],
        url: "http://bitpowr.com/",
        github: "",
        image: "/bitpowr.png",
        type: "Web",
    },
];

let PageSize = 6;

const Portfolio = ({ portfolioRef }) => {
    const [tab, setTab] = useState("All");
    const [data, setData] = useState(projects);

    const web = projects?.filter((project) => project.type === "Web");

    const mobile = projects?.filter((project) => project.type === "Mobile");

    const [currentPage, setCurrentPage] = useState(1);

    const currentPortfolioData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);

    return (
        <section
            className="w-full md:p-10 p-4 overflow-hidden"
            ref={portfolioRef}
        >
            <h2 className="dark:text-gray-300 text-gray-700 text-4xl font-bold mb-6">
                Portfolio
            </h2>

            <div className="flex flex-wrap justify-center relative">
                <h2 className="absolute dark:text-white text-gray-700 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 sm:rotate-0  -z-10 text-8xl font-bold opacity-10">
                    PROJECTS
                </h2>{" "}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={pagination}
                    // breakpoints={{
                    //     640: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20,
                    //     },
                    //     768: {
                    //         slidesPerView: 2,
                    //         spaceBetween: 20,
                    //     },
                    //     1024: {
                    //         slidesPerView: 2,
                    //         spaceBetween: 30,
                    //     },
                    //     1120: {
                    //         slidesPerView: 3,
                    //         spaceBetween: 15,
                    //     },
                    // }}
                    modules={[Pagination, Autoplay]}
                    className="mt-4"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {currentPortfolioData?.map(
                        (
                            {
                                name,
                                description,
                                tools,
                                type,
                                url,
                                github,
                                image,
                            },
                            i
                        ) => (
                            <SwiperSlide
                                key={name + i}
                                className="animate-slideright"
                            >
                                <ProjectCard
                                    key={name + i}
                                    name={name}
                                    image={image}
                                    description={description}
                                    tools={tools}
                                    type={type}
                                    url={url}
                                    github={github}
                                />
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </section>
    );
};

export default Portfolio;
