import React, { useEffect, useState, useContext } from 'react';
import '../styles/ProducerDetail.scss';

const ProducerDetail = (props) => {
  const [producerDetail, setProducerDetail] = useState({});

  useEffect(() => {});

  return (
    <section className='producer-detail'>
      <h1>{props.match.params.producer}</h1>
    </section>
  );
};

export default ProducerDetail;
