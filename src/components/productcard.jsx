import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';

function ProductCard() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  const handleStoreData = (data) => {
    const newData = JSON.parse(localStorage.getItem("product")) || []

    const existsId = newData.some((item) => item._id === data._id)

    if (!existsId) {
      newData.push(data)
      localStorage.setItem("product", JSON.stringify(newData))
    }
  }

  useEffect(() => {
    axios.post("https://adventure-backend-4.onrender.com/read/product", { category })
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [category]);

  return (
    <div className='px-4 md:px-10'>
      <h1 className='text-center font-semibold font-serif text-3xl md:text-4xl text-red-800 mt-10'>Our Products</h1>

      {/* Category Filters */}
      <div className='pt-8 flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 text-base md:text-xl'>
        <label className="flex items-center gap-2">
          <input name="category" type="radio" onChange={() => setCategory("Protection & Shelter")} /> Protection & Shelter
        </label>
        <label className="flex items-center gap-2">
          <input name="category" type="radio" onChange={() => setCategory("Navigation & Communication")} /> Navigation & Communication
        </label>
        <label className="flex items-center gap-2">
          <input name="category" type="radio" onChange={() => setCategory("Safety & Survival")} /> Safety & Survival
        </label>
        <label className="flex items-center gap-2">
          <input name="category" type="radio" onChange={() => setCategory("Activity-Specific Tools")} /> Activity-Specific Tools
        </label>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {data.length > 0 ? data.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-3">
            {/* Product Image */}
            <div className="h-60 w-full overflow-hidden rounded mb-3">
              <img
                src={`https://adventure-backend-4.onrender.com/allImage/${item.prImage}`}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Title and Status */}
            <div className='flex justify-between items-center'>
              <h2 className="font-semibold text-[14px] md:text-sm text-gray-800 leading-snug line-clamp-2">
                {item.name}
              </h2>
              <h2 className={`${item.status === "aviable" ? "text-green-500" : "text-red-500"} font-semibold text-[14px] md:text-sm leading-snug`}>
                {item.status}
              </h2>
            </div>

            {/* Price and Add Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-3 gap-2 sm:gap-0">
              <span className="text-red-600 font-bold text-sm md:text-base">${item.price}</span>
              <button
                onClick={() => handleStoreData(item)}
                disabled={item.status !== "aviable"}
                className={`${item.status !== "aviable" ? "bg-gray-500 text-white px-3 py-1 text-xs rounded flex items-center gap-1 line-through" : "bg-red-800 text-white px-3 py-1 text-xs rounded flex items-center gap-1 hover:bg-red-900 transition"}`}
              >
                <FaShoppingCart className="text-xs" /> Add
              </button>
            </div>
          </div>
        )) :
          <div className='col-span-full'>
            <h1 className='text-2xl md:text-4xl font-semibold text-center mt-20'>There's no data</h1>
          </div>
        }
      </div>
    </div>
  );
}

export default ProductCard;
