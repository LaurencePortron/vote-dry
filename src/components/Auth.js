import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Login } from '../context/LoginContext';

const Auth = (props) => {
  const { currentLogin, setIsAuth, isAuth } = useContext(Login);

  useEffect(() => {
    const { history } = props;

    if (currentLogin.length < 0) {
      history.push('/signin');
    } else {
      setIsAuth(true);
    }
  }, []);

  const { children } = props;

  if (isAuth === false) {
    return <div>loading....</div>;
  }
  return <div>{children}</div>;
};

export default withRouter(Auth);
