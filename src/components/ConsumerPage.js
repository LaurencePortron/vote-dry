import React, { useContext } from 'react';
import ProducerCardTest from './ProducerCardTest';
import Filter from './Filter';
import Footer from '../components/Footer';
import SearchBar from './SearchBar';
import { ProducerContext } from '../context/ProducerContext';
import NavBarConsumer from './NavBarConsumer';
import './ConsumerPage.css';
import { Login } from '../context/LoginContext';

export default function ConsumerPage(props) {
  const { producers, alcoholSearched } = useContext(ProducerContext);

  const { currentLogin } = useContext(Login);

  const displayProducers = () => {
    return alcoholSearched.length > 0
      ? alcoholSearched.map((producer) => {
          return <ProducerCardTest key={producer.id} producer={producer} />;
        })
      : producers.map((producer) => {
          return <ProducerCardTest key={producer.id} producer={producer} />;
        });
  };

  // const isLogin = (props) => {
  //   return currentLogin.length > 0 ? (

  //   ) : (
  //     <div>
  //       Access forbidden
  //       {setTimeout(() => {
  //         props.history.push('/signin');
  //       }, 3000)}
  //     </div>
  //   );
  // };

  return (
    <>
      <div>
        <NavBarConsumer />
        <div className='searchbar-container'>
          <SearchBar />
        </div>

        <div className='container-map'>{displayProducers()}</div>
        <Footer />
      </div>
    </>
  );
}
