import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ConsumerPage.css';
import Producer from './Producer';
import Filter from './Filter';

export default function ConsumerPage(props) {
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.68.111:5000/producerList`).then((response) => {
      setProducers(response.data);
    });
  }, []);

  return (
    <div>
      <div className='filter'>
        <Filter />
      </div>
      <div className='cards'>
        {producers.map((producer) => (
          <div>
            <Producer key={producer.id} producer={producer} />
          </div>
        ))}
      </div>
    </div>
  );
}
