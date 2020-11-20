import React, { useContext } from 'react';
import './FeedBacks.css';
import { ProducerContext } from '../context/ProducerContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useTextFieldStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'IBM Plex Serif, serif',
    },
  },
}));

const FeedBacks = (props) => {
  const { producerDetail } = props;
  console.log(producerDetail);

  return (
    <>
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
    </>
  );
};

export default FeedBacks;
