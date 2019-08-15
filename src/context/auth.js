import React, { useContext } from 'react';
// import { WebAuth } from 'auth0-js';
import { isEmpty } from '../utils';
import { useAsync } from '../hooks';

// const auth0 = new WebAuth({
//   clientID: process.env.AUTH0_CLIENT,
//   domain: process.env.AUTH0_DOMAIN,
//   audience: process.env.AUTH0_AUDIENCE,
//   redirectUri: process.env.AUTH0_CALLBACK,
//   responseType: 'token id_token'
// });

async function init() {

  let token = localStorage.getItem('token');
  if (!token) return Promise.resolve(null);

  return await new Promise(resolve => {
    const delay = 0; // 500 + Math.random() * 2500;
    setTimeout(() => resolve(Math.random()), delay);
  });
}

const Context = React.createContext();

function AuthProvider(props) {

  const {
    data,
    error,
    isLoading,
    setData
  } = useAsync(init);

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    // TODO: caputure exception in sentry?
    return <div>{window.debug(error)}</div>
  }

  function login() {
    // auth0.authorize();
    return new Promise((resolve, reject) => {
      const delay = 200 + Math.random() * 1800;
      setTimeout(() => {
        localStorage.setItem('token', Math.random());
        setData(true);
        resolve();
      }, delay);
    });
  }

  function logout() {
    localStorage.removeItem('token');
    setData(null);
  }

  return (
    <Context.Provider value={{isAuthed: !isEmpty(data), login, logout}} {...props} />
  );
}

function useAuth() {
  const context = useContext(Context);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}

export { AuthProvider, useAuth }