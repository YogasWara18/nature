"use client"

import Link from "next/link";
import Image from "next/image";
import About2 from "@/public/About-page-1.jpg";
import About4 from "@/public/About-page-2.jpg"

export default function About() {
  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText pt-10">About Us</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">About Us</h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-2/3 pt-8">
            <span className="rounded-full hero-span border border-gray-400 px-6 GolosText uppercase font-bold">
              Started In 1995
            </span>
            <h1 className="CalSans pt-8 text-4xl md:text-4xl w-full lg:w-[80%] mb-5">
              We Shape Interior Designs{" "}
              <span className="text-(--prim)">Embracing Nature’s</span> Essence
              and Timeless Harmony
            </h1>
            <div className="about-content md:pt-15">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="about-text">
                  <h2 className="text-[10rem] leading-40 GolosText font-bold text-(--prim)">30</h2>
                  <p className="text-1xl lg:px-15 CalSans">Years of Experience</p>
                </div>
                <div className="about-img">
                  <Image src={About4} alt="About-image" className="object-cover rounded-2xl h-full w-full"/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
               <div className="about-image md:h-[600px]">
                  <Image src={About2} alt="About-image" className="object-cover rounded-2xl h-full w-full"/>
                </div>
                <div className="about-pere pt-8">
                  <p className="GolosText text-sm text-gray-500">We believe nature shapes spaces, inspiring harmony, creativity, emotion, and timeless human connection.</p>
                <button className="mt-5 border border-gray-500/50 px-6 py-3 rounded-full GolosText font-semi-bold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer group">
                  <Link href="/">
                    Learn More <i className="bi bi-arrow-right ps-1"></i>
                  </Link>
                </button>
                </div>
          </div>
        </div>
      </div>

      <div className="video w-full pb-10">
        <video 
        src="/About-page.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        />
      </div>

      <div className="px-[8%] lg:px-[12%] py-20 pb-0">
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/3 title pt-8">
                <span className="rounded-full hero-span border border-gray-400 px-6 GolosText uppercase font-bold">Our History</span>
            </div>
            <div className="w-full lg:w-2/3">
                <h1 className="CalSans text-4xl md:text-6xl">Our Story Grows Like Forests<span className="text-(--prim)"> Shaped by Beautiful</span> Stages and Enduring Events.</h1>
            </div>
        </div>
      </div>
    </>
  );
}
