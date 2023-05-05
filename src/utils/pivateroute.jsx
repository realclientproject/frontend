import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateSuperAdmin = () => {
  const data = localStorage.getItem("user");

  return data && data.includes("superadmin") ? (
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

export default PrivateSuperAdmin;
