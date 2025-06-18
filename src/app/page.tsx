"use client";

import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { SiLeetcode, SiHashnode } from "react-icons/si";
import YearButton from "./utils/YearButton";
import { getGitHubYears } from "./utils/getYears";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );
  const github: { light: string[]; dark: string[] } = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };
  const username = "vedant005";
  const today = new Date().getFullYear();
  const joinYear = 2022;
  const years = getGitHubYears(joinYear);

  const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Vite",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "Node.js",
    "Express",
    "Flask",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Prisma",
    "Git",
    "Java",
    "Python",
  ];

  const skillIcons: Record<string, string> = {
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    Express: "/express-js.svg",
    Flask: "/flask.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    Redis:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    Prisma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    Zustand: "/zustand.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  };

  type Project = {
    title: string;

    description: string;
    image: string;
    tech: string[];
    website?: string;
    source?: string;
  };

  const projects: Project[] = [
    {
      title: "File Secure",
      description:
        "A secure file upload service in Node.js that stores file metadata in a database, runs background processing tasks, and tracks the status of those tasks.",
      image: "/file_secure.webp",
      tech: ["Node.js", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
      source: "https://github.com/Vedant005/File_secure",
    },
    {
      title: "Sales chatbot",

      description:
        "A sales chatbot that enhances the shopping experience by enabling efficient search, exploration, and purchase processes on an e-commerce platform",
      image: "/sales_chatbot.webp",
      tech: [
        "Node.js",
        "Typescript",
        "React.js",
        "MySQL",
        "Python",
        "Flask",
        "JWT",
        "Flask-SQLAlchemy",
        "TailwindCSS",
        "Zustand",
      ],

      source: "https://github.com/Vedant005/Sales_chatbot",
    },
    {
      title: "Magnet Store",

      description:
        "An Ecommerce website with CRUD functionality and cart,wishlist management",
      image: "/magnet_store.webp",
      tech: [
        "React",
        "TypeScript",
        "Zustand",
        "TailwindCSS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JWT",
      ],
      website: "https://magnetstore.netlify.app/",
      source: "https://github.com/Vedant005/Magnet-Store?tab=readme-ov-file",
    },
    {
      title: "SkillBridge",

      description:
        "A full-stack freelancing platform connecting clients and freelancers with intelligent ML-powered features for personalized gig experiences, real-time communication, and seamless UI/UX.",
      image: "/skillbridge.webp",
      tech: [
        "React.js",
        "Typescript",
        "Zustand",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "Flask",
        "Express.js",
        "Python",
      ],
      source: "https://github.com/Vedant005/SkillBridge-Frontend",
    },
  ];

  // type Blog = {
  //   title: string;
  //   description: string;
  //   image: string;
  // };

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white  px-4 py-10 ">
      <div className="max-w-4xl mx-auto ">
        <div className="max-w-4xl w-full flex flex-col mb-10 md:flex-row items-center md:items-center gap-3 md:gap-8">
          <div className="w-full mb-9   md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl  md:text-6xl font-bold mb-3 leading-tight">
              Hi, <br />
              <span className="text-white">I&apos;m Vedant</span>{" "}
              <span className="inline-block animate-waving-hand">👋</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-xl  ">
              Full-Stack Developer with the mindset of building scable backend
              and responsive frontends with awesome styles. Keen on learning new
              things and trying to find optimal solution for each software
              problem.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-300">
              <LinkWithIcon
                icon={<FaGithub />}
                label="GitHub"
                link="https://github.com/vedant005"
              />
              <LinkWithIcon
                icon={<SiX />}
                label="X"
                link="https://x.com/VedantKane56217"
              />
              <LinkWithIcon
                icon={<FaLinkedin />}
                label="LinkedIn"
                link="https://www.linkedin.com/in/vedant-kanekar/"
              />
              <LinkWithIcon
                icon={<SiLeetcode />}
                label="LeetCode"
                link="https://leetcode.com/u/Vedant109/"
              />
              <LinkWithIcon
                icon={<SiHashnode />}
                label="Hashnode"
                link="https://hashnode.com/@Vedantk005"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-100 h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/profile.webp"
                alt="Vedant Kanekar"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <h1 className="text-2xl text-white mb-4">Contribution Graph</h1>
        <div className="max-w-4xl flex xl:flex-row flex-col gap-4  ">
          <div className=" border dark:border-zinc-500 border-zinc-200 p-5 max-w-fit max-h-fit rounded-lg  ">
            <GitHubCalendar
              username={username}
              theme={github}
              blockSize={11}
              year={calendarYear}
            />
          </div>
          <div className="flex justify-center xl:flex-col flex-row flex-wrap gap-2">
            {years.slice(0, 5).map((year) => (
              <YearButton
                key={year}
                year={year}
                currentYear={calendarYear ?? today}
                onClick={() =>
                  setCalendarYear(year === calendarYear ? undefined : year)
                }
              />
            ))}
          </div>
        </div>
        <section className="text-white py-16   ">
          <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
          <div className="max-w-6xl mx-auto border dark:border-zinc-500 border-zinc-200  rounded-xl p-5">
            <div className="flex flex-wrap gap-5 cursor-pointer">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium text-white bg-[#28282B] shadow-md border border-zinc-700 hover:scale-105 transition-transform"
                >
                  <Image
                    src={skillIcons[skill]}
                    alt={skill}
                    width={18}
                    height={18}
                  />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className=" py-10  text-white">
          <h1 className="text-3xl mb-2">Projects</h1>
          <div className="max-w-4xl grid md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-black border dark:border-zinc-500 border-zinc-200  rounded-xl mb-2 hover:shadow-xl transition"
              >
                <Image
                  width={400}
                  height={168}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover  rounded-t-xl"
                />
                <div className="p-4 flex flex-col">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    {/* <p className="text-sm text-gray-400">{project.duration}</p> */}
                    <p className="mt-2 text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-neutral-800 px-2 py-1 rounded-md text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white  hover: border-b-pink-700 text-sm py-1 rounded-md font-medium"
                      >
                        🌐 Website
                      </a>
                    )}
                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black text-sm px-3 py-1 rounded-md font-medium hover:bg-gray-200"
                      >
                        💻 Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function LinkWithIcon({
  icon,
  label,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="flex items-center gap-1 px-2 py-1 bg-[#1a1a1a] rounded hover:bg-[#262626] transition"
    >
      <span className="text-sm">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
