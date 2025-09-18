import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

function UpdateproductForm() {
      const [name,setName] = useState()
      const [image,SetImage] = useState()
      const [quantity,setQuantity] = useState()
      const [price,setPrice] = useState()
      const [category,setCategory] = useState()

      const params = useParams()

      const navigate = useNavigate()

      const handleSingleData = () => {
        axios.get(`https://adventure-backend-4.onrender.com/singleProduct/${params.id}`).then((res) => {
            setName(res.data.name),
            setQuantity(res.data.quantity),
            setPrice(res.data.price)
            setCategory(res.data.category)
            SetImage(res.data.prImage)
        })
      }


      const formData = new FormData()

      formData.append("name", name)
      formData.append("quantity", quantity)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("img", image)

      const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`https://adventure-backend-4.onrender.com/update/product/${params.id}`, formData).then(() => {
          alert("success Update")
          navigate("/dash/products")
        })
      }

      useEffect(() => {
        handleSingleData()
      }, [])
      

      
  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-red-800">
        Update Product
      </h2>

      <div>
        <label className="block mb-1 font-medium">Product Name</label>
        <input
          type="text"
          name="bookName"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">quantity</label>
        <input
          type="number"
          name="quantity"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

     

      <div>
        <label className="block mb-1 font-medium">Price ($)</label>
        <input
          type="number"
          name="price"
          className="w-full border border-gray-300 rounded p-2"
          required
              value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">category</label>
        <input
          type="text"
          name="category"
          className="w-full border border-gray-300 rounded p-2"
          required
              value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full border border-gray-300 rounded p-2"
          onChange={(e) =>  SetImage(e.target.files[0])}
        />
        <img className="w-60" src={`http://localhost:3000/allImage/${image}`} alt="" />
      </div>

      <button
        type="submit"
        className="w-full bg-red-800 text-white p-2 rounded hover:bg-red-800"
        onClick={handleUpdate}
      >
        Update product
      </button>
    </form>
  );
}

export default UpdateproductForm;
