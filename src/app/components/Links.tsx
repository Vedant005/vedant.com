import React from "react";
import LinkWithIcon from "../utils/LinkWIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode, SiLeetcode, SiX } from "react-icons/si";

function Links() {
  return (
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
  );
}

export default Links;
