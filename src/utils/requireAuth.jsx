import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Login from "../pages/login/login";
const RequireAuth = () => {
  const user = localStorage.getItem("user");

  return !user ? <Login /> : <Outlet />;
};

export default RequireAuth;
