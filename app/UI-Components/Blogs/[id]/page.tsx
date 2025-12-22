"use client";

import Link from "next/link";
import BlogData from "@/app/JsonData/BlogData.json";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import blogDet1 from "@/public/Blog-details-1.jpg";
import blogDet2 from "@/public/Blog-details-2.jpg";
import quote from "@/public/Blog-quote.png";


export default function BlogDetails() {

    const { id } = useParams();

    const [blog, setBlog] = useState<any>(null);

    useEffect(() => {
        const foundBlog = BlogData.find((item) => item.id === id);
        setBlog(foundBlog);
    }, [id]);

    if (!blog) {
        return (
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-5xl md:text-6xl GolosText mt-15">Blog Not Found!</h1>
                <div className="flex items-center gap-5 mt-3">
                    <Link href="/UI-Components/Blogs" className="hover:text-(--prim) text-xl transition-all duration-300 mt-5 border border-gray-300 px-4 py-2 rounded hover:bg-white">Back To Blogs</Link>
                </div>
            </div>
        );
    }

  return (
    <>
           <div className="section-bg text-white flex flex-col">
        <h1 className="text-6xl md:text-8xl GolosText mt-15">
          Blog Details
        </h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <Link
            href="/UI-Components/Projects"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Blog
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText text-white">{blog.title}</h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-20">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
            {/* Blog Content */}
            <div className="w-full lg:w-1/1">
                <div>
                    <p className="text-gray-400 GolosText mb-4">
                        <span className="bg-(--prim) px-4 py-1 rounded-full text-white mr-3">
                            {blog.tag}
                        </span> by <span className="text-(--prim) font-semibold">{blog.postby}</span> -{" "} <span>{blog.date}</span>
                    </p>
                    <h2 className="text-4xl md:text-6xl CalSans mb-3">{blog.title}</h2>
                    <p className="text-gray-500 GolosText leading-relaxed">{blog.desc}</p>
                </div>
                <div className="rounded-2xl overflow-hidden mt-10">
                    <Image
                     src={blog.imageDet}
                     alt={blog.title}
                     width={1000}
                     height={600}
                     className="w-full h-auto rounded-2xl"  
                    />
                </div>
                <p className="text-gray-500 GolosText mt-5 leading-relaxed">
                    Nature inspired interior design is all about creating a harmonious, calming, and organic space that reflects our deep connection to the natural world. Whether you’re refreshing a single room or reimagining your entire home, incorporating nature inspired principles can bring a serene, grounding, and rejuvenating ambiance. With an emphasis on natural materials, earthy tones, biophilic elements, and sustainable functionality, nature-inspired design transforms modern living into a sanctuary of balance and beauty.
                </p>
                <h2 className="text-4xl md:text-4xl CalSans my-5">Understanding the Fundamentals</h2>
                <p className="text-gray-500 GolosText mt-5 leading-relaxed">
                    Nature inspired interior design embraces the “less is more” philosophy by eliminating unnecessary items and focusing on a few organic statement pieces—such as wooden furniture, rattan accents, or stone details that highlight the room’s character, while earthy tones, soft greens, and warm browns replace monochromatic palettes to create a soothing atmosphere; combined with abundant natural light, sustainable materials, and biophilic elements like indoor plants, this approach achieves a clean yet vibrant balance between form and function, transforming modern living spaces into serene sanctuaries connected to the natural world.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                    <Image
                        src={blogDet1}
                        alt="blogDet1"
                        className="w-full h-full rounded-2xl"
                    />
                    <Image
                        src={blogDet2}
                        alt="blogDet2"
                        className="w-full h-full rounded-2xl"
                    />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
