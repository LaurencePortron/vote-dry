import React, { useContext, useEffect } from 'react';
import './ConsumerPage.css';
import Producer from './Producer';
import Filter from './Filter';
import SearchBar from './SearchBar';
import { ProducerContext } from '../context/ProducerContext';

export default function ConsumerPage(props) {
  const { producers, alcoholSearched } = useContext(ProducerContext);

  const displayProducers = () => {
    return alcoholSearched.length > 0
      ? alcoholSearched.map((producer) => {
          return <Producer key={producer.id} producer={producer} />;
        })
      : producers.map((producer) => {
          return <Producer key={producer.id} producer={producer} />;
        });
  };

  return (
    <div>
      <SearchBar />
      <div>
        <Filter />
      </div>
      {displayProducers()}
    </div>
  );
}
