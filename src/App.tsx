// Libraries
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
// Screens
import Dashboard from "./screens/Dashboard";
import AddProduct from "./screens/AddProduct";
import ProductList from "./screens/ProductList";
import Orders from "./screens/Orders";


function App() {
  let initialPage = window.location.href.slice(22);
  if(initialPage.includes("manage-products")) initialPage = "Manage Products";

  const [currentPage, setCurrentPage] = useState<string>(initialPage);

  useEffect(() => {
    document.title = "Dashboard | " + currentPage;
  }, [currentPage])

  return (
    <div className="grid-container">
      <Topbar currentPage={currentPage} />
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="p-8 bg-[#F7F7F7] min-h-[92vh] w-full">
        <div className="bg-white rounded-2xl py-14 px-8 w-full">
          <Routes>
            <Route path="/" element={ <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-products/add-product" element={<AddProduct />} />
            <Route path="/manage-products/products" element={<ProductList />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
