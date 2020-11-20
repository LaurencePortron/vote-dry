import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Login } from '../context/LoginContext';
import axios from 'axios';
import '../styles/Login.scss';

const useTextFieldStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

const SignIn = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { currentLogin, setCurrentLogin } = useContext(Login);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validation();
    if (isValid) {
      let datas = {
        username,
        password,
      };

      setUsername('');
      setPassword('');
      setUsernameError('');
      setPasswordError('');

      axios
        .post('http://192.168.68.111:5000/login', datas)
        .then((res) => setCurrentLogin(res.data))
        .then(() =>
          currentLogin.isProducer
            ? props.history.push('/producer')
            : props.history.push('/consumer')
        )
        .catch((err) => console.log(err));
    }
  };

  const validation = () => {
    if (!username) {
      setUsernameError('Please, enter an username');
    }
    if (!password) {
      setPasswordError('Please, enter a password');
    }
    if (username && password) {
      return true;
    }
    return false;
  };

  return (
    <div className='signin-wrapper'>
      <h1>Sign in</h1>
      <form
        className={useTextFieldStyles().root}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <div className='username'>
          <TextField
            error={usernameError ? true : false}
            label='Username'
            placeholder={usernameError}
            variant='outlined'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className='password'>
          <TextField
            error={passwordError ? true : false}
            type='password'
            label='Password'
            placeholder={passwordError}
            variant='outlined'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div>
          <Button variant='contained' type='submit'>
            Sign in
          </Button>
        </div>
      </form>

      <p>New to Vote Dry ?</p>
      <Link to={`/signup`}>
        <Button variant='contained'>Create your account</Button>
      </Link>
    </div>
  );
};

export default SignIn;
