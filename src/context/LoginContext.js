import React, { createContext, useState } from 'react';

export const Login = createContext();

export default function LoginProvider({ children }) {
  const [currentLogin, setCurrentLogin] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Login.Provider
      value={{
        currentLogin,
        setCurrentLogin,
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </Login.Provider>
  );
}
