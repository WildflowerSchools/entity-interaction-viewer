import React, { useState, useEffect, useContext } from 'react';

const Context = React.createContext();

function QueryParamsProvider(props) {

  const params = new URLSearchParams(window.location.search);
  // params.set('test', 123);
  // params.has('foo') || params.append('foo', 4);
  // params.sort();
  // console.log(params.toString())
  // params.has('s') && console.log(params.get('s').split('.').map(Number))
  // window.history.replaceState({}, '', `${window.location.pathname}?${params}`);

  const [ state, setState ] = useState({
    c: null, // classroom id
    d: null, // start and end dates
    s: null, // all students, list of student ids or single student id
    v: null  // chart view
  });

  function setParams(value) {
    Object.entries(value).forEach(param => params.set(param[0], param[1]));
    params.sort();
    window.history.pushState({}, '', `${window.location.pathname}?${params}`);
    const newState = Object.assign({}, state, value);
    setState(newState);
  }

  useEffect(() => {

    function popstate(event) {
      event.preventDefault();
      console.log('popstate');
      // for(var pair of params.entries()) console.log(pair)
    }

    window.addEventListener('popstate', popstate);
    return () => window.removeEventListener('popstate', popstate);

  }, []);

  return (
    <Context.Provider value={{params: state, setParams}} {...props} />
  );
}

function useQueryParams() {
  const context = useContext(Context);
  if (!context) throw new Error('useQueryParams must be used within a QueryParamsProvider');
  return context;
}

export { QueryParamsProvider, useQueryParams }