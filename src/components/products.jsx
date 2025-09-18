import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

function productTable() {
  const [products, setproducts] = useState([]);

  const [page, setPage ] = useState(0)

  const hanldeIncrement = () => {
    if(page <= products.length){
      setPage(page + 1)
    }
  }

  const handleDecrement = () => {
    if(page > 0){
      setPage(page - 1)
    }
  }


  function showData() {
    axios.post(`http://localhost:3000/read/product`)
      .then((res) => setproducts(res.data))
      .catch((err) => console.error("Error loading products:", err));
  }

  const searchData  = (id) => {
    const key = id.target.value
    if(key){
      axios.get(`http://localhost:7000/search/product/${key}`).then((res) => {
        setproducts(res.data)
      })
    }
    else{
      showData()
    }
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/delete/product/${id}`).then(() => {
      alert("success delete")
      showData()
    })
  }



  useEffect(() => {
    showData()
  }, [page]);

  return (
    <div className="">
      
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-red-800">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">quantity</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? products.map((product, index) => (
            <tr key={product._id} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">
                <img className="w-20" src={`http://localhost:3000/allImage/${product.prImage}`} alt="" />
              </td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.quantity}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">{product.status}</td>
              <td className="border p-2 space-x-4">
                <Link to={`/update/product/${product._id}`}><i className="fa-solid fa-pen-to-square text-blue-600 cursor-pointer"></i></Link>
                <i onClick={() =>  handleDelete(product._id)} className="fa-solid fa-trash text-red-600 cursor-pointer"></i>
              </td>
            </tr>
          ))
          :
            <tr>
              <td colSpan="6" className="p-4 text-center text-gray-500">
                No products found.
              </td>
            </tr>
        }
          
            
        </tbody>
      </table>

     
    </div>
  );
}

export default productTable;
