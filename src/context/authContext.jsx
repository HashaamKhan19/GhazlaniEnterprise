import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

/*eslint-disable*/
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       const token = await localStorage.getItem('token');
  //       const userType = await localStorage.getItem('userType');
  //       const id = await localStorage.getItem('id');

  //       if (token && userType && id) {
  //         setUser({token, userType, id});
  //       }
  //     };
  //     fetchUser();
  //   }, []);

  //   const logout = () => {
  //     localStorage.clear();
  //     setUser(null);
  //   };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
