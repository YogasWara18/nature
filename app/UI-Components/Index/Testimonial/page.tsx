"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import test1 from "@/public/Test-1.jpg";
import test2 from "@/public/Test-2.jpg";
import test3 from "@/public/Test-3.jpg";
import test4 from "@/public/Test-4.jpg";
import test5 from "@/public/Test-5.jpg";

const TestimonialData = [
  {
    id: "1",
    desc: "“Choosing this nature inspired design was the best decision we finally feel at home in harmony with the environment.“",
    image: test1,
    name: "Sarah Greenfield",
    role: "Interior Designer",
  },
  {
    id: "2",
    desc: "“The result exceeded our expectations: elegant, sustainable, and truly refreshing to live in.“",
    image: test2,
    name: "Michael Thompson",
    role: "Entrepreneur",
  },
  {
    id: "3",
    desc: "“We are deeply satisfied the design brings peace, comfort, and a unique connection to nature.“",
    image: test3,
    name: "Emily Carter",
    role: "Architect",
  },
  {
    id: "4",
    desc: "“Every detail reflects professionalism and creativity; the space feels alive and perfectly balanced.“",
    image: test4,
    name: "David Johnson",
    role: "Marketing Director",
  },
  {
    id: "5",
    desc: "“This project proves that construction can be both beautiful and responsible. We couldn’t be happier.“",
    image: test5,
    name: "Nadia Williams",
    role: "Environmental Consultant",
  },
]

export default function Testimonial() {
  return (
    <>
      <div className="testimonial flex flex-col-reverse lg:flex-row gap-5 bg-[#EEE] mt-10">
        <div className="w-full lg:w-1/2 testimonial-image"></div>
        <div className="w-full lg:w-1/2 pe-[8%] lg:pe-[12%] ps-[8%] lg:ps-5 py-20 pb-0 md:pb-20">
          <div>
            <div className="flex flex-col gap-10">
              <div className="w-full">
                <span className="rounded-full hero-span border border-gray-400 px-6 GolosText uppercase font-bold">
                  Stories of Harmony
                </span>
              </div>
              <div className="w-full lg:w-1.2 ">
                <h1 className="CalSans text-4xl md:text-6xl">
                  Inspired By <span className="text-(--prim)"> Nature</span>{" "}
                  Crafted For You
                </h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row itmes-start md:items-center gap-5 mt-5">
              <h1 className="text-7xl CalSans">4.9</h1>
              <div className="flex flex-col items-center">
                <div className="stars-icon flex items-center gap-1 bg-(--prim) text-white px-3 py-1 rounded-full">
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                </div>
                <p className="GolosText">3.125 reviews</p>
              </div>
              <p className="w-full lg:w-[50%] font-semibold GolosText">
                This work is not just a building, but a sustainable living experience.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 2000
              }}
              modules={[Autoplay]}
              speed={1500}
            >
              {TestimonialData.map((test, index) => (
                <SwiperSlide key={index}>
                  <p className="GolosText text-2xl font-semibold tracking-wide">{test.desc}</p>
                  <div className="flex items-center gap-3 mt-8">
                      <Image
                        src={test.image}
                        alt={test.name}
                        className="rounded-full w-[60px] h-[60px] object-contain"
                      />
                      <div className="flex flex-col">
                        <h3 className="GolosText text-2xl font-semibold">{test.name}</h3>
                        <h3 className="font-semibold text-gray-600">{test.role}</h3>
                      </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
