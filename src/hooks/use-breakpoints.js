import { useLayoutEffect } from 'react';

export default function useBreakpoints(ref, breakpoints) {

  const regex = new RegExp(/(wfs-size-)[.\S]+/, 'g');

  // convert breakpoints to an array of [key, value] pairs, sorted by width
  breakpoints = Object.keys(breakpoints)
    .map(key => [key, breakpoints[key]])
    .sort((a, b) => b[1] - a[1]);

  function getCurrentBreakpoint(width) {
    const breakpoint = breakpoints.find(b => width >= b[1]);
    return breakpoint ? breakpoint[0] : breakpoints[breakpoints.length - 1][0];
  }

  useLayoutEffect(() => {

    function resize() {
      const el = ref.current;
      const className = `wfs-size-${getCurrentBreakpoint(el.offsetWidth)}`;
      if (el.classList.contains(className)) return;

      const match = el.className.match(regex);
      match && el.classList.remove(match[0]);
      el.classList.add(className);
    }

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);

  }, [ref]);
};