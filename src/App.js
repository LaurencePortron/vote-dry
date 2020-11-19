import React from 'react';
import './App.css';
import VoteDry from './components/VoteDry';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Producer from './components/Producer';
import LoginContextProvider from './contexts/LoginContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <LoginContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={VoteDry}>
            {/* {currentLogin ? <Redirect to='/dashboard' /> : null} */}
          </Route>
          <Route path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route path='/producer' component={Producer} />
        </Switch>
        <Footer />
      </Router>
    </LoginContextProvider>
  );
}

export default App;
