import React, { useContext, useEffect } from 'react';
import './ConsumerPage.css';
import Producer from './Producer';
import Filter from './Filter';
import SearchBar from './SearchBar';
import { ProducerContext } from '../context/ProducerContext';

export default function ConsumerPage(props) {
  const { getProducerList, producers } = useContext(ProducerContext);

  useEffect(() => {
    getProducerList();
  }, []);

  return (
    <div>
      <SearchBar />
      <div>
        <Filter />
      </div>
      {producers.map((producer) => (
        <div>
          <Producer key={producer.id} producer={producer} />
        </div>
      ))}
    </div>
  );
}
