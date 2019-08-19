import React from 'react';
import config from './config';
import { isEmpty, toTitleCase } from '../utils';

function PieChart({type, data}) {

  const total = data[type].length;

  data = data[type].reduce((result, d) => {
    let key = d.level;
    if (isEmpty(key)) key = 'NO_DATA';
    result[key] || (result[key] = 0);
    result[key]++;
    return result;
  }, {});

  data = Object.entries(data).map(d => ({
    // TODO: need to fail silently when a config key isn't found!
    label: config[type + 's'][d[0]].label,
    level: d[0],
    value: d[1],
    percent: +(d[1] / total).toFixed(4)
  }));

  return (
    <div>
      <code>{toTitleCase(type)} breakdown over {total} minutes</code>
      {window.debug(data)}
    </div>
  )
}

export default PieChart;