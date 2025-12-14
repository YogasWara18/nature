"use client";

import { useState } from "react";
import Image from "next/image";
import HeroImg from "@/public/Hero-img.jpg";
import HeroImg2 from "@/public/hero-img2.png";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import partner1 from "@/public/partner1.jpg"
import partner2 from "@/public/partner2.jpg"
import partner3 from "@/public/partner3.jpg"
import partner4 from "@/public/partner4.jpg"
import partner5 from "@/public/partner5.jpg"
import partner6 from "@/public/partner6.jpg"

const Partners = [partner1, partner2, partner3, partner4, partner5, partner6];

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
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
                  Natural Timeless Desirable
                </span>
                <h1 className="text-6xl lg:text-7xl CalSans my-5">
                  Living in Harmony{" "}
                  <span className="text-(--prim)">With NATURE</span>
                </h1>
                <p className="text-gray-700 w-full md:w-[60%]">
                  Transform your home with calming, nature-inspired aesthetics
                  delivered with expertise and trusted craftsmanship.
                </p>
                <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText font-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer group">
                  <Link href="/UI-Components/Pages/Services">
                    Let's Create Harmony Together{" "}
                    <i className="bi bi-arrow-right ps-1"></i>
                  </Link>
                </button>
                <div className="hero-content-img absolute top-13 -right-6 cursor-pointer hidden md:block">
                  <Image
                    src={HeroImg2}
                    alt="HeroImg2"
                    className="rounded-full h-15"
                  />
                  <i
                    className="bi bi-play-fill"
                    onClick={() => setShowVideo(true)}
                  ></i>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/7 z-10">
              <div className="hero-image">
                <Image
                  src={HeroImg}
                  alt="HeroImg"
                  className=" w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Pop-up */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center top-25 z-50 ">
          <div className="relative w-[90%] md:w-[60%] lg:w-[50%]">
            {/* Tombol Close di pojok kanan atas */}
            <button
              className="absolute -top-4 -right-4 bg-white text-black rounded-full shadow-lg w-8 h-8 flex items-center justify-center z-50"
              onClick={() => setShowVideo(false)}
            >
              &times;
            </button>

            {/* Video */}
            <video className="w-full h-auto rounded-lg z-40" controls autoPlay>
              <source src="/video-hero.mp4" type="video/mp4" />
              Browser Anda tidak mendukung video tag.
            </video>
          </div>
        </div>
      )}
       <div className="px-[8%] lg:px-[12%] pb-10">
        <Swiper
         slidesPerView={5}
         spaceBetween={30}
         loop={true}
         autoplay={{
          delay: 1500
         }}
        modules={[Autoplay]}
        breakpoints={{
          1200: {slidesPerView: 5}, 
          991: {slidesPerView: 4}, 
          575: {slidesPerView: 2}, 
          0: {slidesPerView: 2}, 
        }}
        className="partner-swiper"
        >
          {Partners.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
              src={img}
              alt="PartnerImage"
              className="partner-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  );
}
