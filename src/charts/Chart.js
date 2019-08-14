import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import engagement from './engagement';

const charts = {
  engagement
};

function Chart({type, data, width, height}) {

  const ref = useRef();

  useEffect(() => {

    charts[type]({
      svg: d3.select(ref.current),
      data,
      width,
      height
    });

  }, [ref.current])

  return <svg ref={ref} />
}

export default Chart;