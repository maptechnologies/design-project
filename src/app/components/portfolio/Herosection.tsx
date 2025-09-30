import React from 'react'

const Herosection = () => {
  return (
   <section
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/iamge/istockphoto-1591225732-612x612.webp')", // ✅ Make sure spelling `image` is correct in public folder
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 text-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg px-6 py-6 max-w-3xl w-full">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
             MOST AFFORDABLE
PACKAGES FOR ALL
OUR CUSTOMERS
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-3 text-white text-base sm:text-lg md:text-xl">
            {/* We create bold, modern & immersive digital experiences that{" "} */}
            {/* <span className="text-pink-400 font-semibold">connect</span> with */}
            {/* your audience. */}
          </p>

          {/* Buttons */}
         {/* <div className="mt-5 flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base font-semibold shadow-md hover:scale-105 transition">
              🚀 Get Started
            </button>
            <button className="px-6 py-2 rounded-full bg-white/90 text-black text-base font-semibold shadow-md hover:bg-white transition hover:scale-105">
              🎨 View Portfolio
            </button>
          </div>*/}
        </div>
      </section>
  )
}

export default Herosection
