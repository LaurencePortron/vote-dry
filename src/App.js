import React, { useContext } from 'react';
import './App.css';
import VoteDry from './components/VoteDry';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Producer from './components/Producer';

import LoginContextProvider, { Login } from './context/LoginContext';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProducerDetail from './components/ProducerDetail';
import OrderConfirmed from './components/OrderConfirmed';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ConsumerPage from './components/ConsumerPage';
import ProducerContextProvider from './context/ProducerContext';

function App() {
  const { isAuth } = useContext(Login);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={VoteDry} />

        <Route path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route
          exact
          path='/consumer'
          render={() => (isAuth ? <ConsumerPage /> : <Redirect to='/signin' />)}
        />

        <Route
          exact
          path='/consumer/:producer'
          render={() =>
            isAuth ? <ProducerDetail /> : <Redirect to='/signin' />
          }
        />
        <Route
          exact
          path='/consumer/orderconfirmed/:producer'
          component={OrderConfirmed}
        />
        <Route
          path='/producer'
          render={() => (isAuth ? <Producer /> : <Redirect to='/signin' />)}
        />
      </Switch>
    </Router>
  );
}

export default App;
