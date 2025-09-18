import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import farhan from "../images/farhan.jpg"

export default function About() {
  const team = [
    {
      name: "Farhan Osman",
      role: "Founder",
      gender: "girl",
      img: farhan,
    },
    {
      name: "Faisa Mohamed",
      role: "Product Manager",
      gender: "girl",
      img: farhan,
    },
    
  ];

  const getCustomer = localStorage.getItem("customer")
    const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.clear()
  }


  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen">
      {/* Hero Section */}
      <div>
      <div
        className="relative h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <header className="w-full bg-transparent  px-6 md:px-48 p-4 relative -top-80  flex items-center justify-between z-50 ">
      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold text-white cursor-pointer">
          Adventure<span className="text-red-800">Shop</span>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
             <Link to="/" className="hover:text-red-800 transition">Home</Link>
             <Link to="/About" className="hover:text-red-800 transition">About</Link>
             <Link to="/Blog" className="hover:text-red-800 transition">Blogs</Link>
             <Link to="/Contact" className="hover:text-red-800 transition">Contact</Link>
           </nav>

           {/* Mobile Bars */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-red-800">
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

        {/* Right side (login/cart) */}
            <div className="hidden md:flex items-center gap-4">
              {getCustomer ? (
                <div className="flex gap-4 items-center">
                  <div className="bg-red-800 w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                    {JSON.parse(getCustomer).data?.customer.name[0]}
                  </div>
                  <Link to="/customerLogin">
                    <button
                      onClick={handleLogOut}
                      className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-red-800 transition border border-red-950 px-3 py-1 rounded"
                    >
                      LogOut
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <Link to="/register">
                    <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-red-800 transition border border-red-800 px-3 py-1 rounded">
                      Register Customer
                    </button>
                  </Link>
                  <Link to="/customerLogin">
                    <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-red-800 transition">
                      <FaUser />
                      Login
                    </button>
                  </Link>
                </div>
              )}
      
              <Link to="/cart">
                <button className="flex items-center gap-1 bg-red-800 text-white px-3 py-1 rounded text-sm shadow hover:bg-red-950 transition">
                  <FaShoppingCart />
                  Cart Page
                </button>
              </Link>
            </div>
      {/* Mobile Nav Dropdown */}
            {menuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
                <Link to="/" className="hover:text-red-800 transition" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/About" className="hover:text-red-800 transition" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/Blog" className="hover:text-red-800 transition" onClick={() => setMenuOpen(false)}>Blogs</Link>
                <Link to="/Contact" className="hover:text-red-800 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
                
                {getCustomer ? (
                  <button
                    onClick={() => {
                      handleLogOut();
                      setMenuOpen(false);
                    }}
                    className="text-gray-600 hover:text-red-800 transition border border-red-800 px-3 py-1 rounded"
                  >
                    LogOut
                  </button>
                ) : (
                  <>
                    <Link to="/register" onClick={() => setMenuOpen(false)}>
                      <button className="text-gray-600 hover:text-red-800 transition border border-red-800 px-3 py-1 rounded">
                        Register
                      </button>
                    </Link>
                    <Link to="/customerLogin" onClick={() => setMenuOpen(false)}>
                      <button className="text-gray-600 hover:text-red-800 transition flex items-center gap-1">
                        <FaUser /> Login
                      </button>
                    </Link>
                  </>
                )}
      
                <Link to="/cart" onClick={() => setMenuOpen(false)}>
                  <button className="flex items-center gap-1 bg-red-800 text-white px-3 py-1 rounded text-sm shadow hover:bg-red-950 transition">
                    <FaShoppingCart /> Cart Page
                  </button>
                </Link>
              </div>
            )}
    </header>
    </div>
    
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6"
        >
            <div className="relative -top-72"> 
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
            About Adventure Equipment Shop
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We provide premium outdoor gear designed for explorers, dreamers,
            and adventurers who seek the extraordinary.
          </p>
          </div>
        </motion.div>
        
      </div>

      {/* Mission & Values */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-10 border border-emerald-100"
        >
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To inspire and equip explorers with reliable, stylish, and
            eco-friendly equipment that transforms ordinary trips into
            extraordinary adventures.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-10 border border-emerald-100"
        >
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">Our Values</h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li>🌍 Sustainability - caring for our planet</li>
            <li>⚡ Reliability - gear that never lets you down</li>
            <li>❤️ Passion - driven by love for adventure</li>
            <li>🤝 Community - growing stronger together</li>
          </ul>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-r from-emerald-100 via-white to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            A diverse team of passionate adventurers dedicated to making your
            outdoor journey unforgettable.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg rounded-3xl p-6 hover:shadow-2xl transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full mb-4 object-cover ring-4 ring-emerald-200"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-20 px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-gray-800 mb-6"
        >
          Ready for your next big adventure?
        </motion.h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Discover our latest collection of adventure gear and start your
          journey with confidence and style.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="/"
          className="px-10 py-4 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition text-lg"
        >
          Shop Now
        </motion.a>
      </div>
    </div>
  );
}
