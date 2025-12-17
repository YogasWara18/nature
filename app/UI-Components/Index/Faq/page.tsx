"use client";

import Image from "next/image";
import faqBanner from "@/public/Faq-banner-1.jpg";
import { useState } from "react";


const faqData = [
  {
    id: "01",
    question: "What is nature inspired design in interiors?",
    answer: "Nature inspired design is an approach to interior design that draws from natural elements such as wood, stone, plants, natural light, and earthy colors. The goal is to create spaces that feel calming, harmonious, and connected to nature.",
  },
  {
    id: "02",
    question: "Why is nature inspired design becoming more popular today?",
    answer: "Because modern lifestyles are often fast paced and stressful, people seek balance and tranquility. Nature inspired design helps reduce stress, boosts productivity, and promotes healthier living environments."
  },
  {
    id: "03",
    question: "What elements are commonly used in nature inspired design?",
    answer: "Natural materials (wood, bamboo, stone), indoor plants, abundant natural lighting, neutral or earthy tones, and organic textures that bring warmth and authenticity."
  },
  {
    id: "04",
    question: "How can nature inspired design be applied in small homes?",
    answer: "Use small indoor plants, choose minimalist wooden furniture, maximize sunlight with large windows, and paint walls in soft tones like sage green or beige to create a spacious, natural feel."
  },
  {
    id: "05",
    question: "What are the psychological benefits of nature inspired design?",
    answer: "It provides relaxation, enhances focus, improves mood, and fosters emotional connection with nature. Studies show that natural elements in spaces can lower stress levels significantly."
  },
  {
    id: "06",
    question: "Is nature inspired design suitable for workplaces or offices?",
    answer: "Absolutely. Adding plants, natural light, and wooden textures can increase comfort, creativity, and overall productivity in work environments."
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-9">
            <span className="rounded-full hero-span border border-gray-400 px-6 GolosText uppercase font-bold">
              Popular Queries
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-5xl">
              Eco Living <span className="text-(--prim)"> Popular Design</span>{" "}
              Queries
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 py-10">
          <div className="w-full lg:w-1/1">
            <div className="space-y-4 w-full">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`overflow-hidden py-2 transition-all duration-300 border-b border-gray-300 ${
                    openIndex === index ? "" : ""
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    <div className="faq-heading flex items-center gap-5">
                      <h3 className="text-3xl font-semibold text-(--prim)">
                        {item.id}
                      </h3>
                      <span className="text-2xl md:text-3xl GolosText font-semibold text-gray-800">
                        {item.question}
                      </span>
                    </div>

                    {openIndex === index ? (
                      <i className="bi bi-dash text-(--prim) text-3xl transition-all duration-300"></i>
                    ) : (
                      <i className="bi bi-plus text-(--prim) text-3xl transition-all duration-300"></i>
                    )}
                  </button>
                  <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden 
                  ${openIndex === index
                        ? "max-h-[300px] opacity-100 py-3"
                        : "max-h-0 opacity-0 py-0"
                  }`}
                  >
                    <p className="GolosText px-7">
                        {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 pt-5">
              <div className="faq-card flex flex-col md:flex-row lg:flex-col md:items-center items-start gap-6">
                <Image
                    src={faqBanner}
                    alt="faqBanner"
                    className="rounded-2xl mb-5"
                />
                <div className="flex flex-col">
                  <h2 className="capitalize text-3xl CalSans mb-5">Your design questions, naturally answered here.</h2>
                  <p className="text-gray-400 text-lg GolosText">We’ll walk you through our design process in detail, explain project specifications with clarity, and provide transparent cost estimates so you feel confident and connected throughout the journey.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
