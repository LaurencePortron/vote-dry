import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ConsumerPage.css';

export default function ConsumerPage(props) {
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    axios.get(``).then((response) => {
      setProducers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <figure className='producers-cards'>
        {/* <img src={} alt={} /> */}
        <figcaption>
          <blockquote>{}</blockquote>
          <p>
            <cite>{}</cite>
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
