import React from "react";
import { GoQuote } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonial = () => {
  return (
    <section className="w-full h-auto my-10 md:p-10 p-4">
      <div className="w-full mb-6 p-4">
        <h2 className="dark:text-gray-300 text-gray-700 align-middle text-4xl font-bold mb-4">
          What People Say About Me
        </h2>
      </div>
      <dl className="w-full flex relative flex-wrap">
        <h2 className="absolute dark:text-white text-gray-700 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 sm:rotate-0 text-5xl  md:text-8xl font-bold opacity-10 ">
          TESTIMONIALS
        </h2>{" "}
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
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
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.name} className="animate-slideright">
              <div className="relative flex flex-col p-6 group dark:bg-gray-900 bg-gray-200 hover:bg-gray-900 text-center rounded-3xl dark:text-white shadow-sm dark:hover:bg-opacity-100  transform hover:scale-100 hover:z-10 dark:hover:backdrop-blur-0 dark:backdrop-blur-sm backdrop-blur-lg dark:backdrop-filter-none backdrop-filter-none dark:bg-opacity-50 bg-opacity-50 group ">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md  dark:text-white text-gray-800 group-hover:text-white">
                    <GoQuote className="h-6 w-6" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="pt-8 text-base dark:text-gray-300 text-gray-700 group-hover:text-white italic">
                  {feature.description}
                </dd>
                <div className="flex flex-row justify-start max-w-full mt-3">
                  <div className="mr-2 min-w-fit">
                    <img
                      src={feature.image}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 items-start justify-start ">
                    <p className="truncate flex whitespace-normal  text-left font-bold dark:text-gray-100 text-gray-700 group-hover:text-white">
                      {feature.name}
                    </p>
                    <p className="truncate text-left w-[75%] dark:text-gray-300 text-gray-700 group-hover:text-white mt-1">
                      {feature.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </dl>
    </section>
  );
};

export default Testimonial;

const features = [
  {
    name: "Korede Oluwabusuyi",
    company: "Akortech Services and consult",
    description:
      "We want to reflect our satisfaction with the cooperation in developing our web application. We are delighted with the solution provided to us by Samuel and with the communication flow through the project.",
    image: "/koredeBusuyi.jpg",
  },
  {
    name: "Ogunleye Opeyemi",
    company: "Extras Beauty",
    description:
      "I am so glad that I found Samuel. He is an excellent software developer, he takes the time to make sure everything functions in the best way possible. He is always working to improve my website and make it better for me and that means a lot to me!",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Oluwatobiloba Emmanuel",
    company: "Codehood Guru",
    description:
      "Samuel is the best developer I have come across in all my years of experience. He is a master at what he does and this is just the tip of the iceberg. I love his attitude, communication skill, and timely delivery. I recommend him.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Harry Deuce",
    company: "Codehood Guru",
    description:
      "As a junior Software developer, I always trust Samuel's judgment on any project. He is the best software developer I have come across, and he is super kind to his teammates too. I remember when he helped me with a bug in the system and not only did he fix it quickly, but also taught me some new tricks that would help me in future projects. Really thankful to him!.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
