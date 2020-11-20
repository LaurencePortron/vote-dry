import React from 'react';
import './ConsumerPage.css';
export default function ProducerCard(props) {
  const { producer } = props;
  return (
    <div className='producer-card-container'>
      <div className='producer-card'>
        <p>{producer.name}</p>

        <p>{producer.ratings}</p>

        <p>{producer.alcohol}</p>
      </div>
    </div>
  );
}
