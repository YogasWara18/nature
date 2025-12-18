

export default function Newsletter() {
  return (
    <>
        <div className="px-[8%] lg:px-[12%] py-30 newsletter relative">
            <div className="flex flex-col items-center justify-center">
                 <span className="rounded-full hero-span border text-white border-gray-400 px-7 ps-10 py-2 GolosText uppercase font-bold">Subscribe for Organic Design Stories</span>  
                 <h1 className="CalSans text-center text-white text-3xl md:text-6xl my-5 w-full lg:w-[60%]"> Breathe <span className="text-(--prim)"> Nature </span> Receive Design Insights</h1>
                 <p className="text-center GolosText text-white w-full text-lg lg:w-[60%] mb-5">Join our Nature Journal. Discover organic ideas, access serene inspirations, and stay connected with harmonious design updates.</p>  

                 <div className="email-details border-b border-gray-300 w-[450px] flex items-center transition-all duration-300 hover:border-(--prim) cursor-pointer">
                    <input type="email" placeholder="Email address..." className="focus:outline-none w-full py-3"/>
                    <i className="bi bi-arrow-up-right px-2 py-1 bg-(--prim) text-white rounded-full transition-all duration-300 hover:rotate-45"></i>
                 </div>
            </div>    
        </div> 
    </>
  )
}
