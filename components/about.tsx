"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a final-year student pursuing{" "}
        <span className="font-medium">
          B.E. in Computer Science & Engineering
        </span>{" "}
        from <span className="font-medium">Chandigarh University</span>.{" "}
        <span className="font-normal">
          I am passionate about web development
        </span>{" "}
        and{" "}
        <span className="font-medium">
          building scalable, high-performance applications
        </span>
        . <span className="italic">My favorite part of development</span> is
        solving complex problems and optimizing systems for better efficiency.
        My core stack includes{" "}
        <span className="font-medium">
          Next.js, React.js, Node.js, and PostgreSQL
        </span>
        . Currently, I'm working on refining my skills in full-stack development
        and looking for a <span className="font-medium">full-time</span>{" "}
        software development role where I can contribute to impactful projects
        and continue growing as an engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies, exploring new places, and trying different street foods. I also
        love <span className="font-medium">learning new technologies</span> and
        constantly challenging myself with new projects.
      </p>
    </motion.section>
  );
}
