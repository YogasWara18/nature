"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const paralexData = [
    {
        id: 1,
        tag: "Residentail",
        number: "01",
        title: (
            <>
                Industrial <br /> elegnce condo
            </>
        ),
        location: "Berlin, Germany",
        year: "2025",
        bg: "/Paralex-1.jpg"
    }
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
            <div className="Paralex-content flex flex-col justify-baseline px-[8%] py-20">
                <div className="flex justify-between items-center gap-5">

                </div>
            </div>
        </motion.div>
    )
}
