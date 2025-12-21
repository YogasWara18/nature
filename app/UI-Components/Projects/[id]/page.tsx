"use client"

import Link from 'next/link'
import ProjectsData from "@/app/JsonData/Projects.json";
import { useParams } from 'next/navigation';
import { div } from 'framer-motion/client';

export default function ProjectDetails() {

  const { id } = useParams();

  const project = ProjectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-5xl md:text-6xl GolosText mt-15">Projects Not Found!</h1>
        <div className="flex items-center gap-5 mt-3">
          <Link href="/UI-Components/Projects" className="hover:text-(--prim) text-xl transition-all duration-300 mt-5 border border-gray-300 px-4 py-2 rounded hover:bg-white">Back To Projects</Link>
        </div>
      </div>
    )
  }

  return (
    <>
         <div className="section-bg text-white flex flex-col">
        <h1 className="text-6xl md:text-8xl GolosText mt-15">Projects Details</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <Link
            href="/UI-Components/Projects"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Projects
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText text-white">{project.title}</h2>
        </div>
      </div>

      {/* Project Details  */}
      <div className="px-[8%] lg:px-[12%] py-20">
        <h2 className="CalSans text-5xl md:text-7xl">{project.title}</h2>
        <div className=""></div>
      </div>
    </>
  )
}
