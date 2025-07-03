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
    title: "IP Whitelist Manager",
    description:
      "The IP Whitelist Manager is a robust, backend-only application designed to provide a secure and efficient way to manage and enforce IP-based access restrictions for various services with rate-limiting, Audit Logging, Role-based Access Control, Email notifications. It exposes a suite of RESTful APIs to handle IP whitelist CRUD operations, associate IPs with specific services, and control access based on client IP addresses.",
    image: "/ip.webp",
    tech: ["Node.js", "Express.js", "MongoDB", "Swagger", "JWT "],
    source: "https://github.com/Vedant005/IP-Whitelist-Manager",
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
    <section className="py-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>
      <div className="max-w-4xl grid md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-black border dark:border-zinc-500 rounded-xl mb-2 h-full flex flex-col" // Added flex flex-col here
          >
            <Image
              width={400}
              height={168}
              src={project.image}
              alt={project.title}
              className="w-full h-50 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col flex-grow">
              {" "}
              {/* Added flex-grow here */}
              <div className="mb-4">
                {" "}
                {/* Removed fixed height and adjusted margin */}
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto">
                {" "}
                {/* Added mt-auto to push tech stack down */}
                <div className="mt-3 mb-3 flex flex-wrap gap-2">
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
              <div className="p-2 flex items-start gap-2">
                {" "}
                {/* Added mt-auto to push links to the bottom */}
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
