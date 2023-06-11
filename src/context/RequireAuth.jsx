import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./authContext";

const RequireAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  console.log("user in require auth: ", user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
