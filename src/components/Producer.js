import React from 'react';

export default function Producer(props) {
  const { producer } = props;

  return (
    <figure className='producer-card'>
      <div>
        <img src={producer.image.url} alt='alc'></img>
      </div>
      <div>
        <p>Producer: {producer.name}</p>

        <p>
          <cite>
            <strong>{producer.alcohol}</strong>
          </cite>
        </p>

        <p>Price: {producer.price}</p>

        <p>Rating: {producer.ratings}</p>
      </div>
    </figure>
  );
}
