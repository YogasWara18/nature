"use client";

import Link from "next/link";
import Image from "next/image";
import About2 from "@/public/About-page-1.jpg";
import About4 from "@/public/About-page-2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import timeline1 from "@/public/Timeline-about-1.jpg";
import timeline2 from "@/public/Timeline-about-2.jpg";
import timeline3 from "@/public/Timeline-about-3.jpg";
import timeline4 from "@/public/Timeline-about-4.jpg";

const historyData = [
  {
    image: timeline1,
    year: "2023",
    text: "Immersive forest exhibition blending nature, light, and inspiring design.",
  },
  {
    image: timeline2,
    year: "2024",
    text: "Conference stage alive with greenery, sustainability, and inspiring dialogue.",
  },
  {
    image: timeline3,
    year: "2025",
    text: "Eco friendly booth showcasing wood, vertical gardens, and creative branding.",
  },
  {
    image: timeline4,
    year: "2021",
    text: "Biophilic showcase merging plants, modern design, and sustainable innovation.",
  },
  {
    image: About2,
    year: "2000",
    text: "The company is founfed by a visionary designer with a focus on personalized.",
  },
];

import Award1 from "@/public/Awards-1.jpg";
import Award2 from "@/public/Awards-2.jpg";
import Award3 from "@/public/Awards-3.jpg";
import Award4 from "@/public/Awards-4.jpg";
import Award5 from "@/public/Awards-5.jpg";
import { useState } from "react";
import { div } from "framer-motion/client";
import Testimonial from "../../Index/Testimonial/page";
import Newsletter from "../../Index/Newsletter/page";
import Expertise from "../../Index/Expertise/page";

import partner1 from "@/public/partner1.png";
import partner2 from "@/public/partner2.png";
import partner3 from "@/public/partner3.png";
import partner4 from "@/public/partner4.png";
import partner5 from "@/public/partner5.png";
import partner6 from "@/public/partner6.png";

const Partners = [partner1, partner2, partner3, partner4, partner5, partner6];

const awardsData = [
  {
    year: "2000",
    title: "Eco Inspired Interior Design",
    category: "Nature’s Harmony",
    image: Award1,
  },
  {
    year: "2021",
    title: "Sustainable Architectural Branding",
    category: "Building",
    image: Award2,
  },
  {
    year: "2022",
    title: "Biophilic Digital Experience",
    category: "Designing Interfaces",
    image: Award3,
  },
  {
    year: "2023",
    title: "Nature Driven Product Innovation",
    category: "Crafting",
    image: Award4,
  },
  {
    year: "2025",
    title: "Green Visual Storytelling",
    category: "Narratives",
    image: Award5,
  },
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

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
                  <h2 className="text-[10rem] leading-40 GolosText font-bold text-(--prim)">
                    30
                  </h2>
                  <p className="text-1xl lg:px-15 CalSans">
                    Years of Experience
                  </p>
                </div>
                <div className="about-img">
                  <Image
                    src={About4}
                    alt="About-image"
                    className="object-cover rounded-2xl h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="about-image md:h-[600px]">
              <Image
                src={About2}
                alt="About-image"
                className="object-cover rounded-2xl h-full w-full"
              />
            </div>
            <div className="about-pere pt-8">
              <p className="GolosText text-sm text-gray-500">
                We believe nature shapes spaces, inspiring harmony, creativity,
                emotion, and timeless human connection.
              </p>
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
            <span className="rounded-full hero-span border border-gray-400 px-6 GolosText uppercase font-bold">
              Our History
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl mb-5">
              Our Story Grows Like Forests
              <span className="text-(--prim)"> Shaped by Beautiful</span> Stages
              and Enduring Events.
            </h1>
          </div>
        </div>
      </div>

      <div className="history-swiper py-15 pb-0">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={200}
          modules={[Autoplay]}
          breakpoints={{
            1199: { slidesPerView: 4 },
            991: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {historyData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="history-card">
                <Image
                  src={item.image}
                  alt={`history-${item.year}`}
                  className="rounded-2xl w-40 h-40 object-cover"
                />
                <div className="history-content py-15">
                  <h2 className="text-3xl CalSans font-bold mb-5">
                    {item.year}
                  </h2>
                  <p className="GolosText text-sm text-gray-500">{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="px-[8%] lg:px-[12%] py-20 pb-0">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full hero-span border border-gray-400 px-7 GolosText uppercase font-bold">
              Award & Achievement
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl mb-5">
              Design <span className="text-(--prim)"> That Speaks Our</span>{" "}
              Industry Awards
            </h1>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-10 py-15 relative"
          onMouseMove={(e) => {
            if (hoveredIndex === null) setHoveredIndex(0);
          }}
          onMouseLeave={() => setHoveredIndex(0)}
        >
          <div className="w-full lg:w-1/3 relative overflow-hidden rounded-2xl">
            <div className="relative h-[420px] w-full">
              {awardsData.map((item, index) => (
                <Image
                  key={index}
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 ease-in-out ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            {awardsData.map((item, index) => (
              <div
                key={index}
                onMouseMove={() => setHoveredIndex(index)}
                className="border-b border-gray-300 py-6 flex justify-between items-center cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <span className="GolosText text-gray-500 text-2xl">
                    {item.year}
                  </span>
                  <h2 className="text-3xl CalSans transition-all duration-300 hover:text-(--prim)">
                    {item.title}
                  </h2>
                </div>
                <p className="GolosText text-gray-500 hidden md:block">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#eee]">
        <Expertise />
      </div>
      <div className="pt-0 md:pt-[18%] bg-[#eee]">
        <Testimonial />
      </div>

      <div className="px-[8%] lg:px-[12%] py-5 pb-5">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1200: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 2 },
          }}
          className="partner-swiper"
        >
          {Partners.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={img}
                alt="PartnerImage"
                className="partner-img partner-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Newsletter />
    </>
  );
}
