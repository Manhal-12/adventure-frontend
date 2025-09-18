import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"


function BookForm() {
  const [name,setName] = useState("")
  const [image,SetImage] = useState(null)
  const [quantity,setQuantity] = useState("")
  const [price,setPrice] = useState("")
  const [category,setCategory] = useState("")

  const navigate = useNavigate()

  const formData = new FormData()

  formData.append("name", name)
  formData.append("quantity", quantity)
  formData.append("price", price)
  formData.append("category", category)
  formData.append("img", image)
  


  const hanldePost = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/create/product", formData).then(() => {
      toast.success("Success register", {
        position: "top-right",
        autoClose: true,
      })
      navigate("/dash/products")
    })
  }


  return (
    <form
      action="/submit-book"
      method="POST"
      encType="multipart/form-data"
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-red-800">
        Register a Product
      </h2>

      <div>
        <label className="block mb-1 font-medium">Product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="bookName"
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">quantity</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      

      <div>
        <label className="block mb-1 font-medium">Price ($)</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          
          onChange={(e) =>  SetImage(e.target.files[0])}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <button
      onClick={hanldePost}
        type="submit"
        className="w-full bg-red-800 text-white p-2 rounded hover:bg-red-900"
      >
        Register Product
      </button>
    </form>
  );
}

export default BookForm;
