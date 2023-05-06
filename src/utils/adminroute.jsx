import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
const PrivateAdmin = () => {
  const user = localStorage.getItem("user");

  return user && user.includes("admin" || "superadmin") ? (
    <Outlet />
  ) : (
    <p
      style={{
        height: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "red",
        fontSize: "2rem",
      }}
    >
      Unauthorized
    </p>
  );
};

export default PrivateAdmin;
