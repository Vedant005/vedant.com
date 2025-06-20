import React from "react";
import Image from "next/image";

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
  "Git",
  "Express",
  "Flask",
  "Redis",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
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

function Skills() {
  return (
    <section className="text-white py-16   ">
      <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
      <div className="max-w-6xl mx-auto border dark:border-zinc-500 rounded-xl p-5">
        <div className="flex flex-wrap gap-3 cursor-pointer">
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
  );
}

export default Skills;
