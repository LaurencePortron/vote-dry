import React from 'react';
import './App.css';
import VoteDry from './components/VoteDry';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LoginContextProvider from './contexts/LoginContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerPage from './components/ConsumerPage';

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
          <Route exact path='/consumer' component={ConsumerPage} />
        </Switch>
      </Router>
    </LoginContextProvider>
  );
}

export default App;
