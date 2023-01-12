import React from "react";
import { GiCheckMark } from "react-icons/gi";

const ServiceCard = ({ service, skills, tag, contactRef }) => (
  <div className="w-full md:w-1/2 xl:w-1/4">
    <div className="p-4">
      <div className="w-full p-6 group dark:bg-gray-900 bg-gray-100 text-center rounded-3xl dark:text-white text-black shadow-xl hover:bg-gray-900 dark:hover:bg-gray-100 dark:hover:bg-opacity-100 hover:bg-opacity-100  dark:hover:text-gray-900 hover:text-gray-100  transform hover:scale-100 hover:z-10 dark:hover:backdrop-blur-0 hover:backdrop-blur-0 dark:backdrop-blur-lg backdrop-blur-lg dark:backdrop-filter-none backdrop-filter-none bg-opacity-10 dark:bg-opacity-50">
        <h1 className="dark:text-gray-300 text-gray-700 group-hover:text-gray-100 dark:group-hover:text-gray-700 font-semibold text-2xl">
          {service}
        </h1>

        <hr className="mt-4 border-1 border-gray-300 dark:border-gray-600 dark:group-hover:border-gray-300 group-hover:border-gray-600" />
        <div className="pt-8">
          {skills?.map((skill, i) => (
            <div key={i} className="flex space-x-2">
              <GiCheckMark className="text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-700 group-hover:text-gray-100 mr-3 mt-3" />{" "}
              <p className="font-normal dark:text-gray-300 text-gray-700 group-hover:text-gray-100 dark:group-hover:text-gray-700 leading-10 text-left ">
                {skill}
              </p>
            </div>
          ))}

          <div
            className="w-full hidden group-hover:block py-4 bg-transparent hover:border-0 border border-gray-700 group-hover:border-gray-100 dark:group-hover:border-gray-700 dark:border-gray-100 cursor-pointer mt-6 rounded-xl text-gray-700 dark:text-white dark:group-hover:text-gray-700 group-hover:text-gray-100"
            onClick={() => contactRef?.current?.scrollIntoView()}
          >
            <span className="font-medium">{`Let's talk`}</span>
          </div>
        </div>
        {tag && (
          <div className="absolute top-4 right-4">
            <p className="bg-gray-400 font-semibold px-4 py-1 rounded-full uppercase text-xs">
              {tag}
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
);

const services = [
  {
    service: "Front End Development",
    skills: [
      "Responsive design",
      "Tested components",
      "Cross browser compatible",
      "Inclusive & accessible",
    ],
  },
  {
    service: "Mobile Development",
    skills: [
      "Language: JavaScript, Java, ",
      "Framework: React Native",
      "IOS and Android development",
    ],
  },
  {
    service: "Backend development",
    skills: [
      "scalable backend with Nodejs",
      "Relational and non-relational database development",
      "AWS Cloud storage",
    ],
  },
  {
    service: "Smart Contract Development",
    skills: [
      "Solidity and Rust",
      "Ethereum and Solana Smart contract development",
      "Tools includes, Ethers.js, web.js, ipfs",
    ],
    tag: "web3",
  },
];

const Services = ({ servicesRef, contactRef }) => {
  return (
    <section className="w-full my-10 md:p-10 p-4" ref={servicesRef}>
      <div className="w-full mb-10">
        <h2 className="dark:text-gray-300 text-gray-700 align-middle text-4xl font-bold mb-12">
          {"What I'm good at"}
        </h2>
      </div>
      <div className="relative flex flex-col justify-center flex-wrap md:flex-row">
        <h2 className="absolute dark:text-white text-gray-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 sm:rotate-0  -z-10 text-8xl font-bold opacity-10">
          SERVICES
        </h2>{" "}
        {services?.map(({ service, skills, tag }) => (
          <ServiceCard
            key={service}
            service={service}
            skills={skills}
            tag={tag}
            contactRef={contactRef}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
