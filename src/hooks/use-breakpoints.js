import { useLayoutEffect } from 'react';

export default function useBreakpoints(ref, breakpoints) {

  // sort provided breakpoints as [key, value] pairs, which may come from embed options
  breakpoints = Object.keys(breakpoints)
    .map(key => [key, breakpoints[key]])
    .sort((a, b) => b[1] - a[1]);

  // regular expression to match app element className against,
  // just in case the host page added additional classes for whatever reason
  const regex = new RegExp(/(wfs-size-)[.\S]+/, 'g');

  function getCurrentBreakpoint(width) {
    const breakpoint = breakpoints.find(b => width >= b[1]);
    return breakpoint ? breakpoint[0] : breakpoints[breakpoints.length - 1][0];
  }

  useLayoutEffect(() => {

    function resize() {
      const el = ref.current.parentElement;
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