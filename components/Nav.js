import Image from "next/image";
import React, { useState, useRef } from "react";
import {
    FaAddressCard,
    FaHome,
    FaProjectDiagram,
    FaServicestack,
    FaUserAlt,
    FaFileDownload,
    FaBook,
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";
import { BsFillChatTextFill } from "react-icons/bs";

const navs = [];

const Nav = ({
    homeRef,
    aboutRef,
    experienceRef,
    servicesRef,
    portfolioRef,
    contactRef,
    onChange,
}) => {
    const [active, setActive] = useState("home");

    const handleChange = (e) => {
        onChange(e);
        setActive(e);
    };

    return (
        <nav
            className="
      pointer-events-auto min-w-0 border-b  border-r bg-gray-900 dark:border-gray-700 border-opacity-10 dark:bg-white bg-opacity-90 dark:bg-opacity-60 dark:backdrop-blur-lg backdrop-blur-lg backdrop-filter firefox:bg-opacity-70
      items-center justify-center left-1/2 -translate-x-1/2
     max-w-max bottom-4 fixed backdrop-opacity-90 shadow-sm rounded-2xl z-20"
        >
            <ul className="flex gap-3 sm:gap-5 sm:px-4 px-2 py-4 animate-slideup">
                <li
                    onClick={() => {
                        handleChange("home");
                    }}
                    className="bg-gray-800 rounded-md group cursor-pointer p-2 items-center justify-center flex"
                >
                    <FaHome
                        className={`${
                            active === "home" ? "text-white" : "text-gray-400"
                        } group-hover:text-white`}
                        size={active === "home" ? 24 : 18}
                    />
                </li>
                <li
                    onClick={() => {
                        handleChange("about");
                    }}
                    className="bg-gray-800 rounded-md group cursor-pointer p-2 items-center justify-center flex"
                >
                    {" "}
                    <FaBook
                        className={`${
                            active === "about" ? "text-white" : "text-gray-400"
                        } group-hover:text-white`}
                        size={active === "about" ? 24 : 18}
                    />
                </li>
                <li
                    onClick={() => {
                        handleChange("experience");
                    }}
                    className="bg-gray-800 rounded-md group cursor-pointer p-2 items-center justify-center flex"
                >
                    {" "}
                    <SiExpertsexchange
                        className={`${
                            active === "experience"
                                ? "text-white"
                                : "text-gray-400"
                        } group-hover:text-white`}
                        size={active === "experience" ? 24 : 18}
                        width={30}
                        height={30}
                    />
                </li>

                <li
                    className="bg-gray-800 rounded-md group cursor-pointer p-2 items-center justify-center flex"
                    onClick={() => {
                        handleChange("portfolio");
                    }}
                >
                    <MdWorkOutline
                        className={`${
                            active === "portfolio"
                                ? "text-white"
                                : "text-gray-400"
                        } group-hover:text-white`}
                        size={active === "portfolio" ? 24 : 18}
                    />
                </li>

                {/* <li className="bg-gray-800 relative rounded-md cursor-pointer p-2 items-center justify-center flex">
          {" "}
          <FaFileDownload
            className={`${
              active === "#contact" ? "active" : ""
            }text-gray-400 group-hover:text-white active:text-white animate-pulse`}
            onClick={() => onChange("#contact")}
            size={active === "#contact" ? 24 : 18}
          />
        </li> */}
            </ul>
        </nav>
    );
};

export default Nav;
