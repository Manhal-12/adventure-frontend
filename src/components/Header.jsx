import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HeaderBookStore() {
  const getCustomer = localStorage.getItem("customer");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.clear();
  };

  return (
    <header className="w-full bg-white px-6 md:px-48 py-4 flex items-center justify-between z-50 my-5 relative">
      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold text-red-800 cursor-pointer">
          Adventure<span className="text-gray-800">Shop</span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <Link to="/" className="hover:text-red-800 transition">Home</Link>
        <Link to="/About" className="hover:text-red-800 transition">About</Link>
        <Link to="/Blog" className="hover:text-red-800 transition">Blogs</Link>
        <Link to="/Contact" className="hover:text-red-800 transition">Contact</Link>
        <Link to="/message" className="hover:text-red-800 transition">message</Link>
        
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
          <Link to="/message" className="hover:text-red-800 transition"onClick={() => setMenuOpen(false)} >message</Link>
          
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
  );
}

export default HeaderBookStore;
