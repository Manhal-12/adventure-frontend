import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import HeaderBookStore from "./Header";

function RegistrationForm() {
  const [role, setRole] = useState("customer"); // customer or admin
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleInsert = (e) => {
    e.preventDefault();
    
    // Decide endpoint based on role
    const url = role === "customer" 
      ? "http://localhost:3000/create/customer" 
      : "http://localhost:3000/create/admin";

    axios.post(url, { name, email, phone, address, password })
      .then(() => {
        toast.success(`${role === "customer" ? "Customer" : "Admin"} registered successfully`);
        navigate("/customerLogin"); // or admin login page if needed
      })
      .catch((error) => {
        toast.error("Registration failed or email already exists");
      });
  };

  return (
    <>
      <HeaderBookStore />
      <form className="max-w-md mt-20 mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4 text-red-800">
          {role === "customer" ? "Customer" : "Admin"} Registration
        </h2>

        {/* Role selector */}
        <div className="flex justify-center gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input 
              type="radio" 
              name="role" 
              value="customer" 
              checked={role === "customer"} 
              onChange={() => setRole("customer")} 
            />
            Customer
          </label>
          <label className="flex items-center gap-2">
            <input 
              type="radio" 
              name="role" 
              value="admin" 
              checked={role === "admin"} 
              onChange={() => setRole("admin")} 
            />
            Admin
          </label>
        </div>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-800 text-white p-2 rounded hover:bg-red-900"
          onClick={handleInsert}
        >
          Register {role === "customer" ? "Customer" : "Admin"}
        </button>
      </form>
    </>
  );
}

export default RegistrationForm;
