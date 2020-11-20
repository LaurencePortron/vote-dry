import React from 'react';
import './App.css';
import VoteDry from './components/VoteDry';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Basket from './components/Basket';
import Producer from './components/Producer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProducerDetail from './components/ProducerDetail';
import OrderConfirmed from './components/OrderConfirmed';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerPage from './components/ConsumerPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={VoteDry} />

        <Route path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/consumer' component={ConsumerPage} />
        <Route exact path='/consumer/:producer' component={ProducerDetail} />
        <Route
          exact
          path='/consumer/orderconfirmed/:producer'
          component={OrderConfirmed}
        />
        <Route path='/producer' component={Producer} />
        <Route path='/basket' component={Basket} />
      </Switch>
    </Router>
  );
}

export default App;
