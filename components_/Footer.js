import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMediumM,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const blogs = [
  {
    title: "Difference Between Web 2.0 And Web 3.0",
    headline:
      "You might have heard the terms web 2.0 and web 3.0 being thrown around lately, what does it mean?",
    coverImage: "https://miro.medium.com/max/1400/1*1OCTHETon7ddZCXleyyl5g.png",
    url: "https://medium.com/@ajibolasamueloluwasegun/difference-between-web-2-0-and-web-3-0-1a560afaf0f3",
  },
  {
    title: "Difference Between Web 2.0 And Web 3.0",
    headline:
      "You might have heard the terms web 2.0 and web 3.0 being thrown around lately, what does it mean?",
    coverImage: "https://miro.medium.com/max/1400/1*1OCTHETon7ddZCXleyyl5g.png",
    url: "https://medium.com/@ajibolasamueloluwasegun/difference-between-web-2-0-and-web-3-0-1a560afaf0f3",
  },
  {
    title: "Difference Between Web 2.0 And Web 3.0",
    headline:
      "You might have heard the terms web 2.0 and web 3.0 being thrown around lately, what does it mean?",
    coverImage: "https://miro.medium.com/max/1400/1*1OCTHETon7ddZCXleyyl5g.png",
    url: "https://medium.com/@ajibolasamueloluwasegun/difference-between-web-2-0-and-web-3-0-1a560afaf0f3",
  },
  {
    title: "Difference Between Web 2.0 And Web 3.0",
    headline:
      "You might have heard the terms web 2.0 and web 3.0 being thrown around lately, what does it mean?",
    coverImage: "https://miro.medium.com/max/1400/1*1OCTHETon7ddZCXleyyl5g.png",
    url: "https://medium.com/@ajibolasamueloluwasegun/difference-between-web-2-0-and-web-3-0-1a560afaf0f3",
  },
  {
    title: "Difference Between Web 2.0 And Web 3.0",
    headline:
      "You might have heard the terms web 2.0 and web 3.0 being thrown around lately, what does it mean?",
    coverImage: "https://miro.medium.com/max/1400/1*1OCTHETon7ddZCXleyyl5g.png",
    url: "https://medium.com/@ajibolasamueloluwasegun/difference-between-web-2-0-and-web-3-0-1a560afaf0f3",
  },
  {
    title: "My experience during the Afriex web3/blockchain virtual hackathon",
    headline: `“The word hackathon is a portmanteau of the words hack and marathon, where the hack is used in the sense of playful, exploratory programming, not its alternate meaning as a reference to computer crime.” -Wikipedia.`,
    coverImage: "https://miro.medium.com/max/1400/0*XGmZISuhe-4ZKbOE",
    url: "https://medium.com/@ajibolasamueloluwasegun/my-experience-during-the-afriex-web3-blockchain-virtual-hackathon-7ead9ed89284",
  },
];

const Footer = () => {
  return (
    <footer className="text-center text-white overflow-hidden">
      <div className="p-6">
        <div className="w-full pl-10 ">
          {" "}
          <h2 className="flex dark:text-gray-300 text-gray-700 align-middle text-2xl font-bold mb-4">
            Blog{" "}
          </h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1120: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mt-4 grid lg:grid-cols-6 md:grid-cols-3 gap-4 overflow-hidden self-center"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {blogs.map((blog, i) => (
            <SwiperSlide key={blog.title + i}>
              <a href={blog.url} target="_blank" rel="noreferrer">
                <div className="lg:mb-0 mb-6">
                  <img
                    src={blog.coverImage}
                    className="w-full rounded-md shadow-lg object-cover h-40 md:h-32"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="border-t border-gray-500 dark:border-gray-200 py-8">
        <div className="mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <p className="mb-8 md:mb-0 text-gray-500 flex justify-center items-center">
              <span>
                <img
                  src="/logo_white.png"
                  alt="logo"
                  className="w-5 h-5 mr-2 hidden dark:block"
                />{" "}
                <img
                  src="/logo_black.png"
                  alt="logo"
                  className="w-5 h-5 mr-2 block dark:hidden"
                />{" "}
              </span>
              All rights reserved &copy; 2022
            </p>
            <div className="flex w-full md:w-auto">
              <a
                className="mr-2 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-lg"
                href="https://www.linkedin.com/in/samuelajibola/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
              <a
                className="mr-2 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-lg"
                href="https://github.com/samuel-extras"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
              <a
                className="mr-2 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-lg"
                href="https://web.facebook.com/samuelextras"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
              <a
                className="mr-2 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-lg"
                href="https://twitter.com/Samuel_extras"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
              <a
                href="https://medium.com/@ajibolasamueloluwasegun"
                className="mr-2 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-lg"
                target="_blank"
                rel="noreferrer"
              >
                <FaMediumM className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
              <a
                href="https://www.instagram.com/samuel_extras/"
                className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-lg"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
