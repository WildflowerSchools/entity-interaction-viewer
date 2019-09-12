import { useState , useCallback } from 'react';

export default function useToggle(initial = false) {
  const [ on, setState ] = useState(initial);
  const toggle = useCallback(() => setState(on => !on), []);
  return [ on, toggle ];
};