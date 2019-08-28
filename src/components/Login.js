import React, { useState } from 'react';
import { useAuth } from '../context/auth';
import Button from './Button';

function Login(props) {

  const [ isLoading, setLoading ] = useState();
  const { login } = useAuth();

  function onClick(event) {
    setLoading(true);
    login().catch(() => setLoading(false));
  }

  return (
    <div className="wfs-login">
      <Button onClick={onClick}>{isLoading ? 'Loading' : 'Login'}</Button>
    </div>
  );
}

export default Login;