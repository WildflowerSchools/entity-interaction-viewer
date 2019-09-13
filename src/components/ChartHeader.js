import React from 'react';
import { isEmpty, format } from '../utils';

function ChartHeader({student, dates}) {
  const [ startDate, endDate ] = dates;
  // <span>{dates[0].toString()}</span>

  return (
    <header className="wfs-chart-header">
      <strong>{student}</strong>
      <span>August 1, 2019 - August 15, 2019</span>
    </header>
  );
}

export default ChartHeader;