"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";
import GithubGraph from "./components/GithubGraph";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Links from "./components/Links";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white  px-4 py-10 ">
      <div className="max-w-4xl mx-auto ">
        <div className="max-w-4xl w-full flex flex-col-reverse md:flex-row mb-8 items-center md:items-center gap-3 md:gap-8">
          <div className="w-full mb-9   md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl  md:text-6xl font-bold mb-3 leading-tight">
              Hi, <br />
              <span className="text-white">I&apos;m Vedant</span>{" "}
              <span className="inline-block animate-waving-hand">👋</span>
            </h1>
            <p className="text-white mt-1 flex justify-center md:justify-start text-center">
              <Link
                href="mailto:vedantkanekar123@gmail.com"
                className="hover:text-green-300 flex items-center justify-center  gap-2 mb-2 text-md"
              >
                <CiMail className="size-5" /> vedantkanekar909@gmail.com
              </Link>
            </p>

            <p className="text-gray-300 text-lg sm:text-xl max-w-xl  ">
              Full-Stack Developer who loves creating intuitive and dynamic UIs
              with fast, secure and scalable backends using modern tools. <br />
              Obsessed with learning new technologies.
              <br /> Currently exploring Web3 and GenAI.
            </p>
            <Links />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center ">
            <div className="w-full h-80 rounded-xl mb-5 overflow-hidden ">
              <Image
                src="/profile.webp"
                alt="Vedant Kanekar"
                width={500}
                height={500}
                priority
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex gap-2 items-center mb-4    ">
              <Link
                href="https://drive.google.com/file/d/1daSSctUpciZmilJZIGYzj-ywk9cFYILp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 ml-4 px-2 py-2 border border-zinc-300 dark:border-zinc-500 rounded-lg text-sm font-medium hover:border-zinc-400 hover:dark:border-zinc-600 transition w-3/4"
              >
                View Resume <FaExternalLinkAlt className="text-xs" />
              </Link>

              <a
                href="https://drive.google.com/uc?export=download&id=1daSSctUpciZmilJZIGYzj-ywk9cFYILp"
                download
                className="text-emerald-400 hover:text-emerald-300 border border-zinc-300 dark:border-zinc-500 hover:dark:border-zinc-600 rounded-lg p-2 text-xl transition"
              >
                <IoMdDownload />
              </a>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Contribution Graph
        </h1>
        <GithubGraph />
        <Skills />
        <Projects />
        <Blogs />
      </div>
    </main>
  );
}
