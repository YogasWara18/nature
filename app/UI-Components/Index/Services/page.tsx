
import Image from "next/image";
import service1 from "@/public/Service-1.jpg"
import service2 from "@/public/Service-2.jpg"
import service3 from "@/public/Service-3.jpg"
import service4 from "@/public/Service-4.jpg"
import service5 from "@/public/Service-5.jpg"

export default function Services() {
  return (
    <>
        <div className="px-[8%] lg:px[12%] pt-20 pb-60 service relative">
            <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/3 title pt-8">
                <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">Our Services</span>
            </div>
            <div className="w-full lg:w-2/3">
                <h1 className="CalSans text-4xl md:text-6xl">Crafting Interiors Connecting with<span className="text-(--prim)"> Nature</span></h1>
            </div>
        </div>
        </div>
    </>
  )
}
