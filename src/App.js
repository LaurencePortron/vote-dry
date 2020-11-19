import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LoginContextProvider from './contexts/LoginContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <LoginContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={SignIn}>
            {/* {currentLogin ? <Redirect to='/dashboard' /> : null} */}
          </Route>
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </LoginContextProvider>
  );
}

export default App;
