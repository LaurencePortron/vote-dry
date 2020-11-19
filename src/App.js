import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
