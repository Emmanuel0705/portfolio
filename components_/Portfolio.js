import React, { useEffect, useMemo, useState } from "react";
import { FaGlobe, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { FcSmartphoneTablet } from "react-icons/fc";
import Pagination from "./Pagination";

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
  <div className="max-w-sm w-full md:w-1/3 sm:w-1/2 2xl:w-1/4 transform hover:scale-125 hover:z-10 flex group p-2 animate-slideup">
    <div
      className="h-72 w-full block group-hover:h-auto flex-none bg-center group-hover:bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden "
      style={{
        backgroundImage: `url(${image})`,
      }}
      title={name}
    ></div>
    <div className="hidden dark:bg-gray-900 bg-white backdrop-blur-lg dark:backdrop-blur-sm backdrop-filter dark:backdrop-filter bg-opacity-50 dark:bg-opacity-50  rounded-b lg:rounded-b-none p-4 group-hover:flex flex-col justify-between leading-normal group-hover:-ml-[85%]  animate-slideright">
      <div className="mb-2">
        <p className="text-sm font-bold dark:text-gray-200 text-gray-700 flex items-center">
          {type === "Web" ? (
            <FaGlobe className="mr-2" />
          ) : (
            <FcSmartphoneTablet className="mr-2" />
          )}

          {type}
        </p>
        <div className="dark:text-gray-300 text-gray-700 font-bold text-lg mb-2">
          {name}
        </div>
        <p className="dark:text-gray-100 text-gray-700 text-sm font-light">
          {description}.
        </p>
      </div>
      <div className="">
        {tools.map((tool) => (
          <span
            key={tool}
            className="inline-block italic dark:bg-gray-700 bg-gray-200 rounded-full px-2 py-1 text-xs font-medium dark:text-gray-200 text-gray-900   mr-1 mb-2"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="flex justify-start items-center gap-2">
        <div className="hover:border-gray-300 text-gray-700 dark:text-gray-100 hover:text-gray-300 border-transparent border p-2 rounded-md">
          <FaExternalLinkAlt className="w-4 h-4 " />
        </div>
        <div className="hover:border-gray-300 border-transparent border p-2 rounded-md text-gray-700 dark:text-gray-100 hover:text-gray-300">
          <FaCodeBranch className="w-4 h-4 " />
        </div>
      </div>
    </div>
  </div>
);

const projects = [
  {
    name: "BitSpine Lending And Borrowing",
    description:
      "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
    tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Web",
  },
  {
    name: "Spounge Music App",
    description:
      "A live streaming music app that is powered by shazam music api and geo-ipify geolocation API. this app gives vibes of a music app",
    tools: ["React", "TailwindCSS", "Redux-Tool-kit", "Shazam API"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Web",
  },
  {
    name: "BitSpine Lending And Borrowing",
    description:
      "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
    tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Web",
  },
  {
    name: "BitSpine Lending And Borrowing",
    description:
      "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
    tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Web",
  },
  {
    name: "BitSpine Lending And Borrowing",
    description:
      "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
    tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Web",
  },
  {
    name: "BitSpine Lending And Borrowing",
    description:
      "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
    tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Web",
  },
  {
    name: "BitSpine Lending And Borrowing",
    description:
      "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
    tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Web",
  },
  {
    name: "BitSpine Lending And Borrowing",
    description:
      "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
    tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Web",
  },
  {
    name: "BitSpine Lending And Borrowing",
    description:
      "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
    tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Web",
  },
  {
    name: "BitSpine Lending And Borrowing",
    description:
      "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
    tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Mobile",
  },
  {
    name: "BitSpine Lending And Borrowing",
    description:
      "Cryptocurrency lending and borrowing app that was built on the compound protocol and it was built during an hackathon and i won the second place",
    tools: ["React", "TailwindCSS", "Compound API", "Ethers.js"],
    url: "",
    github: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "Mobile",
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
    <section className="w-full mb:p-10 p-4" ref={portfolioRef}>
      <div className="w-full mb-8 pl-10">
        <h2 className="dark:text-gray-300 text-gray-700 text-4xl font-bold mb-6">
          Portfolio
        </h2>
        <nav>
          <ul className="flex">
            <li
              onClick={() => {
                setData(projects);
                setTab("All");
                console.log(tab);
              }}
              className={`${
                tab == "All" ? "active" : " "
              } [&.active]:bg-slate-100 [&.active]:shadow-lg [&.active]:font-bold dark:[&.active]:bg-gray-600 dark:text-gray-300 text-gray-700 hover:bg-slate-100 dark:hover:bg-gray-600  dark:hover:text-gray-50 hover:text-gray-900 hover:font-bold mr-2 px-4 py-2 rounded-md`}
            >
              <span> All</span>
            </li>
            <li
              className={`${
                tab == "Web" ? "active" : " "
              } [&.active]:bg-slate-100 [&.active]:shadow-lg [&.active]:font-bold dark:[&.active]:bg-gray-600 dark:text-gray-300 text-gray-700 hover:bg-slate-100 dark:hover:bg-gray-600  dark:hover:text-gray-50 hover:text-gray-900 hover:font-bold mr-2 px-4 py-2 rounded-md`}
              onClick={() => {
                setData(web);
                setTab("Web");
                console.log(tab);
              }}
            >
              <span> Web</span>
            </li>
            <li
              className={`${
                tab == "Mobile" ? "active" : " "
              } [&.active]:bg-slate-100 [&.active]:shadow-lg [&.active]:font-bold dark:[&.active]:bg-gray-600 dark:text-gray-300 text-gray-700 hover:bg-slate-100 dark:hover:bg-gray-600  dark:hover:text-gray-50 hover:text-gray-900 hover:font-bold mr-2 px-4 py-2 rounded-md`}
              onClick={() => {
                setData(mobile);
                setTab("Mobile");
                console.log(tab);
              }}
            >
              <span>Mobile</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-wrap justify-center relative">
        <h2 className="absolute dark:text-white text-gray-700 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 sm:rotate-0  -z-10 text-8xl font-bold opacity-10">
          PROJECTS
        </h2>{" "}
        {currentPortfolioData?.map(
          ({ name, description, tools, type, url, github, image }, i) => (
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
          )
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
        portfolioRef={portfolioRef}
        data={data}
      />
    </section>
  );
};

export default Portfolio;
