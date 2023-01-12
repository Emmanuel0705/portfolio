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

import { FaGithub, FaTwitter, FaLinkedinIn, FaCog } from "react-icons/fa";

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
    <section className="max-h-screen overflow-hidden" ref={homeRef}>
      <div className="flex justify-between items-center">
        <div className="fixed z-10 w-16 h-16">
          <img alt="logo" src="/logo_white.png" className="w-16 h-16" />
          <img
            alt="logo"
            src="/logo_black.png"
            className="w-16 h-16 absolute top-0 dark:hidden"
          />
        </div>
        <div></div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <a
              href="https://github.com/samuel-extras"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={24}
                className={`hover:text-gray-900 dark:text-gray-200 dark:hover:text-white mx-1 sm:mx-2 cursor-pointer text-gray-600 `}
              />
            </a>
            <a
              href="https://twitter.com/Samuel_extras"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter
                size={24}
                className={`hover:text-gray-900 dark:text-gray-200 dark:hover:text-white mx-1 sm:mx-2 cursor-pointer text-gray-600 `}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/samuelajibola/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn
                size={24}
                className={`hover:text-gray-900 dark:text-gray-200 dark:hover:text-white mx-1 sm:mx-2 cursor-pointer text-gray-600 `}
              />
            </a>
          </div>
          <div className="ml-4">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md text-base font-medium dark:text-gray-200 text-gray-700 hover:text-opacity-100 focus:outline-none focus-visible:ring-opacity-75`}
                  >
                    <FaCog
                      className={`${open ? "" : "text-opacity-50"}
                  ml-2 h-8 w-8 cursor-pointer transition duration-150 ease-in-out group-hover:text-opacity-80`}
                      aria-hidden="true"
                      size={30}
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute  z-10 mt-3 max-w-sm -translate-x-1/2 transform px-2 sm:px-0 lg:max-w-3xl">
                      <div
                        className={`overflow-hidden rounded-lg shadow-lg ring-1 ring-[${color.primary}] ring-opacity-5`}
                      >
                        <div
                          className={`absolute -mr-10 right-1/4 sm:right-1/2 p-4 md:w-64 w-52 rounded-md bg-white dark:bg-gray-900 shadow-md`}
                        >
                          <div className="flex justify-between">
                            {renderThemeToggle()}
                            <div className="border dark:hover:bg-gray-700 hover:bg-gray-300 rounded-lg border-gray-300 dark:border-gray-700 p-2">
                              <a
                                className=""
                                href="/samuelajibola_cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                              >
                                <MdDownload className="w-6 h-6 dark:text-gray-300 text-gray-700" />
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3 justify-center items-center my-2">
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="toggleB"
                                className="sr-only"
                              />
                              <div className="block bg-gray-200 dark:bg-gray-700 w-14 h-8 rounded-full"></div>
                              <div className="dot absolute left-1 top-1 bg-[#7400b8] w-6 h-6 rounded-full transition"></div>
                            </div>
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="toggleB"
                                className="sr-only"
                              />
                              <div className="block bg-gray-200 dark:bg-gray-700 w-14 h-8 rounded-full"></div>
                              <div className="dot absolute left-1 top-1 bg-[#9CEC5B] w-6 h-6 rounded-full transition"></div>
                            </div>
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="toggleB"
                                className="sr-only"
                              />
                              <div className="block bg-gray-200 dark:bg-gray-700 w-14 h-8 rounded-full"></div>
                              <div className="dot absolute left-1 top-1 bg-[#F2BB05] w-6 h-6 rounded-full transition"></div>
                            </div>
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="toggleB"
                                className="sr-only"
                              />
                              <div className="block bg-gray-200 dark:bg-gray-700 w-14 h-8 rounded-full"></div>
                              <div className="dot absolute left-1 top-1 bg-[#292994] w-6 h-6 rounded-full transition"></div>
                            </div>
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="toggleB"
                                className="sr-only"
                              />
                              <div className="block bg-gray-200 dark:bg-gray-700 w-14 h-8 rounded-full"></div>
                              <div className="dot absolute left-1 top-1 bg-[#e07be0] w-6 h-6 rounded-full transition"></div>
                            </div>
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="toggleB"
                                className="sr-only"
                              />
                              <div className="block bg-gray-200 dark:bg-gray-700 w-14 h-8 rounded-full"></div>
                              <div className="dot absolute left-1 top-1 bg-[#ff0000] w-6 h-6 rounded-full transition"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="">
          <div className="flex justify-start items-center ml-0 md:ml-20 bg-blend-darken min-h-[100vh]   ">
            <div className="">
              <Typewriter
                options={{
                  strings: "Samuel Ajibola",
                  autoStart: true,
                  loop: false,
                  wrapperClassName: `font-bold text-gray-600 text-6xl dark:text-gray-400`,
                  cursor: "",
                  deleteSpeed: 1000,
                }}
              />{" "}
              <div className="flex ml-2 italic">
                <hr
                  className={`w-8 text-lg self-center mr-2 border border-gray-900 dark:border-gray-50 `}
                />
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer with over 5 years of experience",
                      "Offering advanced abilities in a wide range of programming languages",
                      "Creates high-quality, clean, and robust code",
                      "Professional in software development, testing, debugging, update and so on",
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: `text-gray-900 dark:text-gray-50`,
                  }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="flex justify-start items-center ml-0 md:ml-20 bg-blend-darken min-h-[100vh]   ">
                <div className="">
                  <Typewriter
                    options={{
                      strings: "Samuel Ajibola",
                      autoStart: true,
                      loop: false,
                      wrapperClassName: "font-bold text-gray-400 text-6xl",
                      cursor: "",
                      deleteSpeed: 1000,
                    }}
                  />{" "}
                  <div className="flex ml-2 italic">
                    <hr className="w-8 text-lg self-center mr-2" />
                    <Typewriter
                      options={{
                        strings: [
                          "Software Engineer with over 5 years of experience",
                          "Offering advanced abilities in a wide range of programming languages",
                          "Creates high-quality, clean, and robust code",
                          "Professional in software development, testing, debugging, update and so on",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-start items-center ml-0 md:ml-20 bg-blend-darken min-h-[100vh]   ">
                <div className="">
                  <Typewriter
                    options={{
                      strings: "Samuel Ajibola",
                      autoStart: true,
                      loop: false,
                      wrapperClassName: "font-bold text-gray-400 text-6xl",
                      cursor: "",
                      deleteSpeed: 1000,
                    }}
                  />{" "}
                  <div className="flex ml-2 italic">
                    <hr className="w-8 text-lg self-center mr-2" />
                    <Typewriter
                      options={{
                        strings: [
                          "Software Engineer with over 5 years of experience",
                          "Offering advanced abilities in a wide range of programming languages",
                          "Creates high-quality, clean, and robust code",
                          "Professional in software development, testing, debugging, update and so on",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-start items-center ml-0 md:ml-20 bg-blend-darken min-h-[100vh]   ">
            <div className="">
              <Typewriter
                options={{
                  strings: "Samuel Ajibola",
                  autoStart: true,
                  loop: false,
                  wrapperClassName: "font-bold text-gray-400 text-6xl",
                  cursor: "",
                  deleteSpeed: 1000,
                }}
              />{" "}
              <div className="flex ml-2 italic">
                <hr className="w-8 text-lg self-center mr-2" />
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer with over 5 years of experience",
                      "Offering advanced abilities in a wide range of programming languages",
                      "Creates high-quality, clean, and robust code",
                      "Professional in software development, testing, debugging, update and so on",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      {/* <div className="flex justify-start items-center ml-0 md:ml-20 bg-blend-darken min-h-[100vh]   ">
        <div className="">
          <Typewriter
            options={{
              strings: "Samuel Ajibola",
              autoStart: true,
              loop: false,
              wrapperClassName: "font-bold text-gray-400 text-6xl",
              cursor: "",
              deleteSpeed: 1000,
            }}
          />{" "}
          <div className="flex ml-2 italic">
            <hr className="w-8 text-lg self-center mr-2" />
            <Typewriter
              options={{
                strings: [
                  "Software Engineer with over 5 years of experience",
                  "Offering advanced abilities in a wide range of programming languages",
                  "Creates high-quality, clean, and robust code",
                  "Professional in software development, testing, debugging, update and so on",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div> */}

      {/* <div className="text-white z-10 flex items-center gap-2 absolute flex-col bottom-4 ml-2">
        <FaGithub className="cursor-pointer w-6 h-6" />
        <FaLinkedinIn className="cursor-pointer w-6 h-6" />
        <FaTwitter className="cursor-pointer w-6 h-6" />
        <hr className="w-6 rotate-[90deg] mt-2" />
      </div> */}
      <div className=" animate-bounce hidden sm:block absolute bottom-10 z-30 right-1 group">
        <div
          className="hover:text-gray-900 text-gray-600 dark:text-gray-300 rotate-[90deg] hover:cursor-pointer flex items-center hover:font-bold "
          onClick={() => {}}
        >
          scroll down
          <hr
            className={`w-6 ml-2 hover:text-gray-50 cursor-pointer border border-gray-600 dark:border-gray-400 hover:font-bold`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
