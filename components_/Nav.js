import Image from "next/image";
import React, { useState, useRef } from "react";
import {
  FaAddressCard,
  FaHome,
  FaProjectDiagram,
  FaServicestack,
  FaUserAlt,
  FaFileDownload,
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
}) => {
  const [active, setActive] = useState("home");

  return (
    <nav
      className="
      pointer-events-auto min-w-0 border-b  border-r bg-gray-100 dark:border-gray-500 border-opacity-10 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30 dark:backdrop-blur-lg backdrop-blur-lg backdrop-filter firefox:bg-opacity-70
      items-center justify-center left-1/2 -translate-x-1/2
     max-w-max bottom-8 fixed backdrop-opacity-40 shadow-sm rounded-2xl z-20"
    >
      <ul className="flex gap-3 sm:gap-5 sm:px-4 px-2 py-4 animate-slideup">
        <li
          onClick={() => {
            setActive("home");
            homeRef?.current?.scrollIntoView();
          }}
          className="bg-gray-800 rounded-md group cursor-pointer p-2 items-center justify-center flex"
        >
          <FaHome
            className={`${
              active === "home" ? "active" : ""
            }text-gray-400 group-hover:text-white active:text-white`}
            size={active === "home" ? 24 : 18}
          />
        </li>
        <li
          onClick={() => {
            setActive("about");
            aboutRef?.current?.scrollIntoView();
          }}
          className="bg-gray-800 rounded-md group cursor-pointer p-2 items-center justify-center flex"
        >
          {" "}
          <FaUserAlt
            className={`${
              active === "about" ? "active" : ""
            }text-gray-400 group-hover:text-white active:text-white`}
            size={active === "about" ? 24 : 18}
          />
        </li>
        <li
          onClick={() => {
            setActive("experience");
            experienceRef?.current?.scrollIntoView();
          }}
          className="bg-gray-800 rounded-md group cursor-pointer p-2 items-center justify-center flex"
        >
          {" "}
          <SiExpertsexchange
            className={`${
              active === "experience" ? "active" : ""
            }text-gray-400 group-hover:text-white active:text-white`}
            size={active === "experience" ? 24 : 18}
            width={30}
            height={30}
          />
        </li>
        <li
          onClick={() => {
            setActive("services");
            servicesRef?.current?.scrollIntoView();
          }}
          className="bg-gray-800 rounded-md group cursor-pointer p-2 items-center justify-center flex"
        >
          {" "}
          <FaServicestack
            className={`${
              active === "services" ? "active" : ""
            }text-gray-400 group-hover:text-white active:text-white`}
            size={active === "services" ? 24 : 18}
          />
        </li>
        <li
          className="bg-gray-800 rounded-md group cursor-pointer p-2 items-center justify-center flex"
          onClick={() => {
            setActive("portfolio");
            portfolioRef?.current?.scrollIntoView();
          }}
        >
          <MdWorkOutline
            className={`${
              active === "portfolio" ? "active" : ""
            }text-gray-400 group-hover:text-white active:text-white`}
            size={active === "portfolio" ? 24 : 18}
          />
        </li>
        <li
          className="bg-gray-800 rounded-md group cursor-pointer p-2 items-center justify-center flex"
          onClick={() => {
            setActive("testimonial");
            contactRef?.current?.scrollIntoView();
          }}
        >
          {" "}
          <BsFillChatTextFill
            className={`${
              active === "testimonial" ? "active" : ""
            }text-gray-400 group-hover:text-white active:text-white`}
            size={active === "testimonial" ? 24 : 18}
          />
        </li>
        {/* <li className="bg-gray-800 relative rounded-md cursor-pointer p-2 items-center justify-center flex">
          {" "}
          <FaFileDownload
            className={`${
              active === "#contact" ? "active" : ""
            }text-gray-400 group-hover:text-white active:text-white animate-pulse`}
            onClick={() => setActive("#contact")}
            size={active === "#contact" ? 24 : 18}
          />
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
