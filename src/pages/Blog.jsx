import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Blog() {
  const blogs = [
    {
      title: "Top 10 Essentials for Hiking",
      desc: "From boots to backpacks, discover the must-have gear for every hiking trip.",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      date: "July 12, 2025",
    },
    {
      title: "How to Choose the Right Tent",
      desc: "Camping under the stars? Learn how to pick the perfect tent for any adventure.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      date: "August 5, 2025",
    },
    {
      title: "Eco-Friendly Travel Gear",
      desc: "Explore our favorite sustainable gear that helps you travel responsibly.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
      date: "September 2, 2025",
    },
    {
      title: "Mountain Biking Tips for Beginners",
      desc: "Learn the essentials to start mountain biking safely and enjoyably.",
      img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1600&q=80",
      date: "September 10, 2025",
    },
    {
      title: "Survival Skills Every Adventurer Should Know",
      desc: "Master basic survival skills to stay safe during your wild expeditions.",
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80",
      date: "September 15, 2025",
    },
    {
      title: "Campfire Cooking Tips",
      desc: "Delicious meals you can make while camping, with minimal equipment.",
      img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1600&q=80",
      date: "September 18, 2025",
    },
    {
      title: "Adventure Photography 101",
      desc: "Capture your outdoor adventures like a pro with these photography tips.",
      img: "https://images.unsplash.com/photo-1504198266283-9b4c33f07218?auto=format&fit=crop&w=1600&q=80",
      date: "September 20, 2025",
    },
    {
      title: "Kayaking Adventures for Beginners",
      desc: "Everything you need to start kayaking safely and enjoy the water.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      date: "September 22, 2025",
    },
    {
      title: "Essential Climbing Gear",
      desc: "A guide to must-have climbing equipment for safety and fun.",
      img: "https://images.unsplash.com/photo-1504198266283-9b4c33f07218?auto=format&fit=crop&w=1600&q=80",
      date: "September 24, 2025",
    },
    {
      title: "Backpacking Across the Globe",
      desc: "Tips and tricks for long-term backpacking trips and staying prepared.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      date: "September 26, 2025",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md p-6 sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-red-900 text-center">
          Adventure<span className="text-red-500">Blog</span>
        </h1>
        <div className="mt-3 text-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-red-900">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-red-900">About</Link>
          <Link to="/blog" className="text-gray-600 hover:text-red-900">Blog</Link>
          <Link to="/contact" className="text-gray-600 hover:text-red-900">Contact</Link>
        </div>
      </header>

      {/* Hero */}
      <div
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Explore, Learn & Adventure
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Inspiring stories, expert guides, and top tips for your next outdoor adventure.
          </p>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          All Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition flex flex-col"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{blog.title}</h3>
                <p className="text-gray-600 flex-grow">{blog.desc}</p>
                <Link
                  to="#"
                  className="mt-4 inline-block text-emerald-600 font-semibold hover:text-emerald-800 transition"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1600&q=80"
            alt="Inspiration"
            className="rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Adventure Inspiration</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Explore breathtaking destinations, exciting challenges, and incredible stories from adventurers around the globe.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Learn from their experiences, plan your next journey, and discover how the right gear can transform your adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-transparent py-20 text-center text-red-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-6"
        >
          Stay Inspired, Stay Prepared
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Subscribe to our newsletter for weekly adventure guides, gear tips, and amazing outdoor stories.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full text-gray-800 w-full outline-none border border-red-800"
          />
          <button className="px-8 py-3 text-white bg-red-800 hover:bg-red-900 rounded-full font-semibold">
            Subscribe
          </button>
        </form>
      </section>
      <Footer />
    </div>
    
  );
}
