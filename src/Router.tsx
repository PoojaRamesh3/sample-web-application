import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Orders from "./screens/Orders";
import Products from "./screens/Products";
import Account from "./screens/Account";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
