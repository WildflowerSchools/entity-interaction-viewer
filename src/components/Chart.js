import React, { useEffect, useRef } from 'react';
import { css } from 'emotion';
import { Chart as Frappe } from 'frappe-charts/dist/frappe-charts.min.esm';
import '../utils';

const styles = css`
  /* background: #CCC; */
`;

function Chart({data}) {

  const ref = useRef();
  const chart = useRef();

  useEffect(() => {

    if (chart.current) {
      chart.current.update(data);
      return;
    }

    chart.current = new Frappe(ref.current, {
      type: 'bar',
      height: 600,
      colors: ['#7cd6fd', '#743ee2', '#ff4490', '#c0ffee'],
      data
    });

  }, [data]);

  return (
    <div className={styles} ref={ref}></div>
  );
}

export default Chart;