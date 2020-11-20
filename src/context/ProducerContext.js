import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProducerContext = createContext({});

const ProducerContextProvider = ({ children }) => {
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.68.111:5000/producerList`).then((response) => {
      setProducers(response.data);
    });
  }, []);

  return (
    <ProducerContext.Provider value={{ producers }}>
      {children}
    </ProducerContext.Provider>
  );
};

export default ProducerContextProvider;
