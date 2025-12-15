"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const paralexData = [
    {
        id: 1,
        tag: "Sanctuary of Serenity",
        number: "01",
        title: (
            <>
                Waterfall <br /> Serenity Suite
            </>
        ),
        location: "Indonesia, Bogor",
        year: "2025",
        bg: "/Paralex-1.jpg"
    },
    {
        id: 2,
        tag: "Organic Elegance",
        number: "02",
        title: (
            <>
                Nature <br /> Fused Lounge
            </>
        ),
        location: "Mexico, Tulum",
        year: "2024",
        bg: "/Paralex-2.jpg"
    },
    {
        id: 3,
        tag: "Architectural Sanctuary",
        number: "03",
        title: (
            <>
                Cliffside <br /> Nature Residence
            </>
        ),
        location: "Colombia, Medellín",
        year: "2023",
        bg: "/Paralex-3.jpg"
    },
    {
        id: 4, 
        tag: "Natural Immersion",
        number: "04",
        title: (
            <>
                Curved <br /> Nature Interior
            </>
        ),
        location: "Japan, Kyoto",
        year: "2022",
        bg: "/Paralex-4.jpg"
    },
    {
        id: 5,
        tag: "Botanical Bliss",
        number: "05",
        title: (
            <>
                Rainforest <br /> Spa Escape
            </>
        ),
        location: "Costa Rica, Uvita",
        year: "2021",
        bg: "/Paralex-5.jpg"
    },
    {
        id: 6,
        tag: "Glass Refuge",
        number: "06",
        title: (
            <>
                Alpine <br /> View Lounge
            </>
        ),
        location: "Switzerland, Zermatt",
        year: "2020",
        bg: "/Paralex-6.jpg"
    },
    {
        id: 7,
        tag: "Natureflow Design",
        number: "07",
        title: (
            <>
                Curved <br /> Forest Dwelling
            </>
        ),
        location: "New Zealand",
        year: "2019",
        bg: "/Paralex-7.jpg"
    },
]

export default function Paralex() {
  return (
    <div className="mt-20 pb-30">
      {paralexData.map((item) => (
        <ParalexSection key={item.id} item={item}/>
      ))}
    </div>
  );
}

function ParalexSection({ item }: { item : any }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref , 
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <motion.div
            ref={ref}
            className="Paralex-wrap sticky top-0 left-0 h-full"
            style={{
                backgroundImage: `url(${item.bg})`,
                scale,
                y: translateY,
                zIndex: item.id * 1,
            }}
        >
            <div className="Paralex-content flex flex-col justify-between px-[8%] py-20">
                <div className="flex justify-between items-center gap-5">
                    <span className="text-white GolosText border border-gray-300 px-4 p-2 rounded-full uppercase">
                        {item.tag}
                    </span>
                    <h1 className="GolosText text-6xl font-bold text-(--prim)">
                        {item.number}
                    </h1>
                </div>
                <div className="text-gray-300">
                    <h1 className="CalSans text-6xl md:text-8xl">{item.title}</h1>
                    <p className="mt-3 text-2xl">
                        {item.location} <br /> {item.year}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
