import React from 'react';
export default function ProducerCard(props) {
  const { producer } = props;
  return (
    <figure className='producer-card'>
      <blockquote>{producer.name}</blockquote>
      <p>
        <cite>{producer.ratings}</cite>
      </p>
      <figcaption>{producer.alcohol}</figcaption>
    </figure>
  );
}
