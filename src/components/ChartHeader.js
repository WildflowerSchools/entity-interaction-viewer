import React from 'react';
import { isEmpty, format } from '../utils';

function ChartHeader(props) {

  const dates = [];
  props.dates[0] && dates.push(format('MMMM D, YYYY', props.dates[0]));
  props.dates[1] && dates.push(format('MMMM D, YYYY', props.dates[1]));

  if (props.dates[0] && isEmpty(props.dates[1])) {
    dates[1] = 'Today';
  }

  return (
    <header className="wfs-chart-header">
      <strong>{props.student}</strong>
      {dates.length !== 0 && <span>{dates.join(' - ')}</span>}
    </header>
  );
}

export default ChartHeader;