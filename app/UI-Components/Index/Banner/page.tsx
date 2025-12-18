export default function Banner() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 banner h-[50vh] md:h-[90vh] flex flex-col items-center justify-center">
        <div className="title flex flex-col lg:flex-row gap-10">
          <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
            Our Services
          </span>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-5xl">
              Crafting Interiors Connecting with
              <span className="text-(--prim)"> Nature</span>
            </h1>
            <p className="text-gray-400 GolosText">
              We specialize in creating interiors that harmonize modern design
              with the timeless beauty of nature. Every space we craft is more
              than just visually stunning it’s a sanctuary that nurtures well
              being, inspires creativity, and strengthens the human connection
              to the natural world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
