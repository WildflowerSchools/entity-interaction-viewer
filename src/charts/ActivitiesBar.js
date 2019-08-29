import React from 'react';
import { ResponsiveBar as BarChart } from '@nivo/bar';
import { isUndefined, toTitleCase } from '../utils';
import { theme } from './config';

const tooltip = d => (
  <div className="wfs-tooltip">
    {d.data.activity}: <strong>{d.value} minute{d.value === 1 ? '' : 's'}</strong>
  </div>
)

function ActivitiesBar({data}) {

  let maxLength = 0;

  data = data.interactions.reduce((result, row) => {

    const activity = toTitleCase(row.activity.trim()) || 'No Activity';
    const entry = result.find(o => o.activity === activity);

    if (isUndefined(entry)) {
      result.push({
        activity: activity,
        minutes: 1
      });
    } else {
      entry.minutes++;
    }

    maxLength = Math.max(maxLength, activity.length);
    return result;

  }, []).sort((a, b) => a.minutes < b.minutes ? -1 : 1);

  // TODO: perhaps a better way to do this? Dependent on chart theme fontSize
  const marginLeft = 50 + (maxLength * 4.5);

  return (
    <div className="wfs-chart" style={{height:data.length * 35}}>
      <BarChart
        data={data}
        keys={['minutes']}
        indexBy="activity"
        tooltip={tooltip}
        layout="horizontal"
        colors={{scheme: 'red_yellow_green'}}
        colorBy="value"
        theme={theme}
        margin={{top: 0, right: 0, bottom: 45, left: marginLeft}}
        padding={0.1}
        animate={false}
        enableGridX={true}
        enableGridY={true}
        labelSkipWidth={30}
        axisBottom={{
          tickSize: 0,
          tickPadding: 0,
          tickRotation: 0,
          legend: 'Minutes per activity',
          legendPosition: 'middle',
          legendOffset: 35,
        }}
      />
    </div>
  )
}

export default ActivitiesBar;