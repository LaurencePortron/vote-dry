import React, { useContext } from 'react';
import './FeedBacks.css';
import { ProducerContext } from '../context/ProducerContext';

const FeedBacks = (props) => {
  const { producerDetail } = props;
  console.log(producerDetail);
  return (
    <div className='feedbacks-container'>
      {producerDetail[0].feedbacks &&
        producerDetail[0].feedbacks.map((feedback, i) => {
          return (
            <div key={i} className='cards-reviews'>
              <li>{feedback.username} user</li>
              <li>Rating: {feedback.rating}</li>
              <li>
                <em>Reviews: {feedback.message}</em>
              </li>
            </div>
          );
        })}
    </div>
  );
};

export default FeedBacks;
