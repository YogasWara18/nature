"use client"

import Link from 'next/link'
import ProjectsData from "@/app/JsonData/Projects.json";
import { useParams } from 'next/navigation';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import CountUp from 'react-countup';

const DetailsInfo = [
    {
        id: 1,
        title: "Open Living Spaces",
        pere: "Designing fluid, open plan interiors that seamlessly merge with surrounding landscapes, encouraging natural airflow and a strong indoor outdoor connection."
    },
    {
        id: 2,
        title: "Outdoor Living",
        pere: "Creating expansive outdoor sanctuaries with wooden decks, water features, and native gardens that invite relaxation, meditation, and social gatherings in nature."
    },
    {
        id: 3,
        title: "Natural Materials",
        pere: "Utilizing reclaimed timber, river stone, bamboo, and organic textiles to foster warmth, sustainability, and a tactile bond with the earth."
    },
    {
        id: 4,
        title: "Eco Amenities",
        pere: "Integrating energy efficient appliances, solar panels, rainwater harvesting systems, and wellness focused bathroom fixtures to balance modern comfort with ecological responsibility."
    },
    {
        id: 5,
        title: "Panoramic Windows",
        pere: "Installing floor to ceiling glass walls that frame forest, mountain, or ocean views, maximizing daylight and immersing residents in the rhythms of the natural world."
    },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Gallery1 from "@/public/Project-gallery-1.jpg";
import Gallery2 from "@/public/Project-gallery-2.jpg";
import Gallery3 from "@/public/Project-gallery-3.jpg";
import Gallery4 from "@/public/Project-gallery-4.jpg";
import Gallery5 from "@/public/Project-gallery-5.jpg";
import Gallery6 from "@/public/Project-gallery-6.jpg";

const Gallerys = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6];

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
        <div className="mt-10 border-b border-gray-300 pb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Architect:</h2>
            <h3 className="GolosText text-xl">Lumi Arktikos</h3>
          </div>
           <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Project Type:</h2>
            <h3 className="GolosText text-xl flex flex-wrap">
              {project.tags.map((tag, idx) => (
                <div key={idx} className='flex'>
                  {tag}
                </div>
              ))}
            </h3>
          </div>
            <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Client:</h2>
            <h3 className="GolosText text-xl">Nordic Escape</h3>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Terms:</h2>
            <h3 className="GolosText text-xl">4 Month</h3>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Strategy:</h2>
            <h3 className="GolosText text-xl">Minimalistic</h3>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Date:</h2>
            <h3 className="GolosText text-xl">{project.date}</h3>
          </div>
        </div>
        <div className="project-det-img mt-10 w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            priority
            className='w-full h-full object-cover'
          />
        </div>
        {/* Project info */}
        <div className="mt-10">
            <h2 className="CalSans text-5xl md:text-7xl">Design in Details</h2>
            <p className="text-gray-500 GolosText mt-5">The wooden cabin design highlights a seamless blend of organic architecture and magical atmosphere, with its curved roof harmonizing with the snowy landscape, warm timber walls radiating golden light from within, and expansive windows framing direct views of the aurora borealis in vivid green and turquoise; the surrounding snow covered trees and a pathway illuminated by blue lights provide natural framing and futuristic contrast, while the overall composition conveys serenity, intimacy, and exclusivity an ideal branding concept for Nordic Escape, where the warmth of the cabin meets the wonder of nature as a symbol of retreat, healing, and living in harmony with the environment.</p>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5">
                {DetailsInfo.map((info, index) => (
                    <div key={index} className="flex gap-2">
                        <i className="bi bi-check-circle-fill text-(--prim)"></i>
                        <p className="GolosText text-gray-500"><span className='font-bold text-black'>{info.title}: </span>{info.pere}</p>
                    </div>
                ))}
              </div>
        </div>
        <div className="mt-10 border border-gray-200 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
                <h2 className="text-5xl tracking-wider GolosText font-bold">
                    (
                        <CountUp
                        start={0}
                        end={30}
                        duration={8}
                        enableScrollSpy
                        />
                   M²)
                </h2>
                <h2 className="GolosText text-xl mt-2">Bedroom</h2>
            </div>
             <div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
                <h2 className="text-5xl tracking-wider GolosText font-bold">
                    (
                        <CountUp
                        start={0}
                        end={22}
                        duration={8}
                        enableScrollSpy
                        />
                   M²)
                </h2>
                <h2 className="GolosText text-xl mt-2">Bathroom</h2>
            </div>
             <div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
                <h2 className="text-5xl tracking-wider GolosText font-bold">
                    (
                        <CountUp
                        start={0}
                        end={29}
                        duration={8}
                        enableScrollSpy
                        />
                   M²)
                </h2>
                <h2 className="GolosText text-xl mt-2">Workspace</h2>
            </div>
             <div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
                <h2 className="text-5xl tracking-wider GolosText font-bold">
                    (
                        <CountUp
                        start={0}
                        end={12}
                        duration={8}
                        enableScrollSpy
                        />
                   M²)
                </h2>
                <h2 className="GolosText text-xl mt-2">Kitchen Area</h2>
            </div>
        </div>
        <div className="mt-10">
            <h2 className="CalSans text-5xl md:text-7xl">Incredible Result</h2>
            <p className="text-gray-500 GolosText mt-5">By cultivating multi sensory experiences, we can create interiors that harmonize with the rhythms of the natural world. These spaces immerse us in organic textures, daylight, greenery, and flowing air, proven to inspire, restore balance, and enhance well being. Beyond these benefits, nature centered design reduces stress, nurtures creativity, and accelerates healing. In increasingly urbanized environments, nature design offers a more humanistic and sustainable approach, reconnecting people with earth’s elements. The result is interiors that celebrate how we live, work, and grow alongside nature. Rooted in biophilia literally “the love of living things” this philosophy embraces our innate bond with the environment, transforming design into a pathway of renewal and connection.</p>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="project-gallery">
        <Swiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay]}
        speed={1800}
        breakpoints={{
            1200: {slidesPerView: 2},
            575: {slidesPerView: 1},
            0: {slidesPerView: 1},
        }}
        >
          {Gallerys.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt={`Galleryss-Img-${idx}`}
                className='w-full h-[600px] object-contain'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Related Projects */}
      <div className="px-[8%] lg:px-[12%] py-20 about">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full hero-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold">Related Projects</span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl w-full lg:w-[60%]">Explore <span className="text-(--prim)">Our Project</span> Showcase</h1>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          modules={[Autoplay]}
          speed={1800}
          breakpoints={{
            1200: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className='mt-30'
        >
          {
            ProjectsData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="project-card group">
                  <Link href={`/UI-Components/Projects/${project.id}`}>
                    <div className="project-image relative w-full h-[500px] overflow-hidden rounded-2xl cursor-pointer">
                      
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>
  )
}
