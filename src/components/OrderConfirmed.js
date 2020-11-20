import React, { useContext } from 'react';
import moment from 'moment';
import Footer from '../components/Footer';
import NavBarConsumer from '../components/NavBarConsumer';
import { ProducerContext } from '../context/ProducerContext';
import '../styles/ProducerDetail.scss';

const OrderConfirmed = (props) => {
  const { producers } = useContext(ProducerContext);

  const producerId = parseInt(props.match.params.producer);

  // setTimeout(() => {
  //   props.history.push('/consumer');
  // }, 5000);

  return (
    producers.length !== 0 && (
      <>
        <NavBarConsumer />
        <div className='order-confirmed'>
          <h1>Thanks guy for your order !</h1>
          <h2>
            {
              producers.filter((producer) => producer.id === producerId)[0]
                .meetMessage
            }{' '}
            at {moment().add(2, 'hours').format('hh:mm')} ...
          </h2>
          <h2>Don't be in late and don't tell anyone ...</h2>
        </div>
        <Footer />
      </>
    )
  );
};

export default OrderConfirmed;
