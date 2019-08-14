import { useState, useEffect, useCallback } from 'react';

export default function useAsync(fn) {

  const [ state, setState ] = useState({
    isLoading: true,
    error: null,
    data: null
  });

  const callback = useCallback(fn);

  useEffect(() => {

    let mounted = true;

    callback()
      .then(data => {
        if (mounted) setState({data, isLoading: false});
      })
      .catch(error => {
        if (mounted) setState({error, isLoading: false});
      });

    return () => (mounted = false);

  }, [callback]);

  function setData(data) {
    setState({...state, data});
  }

  return {...state, setData};
};