import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ConsumerPage.css';
import Producer from './Producer';
import Filter from './Filter';

export default function ConsumerPage(props) {
  const [producers, setProducers] = useState([]);
  const [bestRatings, setBestRatings] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.68.111:5000/producerList`).then((response) => {
      setProducers(response.data);
    });
  }, []);

  const compareRatings = () => {
    console.log(producers);
    console.log(bestRatings);
    //bestRatings.push(producers[0]);
    console.log(producers[0]);
    console.log(bestRatings);
    console.log(producers[0].ratings);
    for (let i = 1; i < producers.length; i++) {
      if (producers[i].ratings > bestRatings[i - 1]) {
        bestRatings.push(producers[i]);
      } else {
        bestRatings.unshift(producers[i]);
      }
      console.log(bestRatings);
      console.log('Lolo<3');
    }
    bestRatings.slice(bestRatings.length - 6);
    console.log(bestRatings);
  };

  return (
    <div>
      <div className='filter'>
        <Filter />
      </div>
      <div className='cards' onClick={() => compareRatings()}>
        {producers.map((producer) => (
          <div>
            <Producer key={producer.id} producer={producer} />
          </div>
        ))}
      </div>
    </div>
  );
}
