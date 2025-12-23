"use client";

import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import gallleryImg1 from "@/public/Banner-slide-1.jpg";
import gallleryImg2 from "@/public/Banner-slide-1.jpg";
import gallleryImg3 from "@/public/Banner-slide-1.jpg";
import gallleryImg4 from "@/public/Banner-slide-1.jpg";
import gallleryImg5 from "@/public/Banner-slide-1.jpg";
import gallleryImg6 from "@/public/Banner-slide-1.jpg";
import gallleryImg7 from "@/public/Banner-slide-1.jpg";
import gallleryImg8 from "@/public/Banner-slide-1.jpg";
import gallleryImg9 from "@/public/Banner-slide-1.jpg";
import gallleryImg10 from "@/public/Banner-slide-1.jpg";
import gallleryImg11 from "@/public/Banner-slide-1.jpg";
import gallleryImg12 from "@/public/Banner-slide-1.jpg";
import gallleryImg13 from "@/public/Banner-slide-1.jpg";
import gallleryImg14 from "@/public/Banner-slide-1.jpg";
import gallleryImg15 from "@/public/Banner-slide-1.jpg";
import { useState } from "react";

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  const images = [
    { src: gallleryImg1.src },
    { src: gallleryImg2.src },
    { src: gallleryImg3.src },
    { src: gallleryImg4.src },
    { src: gallleryImg5.src },
    { src: gallleryImg6.src },
    { src: gallleryImg7.src },
    { src: gallleryImg8.src },
    { src: gallleryImg9.src },
    { src: gallleryImg10.src },
    { src: gallleryImg11.src },
    { src: gallleryImg12.src },
    { src: gallleryImg13.src },
    { src: gallleryImg14.src },
    { src: gallleryImg15.src },
  ];

  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText mt-15">Gallery</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Gallery</h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-20">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/2">
            <div className="gallery-image" onClick={() => setIndex(0)}>
              <Image
                src={gallleryImg1}
                alt="Gallery-image"
                className="rounded-2xl object-cover cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div className="gallery-image" onClick={() => setIndex(1)}>
                <Image
                  src={gallleryImg2}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
              <div className="gallery-image" onClick={() => setIndex(2)}>
                <Image
                  src={gallleryImg3}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
              <div className="gallery-image" onClick={() => setIndex(3)}>
                <Image
                  src={gallleryImg4}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
              <div className="gallery-image" onClick={() => setIndex(4)}>
                <Image
                  src={gallleryImg5}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-5 mt-10">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div className="gallery-image" onClick={() => setIndex(5)}>
                <Image
                  src={gallleryImg6}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
              <div className="gallery-image" onClick={() => setIndex(6)}>
                <Image
                  src={gallleryImg7}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
              <div className="gallery-image" onClick={() => setIndex(7)}>
                <Image
                  src={gallleryImg8}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
              <div className="gallery-image" onClick={() => setIndex(8)}>
                <Image
                  src={gallleryImg9}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="gallery-image" onClick={() => setIndex(9)}>
              <Image
                src={gallleryImg10}
                alt="Gallery-image"
                className="rounded-2xl object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>

         <div className="flex flex-col lg:flex-row gap-5 mt-10">
          <div className="w-full lg:w-1/2">
            <div className="gallery-image" onClick={() => setIndex(10)}>
              <Image
                src={gallleryImg11}
                alt="Gallery-image"
                className="rounded-2xl object-cover cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div className="gallery-image" onClick={() => setIndex(11)}>
                <Image
                  src={gallleryImg12}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
              <div className="gallery-image" onClick={() => setIndex(12)}>
                <Image
                  src={gallleryImg13}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
              <div className="gallery-image" onClick={() => setIndex(13)}>
                <Image
                  src={gallleryImg14}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
              <div className="gallery-image" onClick={() => setIndex(14)}>
                <Image
                  src={gallleryImg15}
                  alt="Gallery-image"
                  className="rounded-2xl object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
