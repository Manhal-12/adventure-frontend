import React from "react";
import { FaMountain, FaUmbrellaBeach, FaHiking } from "react-icons/fa";

function HeroBookStore() {
  return (
    <div>
      {/* Hero Section */}
      <div className="px-4 md:px-10 py-6">
        <div
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFMYCjo6OIiwGPH0_AiIpQX_o1WR7g3_BcQ&s)",
          }}
          className="flex flex-col md:flex-row items-center justify-between relative h-[70vh] bg-cover bg-center rounded-2xl"
        >
          {/* Text Section */}
          <div className="text-center md:text-left space-y-6 max-w-xl mt-20 md:mt-28 mb-10 md:mb-32 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-red-900 leading-snug">
              <span className="text-black text-2xl md:text-3xl">
                Travel To The
              </span>{" "}
              <span className="text-4xl md:text-6xl">World</span>
              <br />
              <span className="text-black text-2xl md:text-4xl">to See</span>{" "}
              <span className="text-2xl md:text-3xl">mystery Cities</span>
            </h1>
            <p className="text-gray-100 text-sm md:text-base">
              Adventures are exciting experiences that take us <br />
              out of our everyday routine and into the unknown.
            </p>
            <div className="flex justify-center md:justify-start pt-2">
              <button className="bg-red-800 text-white font-semibold px-4 py-2 text-sm rounded shadow hover:bg-red-900 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Section (optional image/video) */}
          <div className="relative mt-6 md:mt-0"></div>
        </div>
      </div>

      {/* Functions Section */}
      <div className="min-h-screen items-center px-4 md:px-10 py-16">
        <h1 className="text-center my-5 text-3xl md:text-5xl font-bold font-sans">
          Our Functions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-10">
          {/* Card 1 */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
              alt="Mountains"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <FaMountain className="text-4xl text-indigo-600 mx-auto mb-4" />
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Mountain Adventures
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Conquer the highest peaks and breathe the fresh mountain air.
                Experience the thrill of climbing and the peace of nature.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Beach"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <FaUmbrellaBeach className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Beach Escapes
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Relax by the ocean, feel the sand under your feet, and enjoy
                breathtaking sunsets by the shore.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
              alt="Hiking"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <FaHiking className="text-4xl text-green-600 mx-auto mb-4" />
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Hiking Trails
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Explore scenic trails, discover hidden waterfalls, and reconnect
                with the beauty of the wilderness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBookStore;
