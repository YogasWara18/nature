export default function Testimonial() {
  return (
    <>
      <div className="testimonial flex flex-col-reverse lg:flex-row gap-5 bg-[#EEE]">
        <div className="w-full lg:w-1/2 testimonial-image"></div>
        <div className="w-full lg:w-1/2 pe-[8%] lg:pe-[12%] ps-[8%] lg:ps-5 py-20 pb-0 md:pb-20">
          <div>
            <div className="flex flex-col gap-10">
              <div className="w-full">
                <span className="rounded-full hero-span border border-gray-400 px-6 GolosText uppercase font-bold">
                  Stories of Harmony
                </span>
              </div>
              <div className="w-full lg:w-1.2 ">
                <h1 className="CalSans text-4xl md:text-6xl">
                  Inspired By <span className="text-(--prim)"> Nature</span>{" "}
                  Crafted For You
                </h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row itmes-start md:items-center gap-5 mt-5">
              <h1 className="text-7xl CalSans">4.9</h1>
              <div className="flex flex-col items-center">
                <div className="stars-icon flex items-center gap-1 bg-(--prim) text-white px-3 py-1 rounded-full">
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                  <i className="bi bi-star-fill text-xs"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
