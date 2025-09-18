import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sideNav';
import Home from './pages/Home';
import ProductForm from './components/productForm';
import ProductTable from './components/products';
import CustomerRegistrationForm from './components/customerRegiter';
import { ToastContainer } from 'react-toastify';
import CustomerTable from './components/CustomerTable';
import UpdateProductForm from './components/UpdataProduct';
import CustomerUpdateForm from './components/CustomerUpdate';
import AddOrder from './components/AddOrder';
import CustomerLogin from './components/customerLogin';
import CartPage from './components/CartPage';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ChatPage from './pages/messaging';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Layout Route: Sidebar is the parent layout */}
        <Route path="/dash" element={<Sidebar />}>
          <Route path='products' element={<ProductTable />} />
          <Route path='addOrder' element={<AddOrder />} />
          <Route path='add-product' element={<ProductForm />} />
          <Route path='customers' element={<CustomerTable />} />
        </Route>

        <Route path='/register' element={<CustomerRegistrationForm />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/customerLogin' element={<CustomerLogin />} />
        <Route path='/update/product/:id' element={<UpdateProductForm />} />
        <Route path='/update/customer/:id' element={<CustomerUpdateForm />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/message' element={<ChatPage/>} />
   
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;