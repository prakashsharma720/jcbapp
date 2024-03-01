// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to true for static authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated,isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
