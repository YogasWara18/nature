import Image from "next/image";
import service1 from "@/public/Service-1.jpg";
import service2 from "@/public/Service-2.jpg";
import service3 from "@/public/Service-3.jpg";
import service4 from "@/public/Service-4.jpg";
import service5 from "@/public/Service-5.jpg";

export default function Services() {
  return (
    <>
      <div className="px-[15%] lg:px[12%] pt-20 pb-60 service relative">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-9">
            <span className="rounded-full hero-span border border-gray-400 px-6 GolosText uppercase font-bold">
              Our Services
            </span>
          </div>
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
        <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="flex flex-col md:flex-row w-full md:2-[70%] gap-2 md:gap-8">
            <h4 className="txt-4xl CalSans">01</h4>
            <div className="service-content">
              <h2 className="mb-3 text-4xl CalSans">Biophilic Space Planing</h2>
              <p className="GolosText text-gray-400">
                We design spatial layouts that integrate natural elements such
                as natural light, cross ventilation, living plants, and organic
                materials to create a calming and refreshing atmosphere.
              </p>
            </div>
          </div>
          <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
            <Image
              src={service1}
              alt="service-img"
              className="w-full service-img object-cover rounded-2xl border-2 border-black mt-8"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300"></i>
        </div>
        <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="flex flex-col md:flex-row w-full md:2-[70%] gap-2 md:gap-8">
            <h4 className="txt-4xl CalSans">02</h4>
            <div className="service-content">
              <h2 className="mb-3 text-4xl CalSans">
                Natural Material Curation
              </h2>
              <p className="GolosText text-gray-400">
                We select and curate natural materials such as recycled wood,
                natural stone, bamboo, and organic textiles that are not only
                aesthetically pleasing, but also environmentally friendly and
                durable.
              </p>
            </div>
          </div>
          <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
            <Image
              src={service2}
              alt="service-img"
              className="w-full service-img object-cover rounded-2xl border-2 border-black mt-8"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300"></i>
        </div>
        <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="flex flex-col md:flex-row w-full md:2-[70%] gap-2 md:gap-8">
            <h4 className="txt-4xl CalSans">03</h4>
            <div className="service-content">
              <h2 className="mb-3 text-4xl CalSans">
                Indoor Outdoor Flow Design
              </h2>
              <p className="GolosText text-gray-400">
                We created a seamless transition between indoor and outdoor
                spaces through wide openings, vertical gardens, and landscape
                elements that blend into the interior.
              </p>
            </div>
          </div>
          <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
            <Image
              src={service3}
              alt="service-img"
              className="w-full service-img object-cover rounded-2xl border-2 border-black mt-8"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300"></i>
        </div>
        <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="flex flex-col md:flex-row w-full md:2-[70%] gap-2 md:gap-8">
            <h4 className="txt-4xl CalSans">04</h4>
            <div className="service-content">
              <h2 className="mb-3 text-4xl CalSans">
                Botanical Styling & Green Decor
              </h2>
              <p className="GolosText text-gray-400">
                We strategically arrange houseplants, artistic pots, and green
                elements to beautify the space while improving air quality and
                mood.
              </p>
            </div>
          </div>
          <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
            <Image
              src={service4}
              alt="service-img"
              className="w-full service-img object-cover rounded-2xl border-2 border-black mt-8"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300"></i>
        </div>
        <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="flex flex-col md:flex-row w-full md:2-[70%] gap-2 md:gap-8">
            <h4 className="txt-4xl CalSans">05</h4>
            <div className="service-content">
              <h2 className="mb-3 text-4xl CalSans">
                Sensory Wellness Integration
              </h2>
              <p className="GolosText text-gray-400">
                We combine soft lighting, natural scents, organic textures and
                natural sounds to create spaces that stimulate multisensory calm
                and comfort.
              </p>
            </div>
          </div>
          <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
            <Image
              src={service5}
              alt="service-img"
              className="w-full service-img object-cover rounded-2xl border-2 border-black mt-8"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300"></i>
        </div>
      </div>
    </>
  );
}
