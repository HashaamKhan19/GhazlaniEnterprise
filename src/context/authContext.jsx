import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  logout: () => {},
  token: null,
  setToken: () => {},
  login: () => {},
});

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jwt, setJWT] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token") || null;
    const userType = localStorage.getItem("userType") || null;
    const id = localStorage.getItem("id") || null;
    const user = JSON.parse(localStorage.getItem("user")) || null;
    if (token && userType && id && user) {
      setUser({ ...user, userType });
      setJWT(token);
    }
  }, []);

  const login = (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userType", user.role);
    localStorage.setItem("id", user.id);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, token: jwt, setJWT }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
