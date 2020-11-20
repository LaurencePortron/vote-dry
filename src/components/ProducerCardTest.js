import React from 'react';
import './ConsumerPage.css';

const ProducerCardTest = (props) => {
  const { producer } = props;
  return (
    <div className='container'>
      <div className='producer-card'>
        <img
          src={producer.image}
          style={{ maxWidth: '60px', height: '90px' }}
          alt='alc'
        />
        <div className='producer-paraphs'>
          <p>
            <strong>Producer: </strong>
            {producer.name}
          </p>
          <p>
            <strong>Alcohol: </strong>
            {producer.alcohol}
          </p>
          <p>
            <strong>Price: </strong> ${producer.price}
          </p>
          <p>
            <strong>Ratings: </strong>
            {producer.ratings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProducerCardTest;
