import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = (isAuthenticated, user, children) => {
  const location = useLocation();

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  )
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <navigate to="/shop/home" />;
    }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <navigate to="unauth-page" />;
  }

  if(isAuthenticated && user?.role === 'admin' && location.pathname.include('shop')){
    return <navigate to='/admin/dashboard' />
  }

  return <> {children} </>;

};

export default CheckAuth;
