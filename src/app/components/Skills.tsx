import React from "react";
import Image from "next/image";
import {
  Bot,
  Boxes,
  FileSearch,
  FlaskConical,
  Sparkles,
  TreePine,
  Workflow,
  Zap,
} from "lucide-react";
import { SiHuggingface, SiLangchain } from "react-icons/si";

const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "HTML/CSS",
  "React",
  "Vite",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "Zustand",
  "Node.js",
  "Express",
  "FastAPI",
  "Flask",
  "LangChain",
  "LangGraph",
  "RAG",
  "Multi-Agent Systems",
  "LLM Orchestration",
  "Hugging Face",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Pinecone",
  "Prisma",
  "SQLAlchemy",
  "Docker",
  "Docker Compose",
  "Git",
  "GitHub Actions",
  "ARQ",
  "Alembic",
  "Pytest",
];

const skillIcons: Record<string, string | React.ReactNode> = {
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "HTML/CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
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
  FastAPI:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  Flask: "/flask.svg",
  LangChain: <SiLangchain className="w-[18px] h-[18px] text-emerald-400" />,
  LangGraph: <Workflow className="w-[18px] h-[18px] text-emerald-400" />,
  RAG: <FileSearch className="w-[18px] h-[18px] text-violet-400" />,
  "Multi-Agent Systems": <Bot className="w-[18px] h-[18px] text-sky-400" />,
  "LLM Orchestration": (
    <Sparkles className="w-[18px] h-[18px] text-amber-400" />
  ),
  "Hugging Face": (
    <SiHuggingface className="w-[18px] h-[18px] text-[#FFD21E]" />
  ),
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  Pinecone: <TreePine className="w-[18px] h-[18px] text-teal-400" />,
  Prisma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  SQLAlchemy:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Docker Compose": (
    <Boxes className="w-[18px] h-[18px] text-[#2496ED]" />
  ),
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "GitHub Actions":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  ARQ: <Zap className="w-[18px] h-[18px] text-rose-400" />,
  Alembic: <FlaskConical className="w-[18px] h-[18px] text-orange-400" />,
  Pytest:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg",
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
          {skills.map((skill) => {
            const icon = skillIcons[skill];
            return (
              <div
                key={skill}
                className="flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium text-white bg-[#28282B] shadow-md border border-zinc-700 hover:scale-105 transition-transform"
              >
                {typeof icon === "string" ? (
                  <Image src={icon} alt={skill} width={18} height={18} />
                ) : (
                  icon
                )}
                <span>{skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
