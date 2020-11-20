import React, { useEffect, useState, useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
import Footer from '../components/Footer';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/ProducerDetail.scss';
import NavBarConsumer from './NavBarConsumer';
import { Login } from '../context/LoginContext';

const ProducerDetail = (props) => {
  const [producerDetail, setProducerDetail] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const producerId = props.match.params.producer;

  const { currentLogin } = useContext(Login);

  useEffect(() => {
    axios.get(`http://192.168.68.111:5000/producerList`).then((response) => {
      setProducerDetail(
        response.data.filter((producer) => producer.id === parseInt(producerId))
      );
    });
  }, [producerId]);

  const handleClick = () => {
    const finalQuantity = producerDetail[0].stock - quantity;
    axios
      .post(
        `http://192.168.68.111:5000/producer?id=${producerId}&&stock=${finalQuantity}`
      )
      .then((res) => console.log(res))
      .then(props.history.push(`/consumer/orderconfirmed/${producerId}`))
      .catch((err) => console.log(err));
  };

  console.log(producerDetail);

  return (
    producerDetail.length !== 0 && (
      <>
        <NavBarConsumer />
        <div className='producer-detail-container'>
          <section className='producer-detail'>
            <h1>
              {producerDetail[0].name} from {producerDetail[0].city}
            </h1>
            <Box component='fieldset' mb={3} borderColor='transparent'>
              <Typography component='legend'></Typography>
              <Rating
                name='read-only'
                value={producerDetail[0].ratings}
                readOnly
                max={10}
              />
            </Box>
            <h3>
              Alcohol available : {producerDetail[0].stock}{' '}
              {producerDetail[0].alcohol}
            </h3>
            <div className='rating'></div>
            <p>{producerDetail[0].price}$ per unit </p>

            <div className='input'>
              <TextField
                id='standard-number'
                label='Quantity'
                type='number'
                value={quantity}
                InputProps={{
                  inputProps: { min: 0, max: producerDetail[0].stock },
                  style: { fontFamily: 'IBM Plex Serif, serif' },
                }}
                InputLabelProps={{
                  shrink: true,
                  style: { fontFamily: 'IBM Plex Serif, serif' },
                }}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </div>
            <p>Total : {quantity * producerDetail[0].price}$</p>
            <div className='button'>
              {quantity === 0 ? (
                <Button
                  disabled
                  variant='contained'
                  type='button'
                  onClick={handleClick}
                >
                  Send my order
                </Button>
              ) : (
                <Button
                  variant='contained'
                  type='button'
                  onClick={handleClick}
                  style={{ fontFamily: 'IBM Plex Serif, serif' }}
                >
                  Send my order
                </Button>
              )}
            </div>
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </>
    )
  );
};

export default ProducerDetail;
