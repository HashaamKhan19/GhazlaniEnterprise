import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./authContext";
import Colors from "../utils/Colors";

const RequireAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token") || null;
    const userType = localStorage.getItem("userType") || null;
    const id = localStorage.getItem("id") || null;

    if (token && userType && id) {
      setUser({ token, userType, id });
    }

    setLoading(false);
  }, []);

  console.log("user in require auth: ", user);

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
        Loading...
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
