import React, { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/ProducerDetail.scss';

const ProducerDetail = (props) => {
  const [producerDetail, setProducerDetail] = useState([]);
  const producerId = props.match.params.producer;

  useEffect(() => {
    axios.get(`http://192.168.68.111:5000/producerList`).then((response) => {
      setProducerDetail(
        response.data.filter((producer) => producer.id === parseInt(producerId))
      );
    });
  }, [producerId]);

  const handleClick = () => {
    
  }

  return (
    producerDetail.length !== 0 && (
      <section className='producer-detail'>
        <h1>
          {producerDetail[0].name} from {producerDetail[0].city}
        </h1>
        <h3>
          Alcohol available : {producerDetail[0].stock}{' '}
          {producerDetail[0].alcohol}
        </h3>
        <TextField
          id='standard-number'
          label='Number'
          type='number'
          InputProps={{ inputProps: { max: producerDetail[0].stock } }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className='rating'>
          <Box component='fieldset' mb={3} borderColor='transparent'>
            <Typography component='legend'>Rating :</Typography>
            <Rating
              name='read-only'
              value={producerDetail[0].ratings}
              readOnly
              max={10}
            />
          </Box>
          <Button variant='contained' type='submit' onClick={handleClick}>
            Send my order
          </Button>
        </div>
      </section>
    )
  );
};

export default ProducerDetail;
