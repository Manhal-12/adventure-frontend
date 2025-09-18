import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import SidenavList from "./sideNavList";
import axios from "axios";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [totalIncome, setTotalIncome] = useState([]);
  const [topCustomer, setTopCustomer] = useState([]);

  const handleGetIncome = () => {
    axios.get("http://localhost:3000/getIncome/order").then((res) => {
      setTotalIncome(res.data[0].totalIncome);
    });
  };

  const handleTopCustomer = () => {
    axios.get("http://localhost:3000/getTopCustomer/order").then((res) => {
      setTopCustomer(res.data);
    });
  };

  useEffect(() => {
    handleGetIncome();
    handleTopCustomer();
  }, []);

  const handleIsOpen = () => setIsOpen(true);
  const handleIsClose = () => setIsOpen(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        style={{ width: isOpen ? "5%" : "30%" }}
        className="bg-red-800 text-red-800 h-[140vh] relative transition-all duration-300 ease-in-out"
      >
        <div className="flex p-2 relative">
          <i
            style={{ display: isOpen ? "block" : "" }}
            onClick={handleIsClose}
            className="text-white fa-solid fa-chevron-left hidden absolute right-2"
          ></i>

          <i
            style={{ display: isOpen ? "none" : "" }}
            onClick={handleIsOpen}
            className="text-white ml-0 fa-solid fa-chevron-right absolute right-2"
          ></i>
        </div>

        {/* Sidebar Links */}
        <div className="pt-20 flex flex-col gap-y-6 px-4 mt-20 space-y-3">
          {/* <Link to="/dash">
            <SidenavList icon="fa-home" title="Dashboard" />
          </Link> */}

          <Link to="products">
            <SidenavList icon="fa-p" title="Products" />
          </Link>

          <Link to="add-product">
            <SidenavList icon="fa-plus" title="Add Products" />
          </Link>

          <Link to="customers">
            <SidenavList icon="fa-user" title="Customers" />
          </Link>

          <Link to="addOrder">
            <SidenavList icon="fa-shopping-cart" title="Add Orders" />
          </Link>

          {/* <Link to="reports">
            <SidenavList icon="fa-chart-bar" title="Reports" />
          </Link>

          <Link to="settings">
            <SidenavList icon="fa-cog" title="Settings" />
          </Link> */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full p-4 bg-gray-100">
        
        
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;