"use client"

import Image from "next/image";
import expertise1 from "@/public/Expertise-1.jpg"
import expertise2 from "@/public/Expertise-2.jpg"
import expertise3 from "@/public/Expertise-3.jpg"
import expertise4 from "@/public/Expertise-4.jpg"

export default function Expertise() {
  return (
    <>
      <div className="expertise bg-[#241c18] px-30">
        <div className="px-[8%] lg:px-[3%] md:py-22 pt-10 pb-10 md:pb-[1%] relative">
        <div className="flex flex-col gap-10">
            <div className="w-full">
                <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">Our Expertise</span>
            </div>
            <div className="w-full lg:w-2/3 ">
                <h1 className="CalSans text-4xl md:text-6xl">Natural Authentic <span className="text-(--prim)"> Harmony Sustainable Elegant Tranquil</span> Comfort Crafted Timeless</h1>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}
