"use client"

import Image  from 'next/image';
import BlogData from '@/app/JsonData/BlogData.json'
import Link from 'next/link';
import { useState } from 'react';

export default function Blog() {

    const [showAll, setShowAll] = useState(false);

    const visibleBlogs = showAll ? BlogData : BlogData.slice(0, 9);

  return (
    <>
          <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText pt-10">Blog</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Blog</h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-30">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
                        {visibleBlogs.map((blog, index) => (
                            <div key={index} className="group cursor-pointer">
                                <Link href={`/UI-Components/Blogs/${blog.id}`}>
                                    <div className="blog-image relative rounded-2xl overflow-hidden">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            width={500}
                                            height={500}
                                            className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300"
                                        />
                                        <span className="absolute top-5 left-5 bg-(--prim) hover:bg-(--text) px-4 py-1 font-semibold rounded-full text-white GolosText">
                                            {blog.tag}
                                        </span>
                                    </div>
                                    <div className="blog-info mt-3">
                                        <p className="GolosText text-gray-400">by <span className="text-(--prim) font-semibold">{blog.postby}</span> - <span>{blog.date}</span></p>
                                        <h2 className="text-4xl md:text-3xl CalSans my-6 hover:text-(--prim) transition-all duration-300">{blog.title}</h2>
                                        <p className="text-gray-500 GolosText">{blog.desc}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                     <div className="w-full lg:w-1/2">
                        {BlogData.slice(1, 4).map((blog, index) => (
                            <div key={index} className="group cursor-pointer">
                                <Link href={`/UI-Components/Blogs/${blog.id}`}>
                                <div className="flex flex-col md:flex-row group cursor-pointer mb-5 gap-4">
                                     <div className="w-full lg:w-1/2 blog-image relative rounded-2xl overflow-hidden">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            width={200}
                                            height={200}
                                            className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300"
                                        />
                                        <span className="absolute top-3 left-2 bg-(--prim) px-4 py-1 font-semibold rounded-full text-white GolosText">
                                            {blog.tag}
                                        </span>
                                    </div>
                                    <div className="w-full lg:w-1/2 blog-info mt-3">
                                        <p className="GolosText text-gray-400">by <span className="text-(--prim) font-semibold">{blog.postby}</span></p>
                                        <h2 className="text-1xl md:text-1xl CalSans my-1 hover:text-(--prim) transition-all duration-300">{blog.title}</h2>
                                        <p className="text-gray-500 GolosText">{blog.desc}</p>
                                    </div>
                                </div>
                                   
                                   
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
    </>
  )
}
