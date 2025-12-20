"use client";

import Link from 'next/link';

import serviceImg1 from "@/public/Service-page-1.jpg";
import serviceImg2 from "@/public/Service-page-2.jpg";
import serviceImg3 from "@/public/Service-page-3.jpg";
import serviceImg4 from "@/public/Service-page-4.jpg";
import serviceImg5 from "@/public/Service-page-5.jpg";
import serviceImg6 from "@/public/service-page-6.png";
import { image } from 'framer-motion/client';

const ServicesData = [
    {
        id: "1",
        image: serviceImg1,
        title: "Residential Interior Design",
        desc: "Crafting private homes that breathe with nature’s harmony. From room makeovers to complete transformations, each space is tailored with organic textures, natural light, and serene balance."
    },
    {
        id: "2",
        image: serviceImg2,
        title: "Commercial Interior Design",
        desc: "Designing business environments that blend functionality with natural beauty. Offices, retail spaces, and hospitality venues are shaped to inspire productivity while staying rooted in the calm of nature."
    },
    {
        id: "3",
        image: serviceImg3,
        title: "Interior Design Consultation",
        desc: "Guiding you with professional advice inspired by the earth’s palette. From concepts to color schemes and material selection, we help you create interiors that resonate with natural harmony."
    },
    {
        id: "4",
        image: serviceImg4,
        title: "Outdoor & Landscape Design",
        desc: "Extending design beyond walls into gardens, patios, and decks. We sculpt outdoor spaces that connect seamlessly with the environment, fostering tranquility and a deeper bond with nature."
    },
    {
        id: "5",
        image: serviceImg5,
        title: "Renovation and Remodeling",
        desc: "Breathing new life into existing spaces. Our approach modernizes functionality while weaving in natural elements, ensuring every corner feels refreshed and harmoniously aligned with the outdoors."
    },
    {
        id: "6",
        image: serviceImg6,
        title: "Interior 2D/3D Layouts",
        desc: "Visualizing your dream space with realistic layouts enriched by nature’s essence. Our 2D and 3D renderings help you see how organic design flows before it comes to life."
    }
    

]

export default function Services() {
  return (
    <>
        <div className="section-bg text-white flex flex-col">
            <h1 className="text-8xl GolosText pt-10">Services</h1>
            <div className="flex items-center text-xl mt-3">
                <Link href="/" className="hover:text-(--prim) transition-all duration-300">Home</Link>
                <i className="ri-arrow-right-wide-fill mt-1"></i>
                <h2 className="GolosText">Services</h2>
            </div> 
        </div>

        <div className="px-[8%] lg:px-[12%] pt-30 pb-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/3 title pt-8">
                    <span className="rounded-full hero-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold">Our Services</span>
                </div>
                <div className="w-full lg:w-2/3">
                 <h1 className="CalSans text-4xl md:text-5xl w-full lg:w-[80%] mb-5">Discover<span className='text-(--prim)'> harmonious interior design</span> rooted in nature’s beauty.</h1>
                 <p className="text-gray-400 GolosText">
                    Rooted in nature, we transform visions into serene realities. Explore our crafted spaces where architecture and interior design flow with organic precision.
                 </p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {ServicesData.map((service, index) => (
                <div key={index} className="">
                    <div className="service-wrap w-full h-full flex flex-col justify-between p-8 rounded-2xl overflow-hidden bg-cover bg-center hover:-translate-y-2 transition-all duration-300" style={{ backgroundImage: `url(${service.image.src})`}}>

                    </div>
                </div>
            ))}
        </div>
    </>
  )
}
