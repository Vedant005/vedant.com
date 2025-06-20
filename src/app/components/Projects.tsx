import React from "react";
import Link from "next/link";
import Image from "next/image";

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

function Projects() {
  return (
    <section className=" py-10  text-white">
      <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>
      <div className="max-w-4xl grid md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-black border dark:border-zinc-500 rounded-xl mb-2 h-full
"
          >
            <Image
              width={400}
              height={168}
              src={project.image}
              alt={project.title}
              className="w-full h-50 object-cover  rounded-t-xl"
            />
            <div className="p-4 flex flex-col">
              <div className="h-25 mb-5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="h-15 mb-3">
                <div className="mt-3 mb-3  flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="bg-neutral-800 px-2 py-1 rounded-md text-xs h-6 text-white"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-2 mt-8 flex items-start gap-2">
                {project.website && (
                  <Link
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black text-sm px-3 py-1 rounded-md font-medium hover:bg-emerald-400"
                  >
                    🌐 Website
                  </Link>
                )}
                {project.source && (
                  <Link
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black text-sm px-3 py-1 rounded-md font-medium hover:bg-emerald-400"
                  >
                    💻 Source
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
