"use client";

import Image from "next/image";
import HeroImg from "@/public/Hero-img.jpg";
import HeroImg2 from "@/public/hero-img2.png"
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-bg-elm"></div>
        <div className="hero-bg-elm2"></div>
        <div className="w-full px-[8%] lg:px-[12%] py-10">
          <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="">
                <span className="hero-span border border-gray-400 GolosText font-bold px-5 py-2 rounded-full">
                  Trusted Design Partner
                </span>
                <h1 className="text-6xl lg:text-7xl CalSans my-5">Find Your Inspired <span className="text-(--prim)">Interior Design</span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
