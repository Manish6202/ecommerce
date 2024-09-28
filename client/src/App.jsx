import React from "react";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrder from "./pages/admin-view/order";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shoping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopin-view/home";
import ShoppingCheckout from "./pages/shopin-view/checkout";
import ShoppingListing from "./pages/shopin-view/listing";
import ShoppingAccount from "./pages/shopin-view/account";

const app = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1> Header component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<AuthRegister />} />
          <Route path="login" element={<AuthLogin />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrder />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default app;
