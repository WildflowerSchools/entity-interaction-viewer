import { useState, useLayoutEffect } from 'react';

export default function useComponentSize(ref) {

  const [ size, setSize ] = useState({});

  function resize() {
    if (ref && ref.current) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    }
  }

  useLayoutEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return size;
};