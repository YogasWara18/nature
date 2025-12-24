"use client";

import Link from "next/link";

import serviceImg1 from "@/public/Service-page-1.jpg";
import serviceImg2 from "@/public/Service-page-2.jpg";
import serviceImg3 from "@/public/Service-page-3.jpg";
import serviceImg4 from "@/public/Service-page-4.jpg";
import serviceImg5 from "@/public/Service-page-5.jpg";
import serviceImg6 from "/Service-page-6.png";
import { image } from "framer-motion/client";
import Newsletter from "../../Index/Newsletter/page";

const ServicesData = [
  {
    id: "1",
    image: serviceImg1,
    title: "Residential Interior Design",
    desc: "Residential interiors blending nature’s harmony, organic textures, natural light, and serene balance for homes.",
  },
  {
    id: "2",
    image: serviceImg2,
    title: "Commercial Interior Design",
    desc: "Designing business spaces uniting functionality and natural beauty, inspiring productivity through serene, nature‑rooted harmony.",
  },
  {
    id: "3",
    image: serviceImg3,
    title: "Interior Design Consultation",
    desc: "Guiding interiors with earth’s palette, offering advice, concepts, colors, and materials for natural harmony.",
  },
  {
    id: "4",
    image: serviceImg4,
    title: "Outdoor & Landscape Design",
    desc: "Extending design outdoors, crafting gardens, patios, and decks that harmonize with nature, fostering tranquil connections.",
  },
  {
    id: "5",
    image: serviceImg5,
    title: "Renovation and Remodeling",
    desc: "Revitalizing spaces with modern functionality, weaving natural elements for refreshed harmony aligned outdoors.",
  },
  {
    id: "6",
    image: serviceImg6,
    title: "Interior 2D/3D Layouts",
    desc: "Visualizing dream spaces with 2D and 3D renderings, enriched by nature’s essence and organic flow.",
  },
];

export default function Services() {
  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText pt-10">Services</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Services</h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] pt-30 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full hero-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold">
              Our Services
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-5xl w-full lg:w-[80%] mb-5">
              Discover
              <span className="text-(--prim)"> harmonious interior design</span>{" "}
              rooted in nature’s beauty.
            </h1>
            <p className="text-gray-400 GolosText">
              Rooted in nature, we transform visions into serene realities.
              Explore our crafted spaces where architecture and interior design
              flow with organic precision.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-16">
        {ServicesData.map((service, index) => (
          <div key={index} className="w-full">
            <div
              className="service-wrap aspect-4/3 flex flex-col justify-between p-8 rounded-2xl overflow-hidden bg-cover bg-center hover:-translate-y-2 transition-all duration-300 shadow-lg relative"
              style={{ backgroundImage: `url(${service.image.src})` }}
            >
              {/* overlay tipis agar teks tetap jelas */}
              <div className="absolute inset-0 "></div>

              <h2 className="relative z-10 text-white GolosText text-4xl">
                0{service.id}
              </h2>
              <div className="relative z-10 flex flex-col">
                <h2 className="text-white Golostext text-2xl mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-200 text-sm">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Newsletter/>
    </>
  );
}
