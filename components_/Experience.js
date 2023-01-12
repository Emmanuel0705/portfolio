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
        <h5 className="font-bold my-2 text-gray-100">Key achievement: </h5>
        <ol className="list-disc list-outside ml-8 text-gray-200 ">
          <li>{keyAchievement}</li>
        </ol>
      </>
    )}
  </div>
);

const experiences = [
  {
    position: "Mobile App Developer",
    employer: "Afriex",
    from: "Nov 2020",
    to: "June 2022",
    achievements: [
      "Implemented rapid prototypes to get products to market quickly.",
      "Cultivated and established best practices for mobile applications and evangelized continuous delivery with a focus on speed, risks, and fast end-user feedback.",
      "Focused on continuous improvement by keeping up-to-date on the latest Android and iOS developments and trends and presenting for architectural review.",
    ],
    keyAchievement:
      "Developed a power finance mobile application using react native",
  },
  {
    position: "Full Stack Software Developer",
    employer: "Loanith INC.",
    from: "April 2018",
    to: "Oct 2020 ",
    achievements: [
      "Recommended and developed security measures in post-implementation analysis to reduce the risk of breach.",
      "Developed program logic for new applications based on fresh coding or revamped logic from existing applications.",
      "Evaluated user requests for new or modified computer programs to determine feasibility, cost, and compatibility with current systems and capabilities.",
    ],
    keyAchievement:
      "Maintained maximum uninterrupted flow of business-critical ops. Cut downtime by 25% and costs of warranty by up to 45%.",
  },
  {
    position: "Full Stack Developer Intern",
    employer: "Wootlab Innovations Limited",
    from: "Sept 2017",
    to: "Feb 2018",
    achievements: [
      "Built front-end of applications through appealing visual design.",
      "Presented innovative ideas to improve systems, processes, or services and new perspectives based on independent research.",
      "Researched problems discovered in testing or production and developed solutions.",
      "Updated web pages and navigation tools to meet the client's current needs and improve usability.",
    ],
    keyAchievement: "",
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
  const { darkText, text, primary, secondary } = color;

  return (
    <section
      className="w-full my-10 md:p-10 p-4 overflow-hidden"
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
              { employer, achievements, from, to, position, keyAchievement },
              i
            ) => (
              <SwiperSlide key={employer + i} className="animate-slideright">
                <div
                  className={`flex flex-col items-start p-8 bg-gray-100 dark:bg-gray-900 backdrop-blur-lg dark:backdrop-blur-sm   backdrop-brightness-60 backdrop-filter-none bg-opacity-50 dark:bg-opacity-50 rounded-lg shadow-lg hover:backdrop-blur-0 dark:hover:backdrop-blur-0 dark:hover:bg-opacity-100 hover:bg-opacity-100`}
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
      <div className="w-full pt-8">
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
              Heavy focus on full stack engineering with modules on both front
              and back-end processes.
            </li>
            <li>
              Built a mock payment system for an Android eCommerce app for a
              senior year project.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
