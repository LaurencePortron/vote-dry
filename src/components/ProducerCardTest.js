import React from 'react';
import './ConsumerPage.css';

const ProducerCardTest = (props) => {
  const { producer } = props;
  return (
    <div className='container'>
      <div className='producer-card'>
        <img src={producer.image} style={{ width: '90px', height: '90px' }} />
        <p>{producer.name}</p>

        <p>{producer.ratings}</p>

        <p>{producer.alcohol}</p>
      </div>
    </div>
  );
};

export default ProducerCardTest;
