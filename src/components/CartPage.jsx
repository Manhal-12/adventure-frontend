import { useEffect, useState } from "react";
import HeaderBookStore from "./Header";
import axios from "axios";

function CartPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("product")) || []
        const updateData = getData.map(item => ({
            ...item, quantity: 1, maxQauntity: item.quantity
        }))
        setProducts(updateData)
    }, [])

    const handleIncrement = (id) => {
        setProducts(prd => prd.map(
            item => item._id === id ? 
            {...item, quantity: item.quantity < item.maxQauntity ? item.quantity + 1 : item.quantity }
            :
            item
         ))
    }

    const handleDecrement = (id) => {
        setProducts(prd => prd.map( item =>
            item._id === id ?
            {...item, quantity: item.quantity > 1 ? item.quantity -1 : 1}
            :
            item
        ))
    }

    const customer = localStorage.getItem("customer")

    let customerOrder = ""

    if(customer){
        customerOrder = JSON.parse(customer).data?.customer.name
        console.log(customerOrder)
    }

    const handleOrder = () => {
        if(!customerOrder){
            alert("customer is Required pleas login or enter customer name")
            return;
        }
        axios.post("http://localhost:3000/create/order", {
            "customer": customerOrder,
            "products": products.map(item => ({
                "productId": item._id,
                "quantity": item.quantity
            }))
        }).then((res) => {
            if(res.data.error){
                alert(res.data.error)
            }
            else{
                alert("success order")
                localStorage.removeItem("product")
                setProducts(res.data)
            }
        }).catch(error => console.log(error))
    }

    

    

    const TotalPrice = products.reduce((sum, item) => sum + (Number(item.price)* (Number(item.quantity))), 0) 

    const handleDeleteItem = (id) => {
        const deleteData = products.filter((item) => String(item._id) !== String(id))
        localStorage.setItem("product", JSON.stringify(deleteData))
        setProducts(deleteData)
    }

    return (
        <>
        <HeaderBookStore />
            <div className="bg-gray-100 min-h-screen py-10 px-4">
                <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg flex flex-col lg:flex-row overflow-hidden">
                    {/* Left: Cart Items */}
                    <div className="w-full lg:w-2/1 p-6">
                        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

                        <div className="hidden md:flex justify-between text-gray-600 font-medium border-b pb-3 mb-4">
                            <span>Product Card</span>
                            <span>Removing</span>
                            <span>Quantity</span>
                            <span>Price</span>
                            <span>TOTAL</span>
                        </div>

                        {
                           products.length > 0 ? products.map((item) => {
                                return <div
                            className="flex flex-col md:flex-row justify-between items-center py-4 border-b"
                        >
                            {/* Product Details */}
                            <div className="flex items-center gap-4 w-full md:w-40">
                                <img
                                    src={`http://localhost:3000/allImage/${item.prImage}`}
                                    alt=""
                                    className="w-20 h-20 object-contain"
                                />
                                <div className="flex space-x-10 ">
                                    <h4 className="font-medium text-lg">{item.name}</h4>
                                    <p className="text-sm text-red-800">{item.category}</p>
                                    <button
                                        onClick={() => handleDeleteItem(item._id)}
                                        className="text-red-900 text-sm mt-1"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="mt-4 md:mt-0 flex items-center gap-2 ml-28">
                                <button
                                    onClick={() => handleDecrement(item._id)}
                                    className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
                                >
                                    -
                                </button>
                                <span className="font-semibold">{item.quantity}</span>
                                <button
                                    onClick={() => handleIncrement(item._id)}
                                    className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
                                >
                                    +
                                </button>
                            </div>

                            {/* Price */}
                            <div className="mt-4 md:mt-0 text-gray-700">
                                ${item.price}
                            </div>

                            {/* Total per item */}
                            <div className="mt-4 md:mt-0 text-gray-700">
                                ${item.price * item.quantity}
                            </div>
                        </div>
                            })
                            :
                            <h1>No Data</h1>
                        }

                        
                    </div>

                    <div className="w-full lg:w-1/3 bg-gray-50 p-6 h-96">
                        <h3 className="text-xl font-semibold mb-4">Checking Order Bill</h3>

                        

                        <div className="mb-4">
                            <label className="text-sm text-gray-600">SHIPPING POINT!!</label>
                            <select className="w-full border px-3 py-2 mt-1">
                                <option>Choose delivery option</option>
                                <option>Delivery</option>
                                <option>Not Delivery</option>
                               
                                
                            </select>
                        </div>

                        

                        <div className="flex justify-between font-semibold text-gray-800 border-t pt-3 mb-6">
                            <span>TOTAL COST</span>
                            <span>${TotalPrice}</span>
                        </div>

                        <button onClick={handleOrder} className="w-full bg-red-800 text-white py-3 rounded shadow hover:bg-red-950">
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CartPage;
