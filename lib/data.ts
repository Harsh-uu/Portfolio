import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import blogologyImg from "@/public/blogology.png";
import caseCobraImg from "@/public/caseCobra.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Chandigarh University",
    location: "Bachelor of Engineering",
    description:
      "I am a final year BE student pursuing a comprehensive curriculum in Computer Science Engineering with a focus on software development, data structures, algorithms, and system design. ",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "12th Class",
    location: "Divine Sainik School",
    description:
      "I completed my senior secondary education from here and achieved 87%",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Blogology",
    description:
      "A React & Supabase-powered platform with authentication, post creation, and an interactive UI. Features React Router for navigation and Radix UI for a modern design.",
    tags: ["React", "Supabase", "TypeScript", "React Router", "Radix UI"],
    imageUrl: blogologyImg,
    url: "https://github.com/Harsh-uu/Blog"
  },
  {
    title: "CaseCobra",
    description:
    "A Next.js eCommerce site for customizing and ordering iPhone cases, with PostgreSQL, Stripe payments, Radix UI, and React Query for optimized performance.",
    tags: ["NextJS", "PostgreSQL", "Stripe", "Radix UI", "React Query"],
    imageUrl: caseCobraImg,
    url: "https://github.com/Harsh-uu/kasekobraaa"
  },
] as const;

export const skillsData = [
  "NextJS",
  "TypeScript",
  "JavaScript",
  "C++",
  "React",
  "React Native",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "CSS",
  "HTML",
  "Git",
  "Express.js",
] as const;
