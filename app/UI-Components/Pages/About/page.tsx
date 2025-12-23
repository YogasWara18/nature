import Link from "next/link"

export default function About() {
  return (
    <>
          <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText pt-10">About Us</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">About Us</h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-20">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/3 title pt-8">
                <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">ABOUT NATURE</span>
            </div>
            <div className="w-full lg:w-2/3">
                <h1 className="CalSans text-4xl md:text-6xl">A design that <span className="text-(--prim)">is not only beautiful</span> but also nourishes the soul.</h1>
            </div>
        </div>
      </div>
    </>
  )
}
