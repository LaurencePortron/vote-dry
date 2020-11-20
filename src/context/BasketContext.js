import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

export default function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const deleteProduct = (id) => {
    setBasket(basket.filter(product => product.id !== id)
    );
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        deleteProduct,
        setBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
