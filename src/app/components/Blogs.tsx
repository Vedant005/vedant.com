import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuCalendar1 } from "react-icons/lu";
import { FaBookOpen } from "react-icons/fa";

type Blog = {
  title: string;
  description: string;
  image: string;
  uploaded: string;
  duration: string;
  link: string;
};

const blogs: Blog[] = [
  {
    title: "Under the hood of the V8 engine",
    description:
      "Dive into the working of Google's V8 engine for Javascript, \n from parsing to the functionality of Turbofan",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1736741504384/7c50b83b-e70d-4d57-9716-a1c8896201ed.jpeg?auto=compress,format&format=webp",
    uploaded: "Jan 13, 2025",
    duration: "6 min read",
    link: "https://vedants.hashnode.dev/under-the-hood-of-the-v8-engine",
  },
  {
    title: "How Javascript code is executed?",
    description:
      "This article will explain about the execution context and the call in a informative way.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1736257539976/fad2132b-7d4c-4717-a7bc-8e5c07825e5e.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    uploaded: "Jan 7, 2025",
    duration: "4 min read",
    link: "https://vedants.hashnode.dev/how-javascript-code-is-executed",
  },
  {
    title: "NPM Semantic Versioning",
    description: "Explains the semantic way of npm versioning.",
    image: "/npm.webp",
    uploaded: "Jan 3, 2025",
    duration: "4 min read",
    link: "https://vedants.hashnode.dev/npm-semantic-versioning",
  },
  {
    title: "Internal working of require module in Node.js",
    description:
      "This article will explain to you what internally happens when you call the node.js require module.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1735324727955/90b81d01-02dc-4497-bc8b-86317552e23e.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    uploaded: "Dec 27,2025",
    duration: "8 min read",
    link: "https://vedants.hashnode.dev/internal-working-of-requiring-modules-in-nodejs",
  },
];

function Blogs() {
  return (
    <section className=" py-10  text-white">
      <h1 className="text-3xl font-bold mb-6 text-white">Blogs</h1>
      <div className="max-w-4xl grid md:grid-cols-2 gap-4">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-black border dark:border-zinc-500 border-zinc-200  rounded-xl mb-2 hover:shadow-xl transition"
          >
            <Link href={blog.link} className="block">
              <Image
                width={400}
                height={168}
                src={blog.image}
                alt={blog.title}
                className="w-full h-50 object-cover  rounded-t-xl"
              />
              <div className="p-4 flex flex-col">
                <div>
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-400 flex gap-2 items-center">
                    <FaBookOpen />
                    {blog.duration}
                  </p>
                  <p className="text-sm text-gray-400 flex gap-2 items-center">
                    <LuCalendar1 />
                    {blog.uploaded}
                  </p>
                  <p className="mt-2 text-gray-300 text-sm">
                    {blog.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
