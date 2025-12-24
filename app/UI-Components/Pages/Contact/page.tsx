import Image from "next/image";
import Link from "next/link";

import contactImg from "@/public/About-1.jpg";

export default function Contact() {
  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText mt-15">Contact Us</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Contact</h2>
        </div>
      </div>

      <div>
        <div className="px-[8%] lg:px-[12%] py-20">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/3 title pt-9">
              <span className="rounded-full hero-span border border-gray-400 px-6 GolosText uppercase font-bold">
                Reach out
              </span>
            </div>
            <div className="w-full lg:w-2/3">
              <h1 className="CalSans text-4xl md:text-6xl">
                Reach out
                <span className="text-(--prim)"> let nature inspire</span> your
                next project
              </h1>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <h2 className="text-gray-400 CalSans tracking-wider">
                  Address:
                </h2>
                <p className="GolosText text-xl mt-5">
                  1120 Evergreen Terrace, Portland, OR 97205, USA
                </p>
              </div>
              <div>
                <h2 className="text-gray-400 CalSans mb-5 tracking-wider">
                  Support:
                </h2>
                <span className="text-(--prim) font-bold">
                  +44 (123) 456 789
                </span>
                <p className="GolosText text-2xl font-bold">
                  hello@naturedesign.com
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-15">
              <div className="w-full lg:w-1/2">
                <Image
                  src={contactImg}
                  alt="contactImg"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col GolosText">
                    <label className="font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name*"
                      className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col GolosText">
                    <label className="font-semibold mb-2">Phone</label>
                    <input
                      type="text"
                      placeholder="Phone Number*"
                      className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col GolosText">
                    <label className="font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col GolosText">
                    <label className="font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="I want to*"
                      className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col GolosText mt-5">
                  <label className="font-semibold mb-2">Your Message</label>
                  <textarea
                    placeholder="I want to*"
                    rows={2}
                    className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                  ></textarea>
                </div>
                <div className="mt-5">
                  <button className="border border-gray-300 GolosText rounded-full px-4 py-2 hover:bg-(--prim) hover:text-white cursor hover:border-transparent transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map h-[600px]">
        <iframe
          className="w-full rounded-2xl brightness-100 grayscale"
          src="https://www.google.com/maps?q=45.519926,-122.7446722&hl=en&z=14&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
