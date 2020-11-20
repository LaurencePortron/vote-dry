import React, { useContext } from 'react';
import ProducerCardTest from './ProducerCardTest';
import Filter from './Filter';
import SearchBar from './SearchBar';
import { ProducerContext } from '../context/ProducerContext';
import NavBarConsumer from './NavBarConsumer';
import './ConsumerPage.css';

export default function ConsumerPage(props) {
  const { producers, alcoholSearched } = useContext(ProducerContext);

  const displayProducers = () => {
    return alcoholSearched.length > 0
      ? alcoholSearched.map((producer) => {
          return <ProducerCardTest key={producer.id} producer={producer} />;
        })
      : producers.map((producer) => {
          return <ProducerCardTest key={producer.id} producer={producer} />;
        });
  };

  return (
    <div>
      <NavBarConsumer />
      <div className='searchbar-container'>
        <SearchBar />
      </div>

      <div className='container-map'>{displayProducers()}</div>
    </div>
  );
}
