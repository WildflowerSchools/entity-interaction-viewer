import React from 'react';
import { ResponsiveBar as BarChart } from '@nivo/bar';
import { isUndefined, toTitleCase } from '../utils';

function Activities({student, data}) {

  let activityMaxLength = 0;

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

    activityMaxLength = Math.max(activityMaxLength, activity.length);
    return result;

  }, []).sort((a, b) => a.minutes < b.minutes ? -1 : 1);

  const marginLeft = 12 + (activityMaxLength * 5);

  return (
    <div className="wfs-chart">
      {/* <h2>{student.name}</h2> */}
      <div style={{height:data.length * 35}}>
        <BarChart
          data={data}
          keys={['minutes']}
          indexBy="activity"
          layout="horizontal"
          colors={{scheme: 'red_yellow_green'}}
          colorBy="value"
          margin={{top: 0, right: 0, bottom: 30, left: marginLeft}}
          padding={0.1}
          animate={false}
          enableGridX={true}
          enableGridY={true}
          labelSkipWidth={20}
          axisBottom={{
            tickSize: 0,
            tickPadding: 0,
            tickRotation: 0,
            legend: 'Minnutes',
            legendPosition: 'middle',
            legendOffset: 16
          }}
          tooltip={d => (
            <div className="wfs-tooltip">
              {d.data.activity} for <strong>{d.value} minute{d.value === 1 ? '' : 's'}</strong>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default Activities;