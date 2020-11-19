import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ProducerContext = createContext();

const ProducerContextProvider = ({ children }) => {
  const [producers, setProducers] = useState([]);

  const getProducerList = () => {
    axios.get(`http://192.168.68.111:5000/producerList`).then((response) => {
      setProducers(response.data);
      console.log(response.data);
    });
  };

  return (
    <ProducerContext.Provider value={{ getProducerList, producers }}>
      {children}
    </ProducerContext.Provider>
  );
};

export default ProducerContextProvider;
