import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import '../styles/Login.scss';
import axios from 'axios'

const useTextFieldStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 400,
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

const SignUp = () => {
  const [secretCode, setSecretCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmedPassword] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [secretCodeError, setSecretCodeError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmedPasswordError, setConfirmedPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [cityError, setCityError] = useState('');
  const [isProductor, setIsProductor] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validation();
    if (password === confirmPassword) {
      if (isValid) {
        let json = {
          secretCode,
          username,
          password,
          confirmPassword,
          email,
          city,
          isProductor,
        };
        setSecretCode('');
        setUsername('');
        setPassword('');
        setConfirmedPassword('');
        setEmail('');
        setCity('');
        setSecretCodeError('');
        setUsernameError('');
        setPasswordError('');
        setConfirmedPasswordError('');
        setEmailError('');
        setCityError('');
      }
      axios
      .get

    } else console.log('bad password');
  };

  const validation = () => {
    if (!secretCode) {
      setSecretCodeError('Please, enter the secret code');
    }
    if (!username) {
      setUsernameError('Please, enter a username');
    }
    if (!password) {
      setPasswordError('Please, enter a password');
    }
    if (!confirmPassword) {
      setConfirmedPasswordError('Please, enter a password');
    }
    if (!email) {
      setEmail('Please, enter a password');
    }
    if (!city) {
      setCity('Please, enter a password');
    }
    if (
      secretCode &&
      username &&
      password &&
      confirmPassword &&
      email &&
      city
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className='signup-wrapper'>
      <h1>Sign up</h1>
      <form className={useTextFieldStyles().root} noValidate autoComplete='off'>
        <div className='secret-code'>
          <TextField
            value={secretCode}
            error={secretCodeError ? true : false}
            type='text'
            label='Secret Code'
            placeholder='Enter the secret code'
            // helperText='Incorrect entry.'
            variant='outlined'
            onChange={(event) => setSecretCode(event.target.value)}
          />
        </div>
        <div className='username'>
          <TextField
            value={username}
            error={usernameError ? true : false}
            label='Username'
            placeholder='Enter your username'
            // helperText='Incorrect entry.'
            variant='outlined'
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className='password'>
          <TextField
            value={password}
            error={passwordError ? true : false}
            type='password'
            label='Password'
            placeholder='Enter your password'
            // helperText='Incorrect entry.'
            variant='outlined'
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className='confirm-password'>
          <TextField
            value={confirmPassword}
            error={confirmedPasswordError ? true : false}
            type='password'
            label='Confirm your password'
            placeholder='Confirm your password'
            // helperText='Incorrect entry.'
            variant='outlined'
            onChange={(event) => setConfirmedPassword(event.target.value)}
          />
        </div>
        <div className='email'>
          <TextField
            value={email}
            error={emailError ? true : false}
            type='email'
            label='Email'
            placeholder='Enter your email'
            // helperText='Incorrect entry.'
            variant='outlined'
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className='city'>
          <TextField
            value={city}
            error={cityError ? true : false}
            type='text'
            label='City'
            placeholder='Enter your city'
            // helperText='Incorrect entry.'
            variant='outlined'
            onChange={(event) => setCity(event.target.value)}
          />
        </div>

        <FormControl component='fieldset'>
          <FormLabel component='legend'>I'm a</FormLabel>
          <RadioGroup aria-label='gender' name='gender1'>
            <FormControlLabel
              value='producer'
              control={<Radio />}
              label='Producer'
              onChange={(event) => setIsProductor(true)}
            />
            <FormControlLabel
              value='customer'
              control={<Radio />}
              label='Customer'
              onChange={(event) => setIsProductor(false)}
            />
          </RadioGroup>
        </FormControl>
        <div className='signup-button'>
          <Button variant='contained' onClick={handleSubmit}>
            Sign up
          </Button>
        </div>
      </form>

      <Link to={`/`}>
        <Button variant='contained'>Already have an account ? Sign-in</Button>
      </Link>
    </div>
  );
};

export default SignUp;
