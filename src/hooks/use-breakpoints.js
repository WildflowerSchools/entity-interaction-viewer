import { useLayoutEffect } from 'react';

export default function useBreakpoints(ref, breakpoints) {

  // regular expression to remove our breakpoint classes,
  // would need to be dynamic if custom prefix option is enabled
  const regex = new RegExp(/(wfs-size-)[.\S]+/, 'g');

  // convert breakpoints to an array of [key, value] pairs, sorted by width
  breakpoints = Object.keys(breakpoints)
    .map(key => [key, breakpoints[key]])
    .sort((a, b) => b[1] - a[1]);

  function getCurrentBreakpoint(width) {
    const found = breakpoints.find(b => width >= b[1]);
    return found ? found[0] : breakpoints[breakpoints.length - 1][0];
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