import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./authContext";
import Colors from "../utils/Colors";
import { Loader } from "@mantine/core";

const RequireAdmin = () => {
  const { user, setUser, token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userType = localStorage.getItem("userType") || null;
    const id = localStorage.getItem("id") || null;

    if (token && userType === "admin" && id) {
      setUser((prevUser) => ({
        ...prevUser,
        token,
        userType,
        id,
      }));
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

  return user && user.userType === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default RequireAdmin;
