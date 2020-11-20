import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProducerCardTest from './ProducerCardTest';
import Filter from './Filter';
import Footer from '../components/Footer';
import SearchBar from './SearchBar';
import { ProducerContext } from '../context/ProducerContext';
import NavBarConsumer from './NavBarConsumer';
import './ConsumerPage.css';

export default function ConsumerPage(props) {
  const { producers, alcoholSearched } = useContext(ProducerContext);

  const displayProducers = () => {
    return alcoholSearched.length > 0
      ? alcoholSearched.map((producer) => {
          return (
            <Link to={{ pathname: `/consumer/${producer.id}` }}>
              <ProducerCardTest key={producer.id} producer={producer} />
            </Link>
          );
        })
      : producers.map((producer) => {
          return (
            <Link to={{ pathname: `/consumer/${producer.id}` }}>
              <ProducerCardTest key={producer.id} producer={producer} />
            </Link>
          );
        });
  };

  return (
    <div>
      <NavBarConsumer />
      <div className='searchbar-container'>
        <SearchBar />
      </div>

      <div className='container-map'>{displayProducers()}</div>
      <Footer />
    </div>
  );
}
