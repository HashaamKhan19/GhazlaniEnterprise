import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./authContext";
import Colors from "../utils/Colors";
import { Loader } from "@mantine/core";

const RequireAuth = () => {
  const { user, setUser, token, setJWT } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token") || null;
    const userType = localStorage.getItem("userType") || null;
    const id = localStorage.getItem("id") || null;
    const user = JSON.parse(localStorage.getItem("user")) || null;

    if (token && userType && id) {
      setUser({ ...user, userType });
      setJWT(token);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: Colors.main,
        }}
      >
        <Loader color={Colors.white} variant="oval" />
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
