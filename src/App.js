import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import Footer from './components/Footer';
import './components/Footer.css';
import VoteDry from './components/VoteDry';
import ConsumerPage from './components/ConsumerPage';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <VoteDry />
      <Footer />
      <ConsumerPage />
    </div>
  );
}

export default App;
