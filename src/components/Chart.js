import React, { useEffect, useRef } from 'react';
import { select } from 'd3';
import charts from '../charts';

function Chart({type, data, width, height}) {

  const ref = useRef();
  const chart = charts.find(c => c.value === type);

  useEffect(() => {

    chart.render({
      svg: select(ref.current),
      data,
      width,
      height
    });

  }, [ref.current])

  return (
    <div className="wfs-chart">
      <svg ref={ref} />
    </div>
  );
}

export default Chart;