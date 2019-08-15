import React from 'react';
// import dayjs from 'dayjs';
import { ResponsiveBar as BarChart } from '@nivo/bar';
import { isEmpty } from '../utils';
import config from './config';

function pluck(key) {
  return array => Array.from(new Set(array.map(o => o[key])));
};
// const activities = pluck('activity')(data.interactions).filter(s => !isEmpty(s));
// import engagement from './engagement';
// export default [{
//   label: 'Engagement',
//   value: 'engagement',
//   render: engagement
// }, {
//   label: 'Timeline',
//   value: 'timeline',
//   render: () => console.log('render timeline chart')
// }];

function Interactions({data}) {

  function createBehaviors() {
    return Object.assign({}, behaviorsObject);
  }

  function createLevels() {
    return Object.assign({}, levelsObject);
  }

  const levels = Object.keys(config.interactions.levels);
  const behaviors = Object.keys(config.interactions.behaviors);

  const levelsObject = levels.reduce((result, key) => {
    result[key] = 0;
    return result
  }, {});

  const behaviorsObject = behaviors.reduce((result, key) => {
    result[key] = createLevels();
    return result;
  }, {});

  data = data.interactions.reduce((result, row) => {

    const key = row.activity.trim();
    if (isEmpty(key)) return result;

    const activity = result[key] || (result[key] = createBehaviors());

    Object.keys(row).forEach(key => {
      if (behaviors.includes(key)) activity[key][row[key]]++;
    });

    return result;

  }, {});

  return (
    <React.Fragment>
      {window.debug(data)}
      <div style={{height:500}}>
        <BarChart
          data={[]}
          indexBy="at"
          colors={{scheme: 'purple_blue_green'}}
        />
      </div>
    </React.Fragment>
  )
}

function Concentration({data}) {

  const total = data.concentration.length;

  data = data.concentration.reduce((result, d) => {
    let key = d.level;
    if (isEmpty(key)) key = 'NO_DATA';
    result[key] || (result[key] = 0);
    result[key]++;
    return result;
  }, {});

  data = Object.entries(data).map(d => ({
    label: config.concentrations[d[0]].label,
    level: d[0],
    value: d[1],
    display: `${d[1]} minutes`,
    percent: d[1] / total
  }));

  return (
    <div>
      <code>Concentration breakdown over {total} minutes</code>
      {window.debug(data)}
    </div>
  )
}

function Engagement({data}) {

  const total = data.engagement.length;

  data = data.engagement.reduce((result, d) => {
    let key = d.level;
    if (isEmpty(key)) key = 'NO_DATA';
    result[key] || (result[key] = 0);
    result[key]++;
    return result;
  }, {});

  data = Object.entries(data).map(d => ({
    label: config.engagements[d[0]].label,
    level: d[0],
    value: d[1],
    display: `${d[1]} minutes`,
    percent: d[1] / total
  }));

  return (
    <div>
      <code>Engagement breakdown over {total} minutes</code>
      {window.debug(data)}
    </div>
  )
}

export default [{
  label: 'Activities / Behaviors / Levels',
  value: 'activities-interactions',
  component: Interactions
}, {
  label: 'Concentration',
  value: 'concentration',
  component: Concentration
}, {
  label: 'Engagement',
  value: 'engagement',
  component: Engagement
}];