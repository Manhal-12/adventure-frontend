import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import HeaderBookStore from "./Header";

function LoginForm() {
  const [role, setRole] = useState("customer"); // customer or admin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const url = role === "customer"
      ? "https://adventure-backend-4.onrender.com/customer"
      : "https://adventure-backend-4.onrender.com/admin";

    axios.post(url, { email, password })
      .then((res) => {
        toast.success(`${role === "customer" ? "Customer" : "Admin"} login successful`);
        // Store login data in localStorage
        localStorage.setItem(role, JSON.stringify(res.data));
        navigate("/"); // You can redirect admin to a dashboard if needed
      })
      .catch(() => {
        toast.error("Invalid email or password");
      });
  };

  return (
    <>
      <HeaderBookStore />
      <form className="max-w-md mt-20 mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4 text-red-800">
          {role === "customer" ? "Customer" : "Admin"} Login
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
          onClick={handleLogin}
        >
          Login {role === "customer" ? "Customer" : "Admin"}
        </button>
      </form>
    </>
  );
}

export default LoginForm;
