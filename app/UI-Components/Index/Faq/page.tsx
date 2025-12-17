"use client";

import Image from "next/image";
import faqBanner from "@/public/Faq-banner.jpg";
import { useState } from "react";
import { div } from "framer-motion/client";

const faqData = [
  {
    id: "01",
    question: "What is nature inspired design in interiors?",
    answer:
      "Nature-inspired design is an approach to interior design that draws from natural elements such as wood, stone, plants, natural light, and earthy colors. The goal is to create spaces that feel calming, harmonious, and connected to nature.",
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
                        <h3 className="text-3xl font-semibold text-(--prim)">{item.id}</h3>
                        <span className="text-2xl md:text-3xl GolosText font-semibold text-gray-800">
                            {item.question}
                        </span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
