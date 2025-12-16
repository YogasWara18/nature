export default function Testimonial() {
  return (
    <>
      <div className="testimonial flex flex-col-reverse lg:flex-row gap-5 bg-[#EEE]">
            <div className="w-full lg:w-1/2 testimonial-image"></div>
            <div className="w-full lg:w-1/2 pe-[8%] lg:pe-[12%] ps-[8%] lg:ps-5 py-20 pb-0 md:pb-20">
                <div>
                    <div className="flex flex-col gap-10">
            <div className="w-full">
              <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
                Stories of Harmony
              </span>
            </div>
            <div className="w-full lg:w-2/3 ">
              <h1 className="CalSans text-4xl md:text-6xl">
                Inspired By{" "}
                <span className="text-(--prim)">
                  {" "}
                  Nature
                </span>{" "}
                Crafted For You
              </h1>
            </div>
          </div>
                </div>
            </div>
      </div>
    </>
  );
}
