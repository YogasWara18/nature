"use client";

import Image from "next/image";
import Link from "next/link";
import TeamsData from "@/app/JsonData/Teams.json";
import quote from "@/public/navbar-logo.png";
import team1 from "@/public/Team-page-1-v2.jpg";
import team2 from "@/public/Team-page-2-v2.jpg";
import team3 from "@/public/Team-page-3-v2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
    {
        id: 1,
        image: team1,
        name: "Olivia Davis",
        role: "Co-Founder & CEO",
        message: "“As a Landscape Architect, Adrian Müller was deeply impressed by how the team brought nature indoors. The design blends organic textures with calming greenery, creating a refreshing sanctuary. Adrian describes the result as serene, timeless, and beautifully connected to the earth.”"
    },
    {
        id: 2,
        image: team2,
        name: "Daniel Carter",
        role: "Chief Operating Officer",
        message: "“As an Environmental Consultant, Hana Sugimoto admired the team’s ability to merge sustainability with beauty. Her new workspace feels alive with natural light, wooden accents, and gentle tones. Hana calls the design harmonious, eco-friendly, and inspiring for both work and relaxation.”"
    },
    {
         id: 3,
        image: team3,
        name: "Shopia Lee",
        role: "Chief Technology Officer",
        message: "“As a Botanical Artist, Lucas Fernández was captivated by the way the team infused nature’s essence into his studio. The design highlights soft earthy palettes, flowing forms, and lush plants. Lucas describes the atmosphere as organic, artistic, and deeply nurturing to creativity.”"
    }
]

export default function Teams() {
  return (
    <>
       <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText mt-15">Our Team</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Team</h2>
        </div>
      </div>

    {/* Teams Section */}
    <div className="px-[8%] lg:px-[12%] py-20 pb-0 about">
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/3 title pt-8">
                <span className="rounded-full hero-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold">Our Best Team</span>
            </div>
            <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl w-full lg:w-[80%]">Meet The <span className="text-(--prim)">Experts Our Interior</span> Designers</h1>
            </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 team-wrapper">
            {TeamsData.map((team, index) => (
                <div key={index} className="team-card cursor-pointer rounded-2xl overflow-hidden">
                    <Image
                        src={team.image}
                        alt={team.name}
                        width={400}
                        height={400}
                        className="w-full h-full rounded-2xl"
                    />
                    <div className="team-content text-white">
                        <h2 className="CalSans text-4xl">{team.name}</h2>
                        <h2 className="GolosText">{team.role}</h2>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                <i className="ri-facebook-fill"></i>
                            </div>
                             <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                <i className="ri-twitter-x-fill"></i>
                            </div>
                             <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                <i className="ri-instagram-line"></i>
                            </div>
                             <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                <i className="ri-linkedin-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    </div>

    {/* Teams Testimonials */}
    <div className="mt-30 px-[8%] lg:px-[12%] teams-bg py-20 flex flex-col justify-center items-center">
        <Image src={quote} alt="quote" width={170} height={150}/>
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{delay: 1800}}
        modules={[Autoplay]}
        className="w-full justify-center items-center lg:w-[70%]"
        >
            {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="flex justify-center items-center flex-col">
                        <p className="GolosText text-2xl font-semibold text-center">
                            {item.message}
                        </p>

                        <div className="flex items-center gap-5 mt-5">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={150}
                                height={100}
                                className="rounded-2xl"
                            />
                            <div>
                                <h2 className="GolosText font-bold text-2xl">{item.name}</h2>
                                <p className="GolosText font-semibold ">{item.role}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    </>
  )
}
