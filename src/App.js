import React from 'react';
import './App.css';
import VoteDry from './components/VoteDry';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import ProducerDetail from './components/ProducerDetail';
import LoginContextProvider from './contexts/LoginContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <LoginContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={VoteDry} />
          <Route path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/consumer/:producer' component={ProducerDetail} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </LoginContextProvider>
  );
}

export default App;
