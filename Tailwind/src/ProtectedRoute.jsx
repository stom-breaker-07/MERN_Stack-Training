import React from "react";
import { Navigate } from "react-router-dom";


function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("auth");

  // If not logged in → go to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
