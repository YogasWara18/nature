"use client";

import Link from "next/link";


export default function Projects() {
  return (
    <>
         <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText pt-10">Projects</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Projects</h2>
        </div>
      </div>
    </>
  )
}
