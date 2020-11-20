import React, { createContext, useState } from 'react';

export const Login = createContext();

export default function LoginProvider({ children }) {
  const [currentLogin, setCurrentLogin] = useState({});

  return (
    <Login.Provider
      value={{
        currentLogin,
        setCurrentLogin,
      }}
    >
      {children}
    </Login.Provider>
  );
}
