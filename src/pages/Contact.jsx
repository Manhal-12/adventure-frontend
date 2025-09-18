import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      <header className="bg-white shadow-md p-6 sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-red-800 text-center">
          Adventure<span className="text-red-500">Shop</span>
        </h1>
        <div className="mt-3 text-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-red-800">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-red-800">About</Link>
          <Link to="/blog" className="text-gray-600 hover:text-red-800">Blog</Link>
          <Link to="/contact" className="text-gray-600 hover:text-red-800">Contact</Link>
        </div>
      </header>

      
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We’d love to hear from you! Reach out with questions, feedback, or
            to plan your next adventure with our gear.
          </p>
        </motion.div>
      </div>

      
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Contact Us
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-xl rounded-3xl p-10 flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="px-6 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-800 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-6 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-800 transition"
          />
          <input
            type="text"
            placeholder="Aim "
            className="px-6 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-800 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="px-6 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-800 transition"
          />
          <button className="px-8 py-3 bg-red-800 text-white font-semibold rounded-full hover:bg-red-900 transition">
            Send Message
          </button>
        </motion.form>
      </section>

     
      <section className="bg-red-80 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center gap-4"
          >
            <FaMapMarkerAlt className="text-red-800 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">Address</h3>
            <p className="text-gray-600">JH 09010 Somalia, Mogadishu City, Digfeer Street</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center gap-4"
          >
            <FaPhoneAlt className="text-red-800 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">Phone</h3>
            <p className="text-gray-600">+252-617-900-033 <br /> OR <br /> +252-613-762-893</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center gap-4"
          >
            <FaEnvelope className="text-red-800 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">Email</h3>
            <p className="text-gray-600">contact@adventureshop.com</p>
          </motion.div>
        </div>
      </section>

      
      <section className="py-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Follow Us</h2>
        <div className="flex justify-center gap-6">
          <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-red-800 text-2xl">
            <FaFacebookF />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-red-800 text-2xl">
            <FaTwitter />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-red-800 text-2xl">
            <FaInstagram />
          </motion.a>
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Find Us Here
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-96 rounded-3xl overflow-hidden shadow-xl"
        >
          <iframe
            title="AdventureShop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019164517057!2d-122.42067968468128!3d37.779026779757664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0d2a4f7f%3A0x4b9f1e1f1a4c8b6a!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
}
