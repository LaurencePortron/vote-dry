import React, { useContext } from 'react';
import './ConsumerPage.css';
import ProducerCard from './ProducerCard';
import Filter from './Filter';
import SearchBar from './SearchBar';
import { ProducerContext } from '../context/ProducerContext';
import NavBarConsumer from './NavBarConsumer';

export default function ConsumerPage(props) {
  const [producers, setProducers] = useState([]);
  const [bestRatings, setBestRatings] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.68.111:5000/producerList`).then((response) => {
      setProducers(response.data);
    });
  }, []);
  const { producers, alcoholSearched } = useContext(ProducerContext);

  const displayProducers = () => {
    return alcoholSearched.length > 0
      ? alcoholSearched.map((producer) => {
          return <ProducerCard key={producer.id} producer={producer} />;
        })
      : producers.map((producer) => {
          return <ProducerCard key={producer.id} producer={producer} />;
        });
  };

  return (
    <div>
      <NavBarConsumer />
      <SearchBar />
      <div>
        <Filter />
      </div>
      {displayProducers()}
    </div>
  );
}
