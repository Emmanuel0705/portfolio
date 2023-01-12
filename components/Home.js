import { Fragment, useRef } from "react";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useTheme } from "next-themes";
import {
    MdOutlineNightlightRound,
    MdLightMode,
    MdDownload,
} from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";

// import required modules

import {
    FaGithub,
    FaTwitter,
    FaLinkedinIn,
    FaCog,
    FaMedium,
    FaFacebook,
    FaInstagram,
    FaFacebookF,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import { BsFilePdf } from "react-icons/bs";

const myLoader = ({ src, width, quality }) => {
    return `https://www.spellingcheck.info/wp-content/themes/atahualpa/images/checker/${src}`;
};
const solutions = [
    {
        name: "Insights",
        description: "Measure actions your users take",
        href: "##",
    },
    {
        name: "Automations",
        description: "Create your own targeted content",
        href: "##",
    },
    {
        name: "Reports",
        description: "Keep track of your growth",
        href: "##",
    },
];

const Hero = ({ homeRef, color }) => {
    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeToggle = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
            return (
                <button
                    className={`border hover:bg-gray-700 rounded-lg border-gray-700 p-2`}
                    onClick={() => setTheme("light")}
                    type="button"
                >
                    <MdLightMode className="text-gray-300 w-6 h-6" />
                </button>
            );
        }
        return (
            <button
                className={`border hover:bg-gray-300 rounded-lg p-2`}
                onClick={() => setTheme("dark")}
                type="button"
            >
                <MdOutlineNightlightRound className="text-black w-6 h-6" />
            </button>
        );
    };

    return (
        <div className="max-w-4xl flex items-center h-screen flex-wrap mx-auto ">
            <div
                id="profile"
                className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white dark:bg-gray-900 opacity-75 lg:my-0 mt-20 mx-6 lg:mx-0"
            >
                <div className="p-4 md:p-12 text-center lg:text-left">
                    <div
                        className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://source.unsplash.com/MP0IUfwrn0A')`,
                        }}
                    ></div>

                    <h1 className="text-3xl font-bold pt-8 lg:pt-0 dark:text-white">
                        Ajibola Oluwatobi
                    </h1>
                    <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start dark:text-white">
                        <svg
                            className="h-4 fill-current text-green-700 pr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>{" "}
                        software engineer
                    </p>
                    <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                        <FaEnvelope className="h-4  text-green-700 mr-4" />
                        emmanuelloluwatobi@gmail.com
                    </p>
                    <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                        <FaPhone className="h-4  text-green-700 mr-4" />
                        +234 9037 271 631
                    </p>
                    <p className="pt-8 text-sm dark:text-white">
                        I am an innovative, creative thinker who is adept at
                        coming up with real solutions that work for end users. I
                        have experience in a wide variety of software, system
                        architectures, and programming languages
                    </p>

                    <div className="pt-12 pb-8 flex gap-1 ">
                        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                            <a
                                rel="noreferrer"
                                href="https://wa.me/+2349037271631?text=Hi%20Oluwatobi,%20I%20need%20your%20service"
                                target="_blank"
                            >
                                Get In Touch
                            </a>
                        </button>
                        <button className=" dark:hover:bg-green-900 hover:bg-gray-500 text-black border border-gray-700 font-bold py-2 px-4 rounded-full dark:text-white">
                            <a
                                rel="noreferrer"
                                href="https://drive.google.com/file/d/1mUGllF_8hsteD5PShoSGr-DgXcDbf0Fx/view?usp=sharing"
                                target="_blank"
                            >
                                Download CV
                            </a>
                        </button>
                    </div>

                    <div className=" pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/oluwatobiloba.ajibola.7"
                            data-tippy-content="@facebook_handle"
                        >
                            <FaFacebookF className="h-6 fill-current text-gray-600 hover:text-green-700" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/Codehood_guru"
                            data-tippy-content="@twitter_handle"
                        >
                            <FaTwitter className="h-6 fill-current text-gray-600 hover:text-green-700" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/emmanuel0705"
                            data-tippy-content="@github_handle"
                        >
                            <FaGithub className="h-6 fill-current text-gray-600 hover:text-green-700" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/oluwatobi-ajibola/"
                        >
                            <FaLinkedinIn className="h-6 fill-current text-gray-600 hover:text-green-700" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://medium.com/@emmanuelloluwatobi"
                            data-tippy-content="@dribble_handle"
                        >
                            <FaMedium className="h-6 fill-current text-gray-600 hover:text-green-700" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/codehood_g"
                            data-tippy-content="@instagram_handle"
                        >
                            <FaInstagram className="h-6 fill-current text-gray-600 hover:text-green-700" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://drive.google.com/file/d/1mUGllF_8hsteD5PShoSGr-DgXcDbf0Fx/view?usp=sharing"
                            data-tippy-content="@instagram_handle"
                        >
                            <BsFilePdf className="h-6 fill-current text-gray-600 hover:text-green-700" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                            href="mailto:emmanuelloluwatobi@gmail.com"
                            data-tippy-content="@instagram_handle"
                        >
                            <FaEnvelope className="h-6 fill-current text-gray-600 hover:text-green-700" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-2/5">
                <img
                    src="https://source.unsplash.com/MP0IUfwrn0A"
                    className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                />
            </div>
        </div>
    );
};

export default Hero;
