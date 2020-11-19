import React from 'react';
import './App.css';
import VoteDry from './components/VoteDry';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import LoginContextProvider from './context/LoginContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerPage from './components/ConsumerPage';
import ProducerContextProvider from './context/ProducerContext';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={VoteDry} />
        <LoginContextProvider>
          <ProducerContextProvider>
            <Route path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route path='/consumer' component={ConsumerPage} />
          </ProducerContextProvider>
        </LoginContextProvider>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
