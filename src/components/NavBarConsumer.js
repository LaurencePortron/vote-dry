import React, { useContext } from 'react';
import './NavBarConsumer.scss';

import { NavLink } from 'react-router-dom';
import { Login } from '../context/LoginContext';
import { AiOutlineLogout } from 'react-icons/ai';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './NavBarConsumer.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#233559',
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBarConsumer = () => {
  const classes = useStyles();
  const { currentLogin, setCurrentLogin } = useContext(Login);

  return (
    <header>
      <div className={classes.root}>
        <AppBar className={classes.root} position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              <NavLink to='/consumer'>Vote Wet</NavLink>
            </Typography>
            <Button>
              <Typography
                style={{ color: 'white' }}
              >{`Logged as ${currentLogin.username}`}</Typography>
            </Button>

            <Typography>
              <NavLink to='/' style={{ color: 'white' }}>
                <AiOutlineLogout
                  style={{ fontSize: '20px' }}
                  onClick={() => setCurrentLogin([])}
                />
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
};

export default NavBarConsumer;
