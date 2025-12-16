"use client";

import Image from "next/image";
import expertise1 from "@/public/Expertise-1.jpg";
import expertise2 from "@/public/Expertise-2.jpg";
import expertise3 from "@/public/Expertise-3.jpg";
import expertise4 from "@/public/Expertise-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import expertiseSlide1 from "@/public/Banner-slide-1.jpg";
import expertiseSlide2 from "@/public/Banner-slide-2.jpg";
import expertiseSlide3 from "@/public/Banner-slide-3.jpg";
import expertiseSlide4 from "@/public/Banner-slide-4.jpg";
import expertiseSlide5 from "@/public/Banner-slide-5.jpg";


const ExpertiseData = [
  {
    id: "1",
    title: "Thoughtful Planning",
    desc: "We begin every project with careful planning, starting from a detailed analysis of the client’s needs and vision. The design concept is crafted to be both functional and aesthetic, supported by transparent cost estimates and timelines so buyers feel secure from the very beginning.",
    image: expertise1,
  },
  {
    id: "2",
    title: "Strong Foundation & Structure",
    desc: "The next stage focuses on building a solid foundation and structure, carried out with high safety standards and the use of quality materials. Every detail is closely supervised to ensure the results align with the plan, giving the building long-term durability and instilling confidence in buyers.",
    image: expertise2,
  },
  {
    id: "3",
    title: "High Quality Finishing",
    desc: "Once the structure is firmly established, we move on to the finishing stage, where interior and exterior details are executed with professional precision. Our focus is on delivering aesthetics, comfort, and visual harmony, while tailoring the design to reflect the unique identity and needs of each buyer.",
    image: expertise3,
  },
  {
    id: "4",
    title: "Handover & Client Satisfaction",
    desc: "The final stage is the handover, conducted after thorough inspections to guarantee perfection. We provide complete documentation of the development progress from start to finish as proof of transparency, along with quality assurance and after-sales service to ensure buyers are fully satisfied and trust the excellence of our work.",
    image: expertise4,
  }
];

export default function Expertise() {
  return (
    <>
      <div className="expertise bg-[#241c18] px-31">
        <div className="px-[8%] lg:px-[3%] md:py-22 pt-10 pb-10 md:pb-[35%] relative">
          <div className="flex flex-col gap-10">
            <div className="w-full">
              <span className="rounded-full text-white hero-span border border-gray-400 px-6 GolosText uppercase font-bold">
                Our Expertise
              </span>
            </div>
            <div className="w-full lg:w-2/3 ">
              <h1 className="CalSans text-4xl text-white md:text-6xl">
                Natural Authentic{" "}
                <span className="text-(--prim)">
                  {" "}
                  Harmony Sustainable Elegant Tranquil
                </span>{" "}
                Comfort Crafted Timeless
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {ExpertiseData.map((item, idx) => (
              <div key={idx} className="expertise-card"  
              style={{ marginTop: `${idx * 40}px`}}
              >
                <div className="expertise-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="expertise-info my-5">
                  <h1 className="text-3xl CalSans text-white border-b border-gray-500/50 pb-5 w-full lg:w-[80%]">{item.title}</h1>
                  <p className="text-gray-400 mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="expertise-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 1500
              }}
              modules={[Autoplay]}
              speed={2000}
            >
              <SwiperSlide>
                <Image
                  src={expertiseSlide1}
                  alt="expertiseSlide1"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={expertiseSlide2}
                  alt="expertiseSlide2"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={expertiseSlide3}
                  alt="expertiseSlide3"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={expertiseSlide4}
                  alt="expertiseSlide4"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={expertiseSlide5}
                  alt="expertiseSlide5"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
