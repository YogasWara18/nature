import Link from "next/link";

export default function Banner() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 banner h-[50vh] md:h-[90vh] flex flex-col items-center justify-center">
        <div className="title flex flex-col items-center justify-center">
          <span className="rounded-full text-white hero-span border border-gray-400 px-6 mt-2 GolosText uppercase font-bold">Inspired by Nature</span>
          <h1 className="CalSans text-4xl md:text-5xl w-full lg:w-100% my-5 text-white">Let’s Grow Your <span className="text-(--prim)"> Dream Project</span> Naturally</h1>
          <Link href="/UI-Components/Pages/Contact">
            <button className="border border-gray-300 GolosText text-white rounded-full mt-3 px-4 py-2 hover:bg-(--prim) hover:text-white cursor hover:border-transparent transition-all duration-300">
                    Start With Nature
                  </button>
          </Link>
        </div>
      </div>
    </>
  );
}
