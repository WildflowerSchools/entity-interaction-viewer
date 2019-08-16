import React from 'react';
// import dayjs from 'dayjs';
import { ResponsiveBar as BarChart } from '@nivo/bar';
import { isEmpty, clone, pluck } from '../utils';
import config from './config';

// - @7:16am Carol chose Pink Tower, influenced by Alize. She worked in it for 45 minutes with Alice and Kelly. She independently put it away.
// - @10:56am Slippin’ Jimmy chose The Golden Beads independently. He worked on it for 128 minutes alone. He put it away after some encouragement.
// [{
//   activity: "Easel",
//   duration: 3456,
//   at: "7:16 am",
//   oriented: {
//     NOT: 24,
//     PARTIAL: 13,
//     COMPLETELY: 30
//   },
//   careful: {
//     NOT: 9,
//     PARTIAL: 53,
//     COMPLETELY: 21
//   }
// }]

function Timeline({data}) {

  const levels = Object.keys(config.interactions.levels);
  const behaviors = Object.keys(config.interactions.behaviors);

  const levelsObject = levels.reduce((result, key) => {
    result[key] = 0;
    return result
  }, {});

  const behaviorsObject = behaviors.reduce((result, key) => {
    result[key] = clone(levelsObject);
    return result;
  }, {});

  // TODO: is this necessary? Will there every be empty strings for activity?
  data = data.interactions.filter(row => !isEmpty(row.activity));

  data = data.reduce((result, row, i) => {

    const activity = row.activity.trim();
    const prevEntry = result[result.length - 1];

    if (prevEntry && prevEntry.activity === activity) {
      // console.log('existing entry for ', activity);
    } else {
      const newEntry = {};
      newEntry.activity = row.activity;
      newEntry.at = row.at;
      Object.assign(newEntry, behaviorsObject);
      result.push(newEntry);
    }

    return result;

  }, [])

  return (
    <div>{window.debug(data)}</div>
  )
}

function Interactions({data}) {

  const levels = Object.keys(config.interactions.levels);
  const behaviors = Object.keys(config.interactions.behaviors);

  const levelsObject = levels.reduce((result, key) => {
    result[key] = 0;
    return result
  }, {});

  const behaviorsObject = behaviors.reduce((result, key) => {
    result[key] = clone(levelsObject);
    return result;
  }, {});

  // TODO: is this necessary? Will there every be empty strings for activity?
  // data = data.interactions.filter(row => !isEmpty(row.activity));

  data = data.interactions.reduce((result, row) => {

    const key = row.activity.trim();
    if (isEmpty(key)) return result;
    const entry = result[key] || (result[key] = clone(behaviorsObject));

    behaviors.forEach(behavior => {
      const level = row[behavior];
      if (!isEmpty(level)) entry[behavior][level]++;
    });

    return result;

  }, {});

  return (
    <React.Fragment>
      {window.debug(data)}
      {/* <div style={{height:500}}>
        <BarChart
          data={[]}
          indexBy="at"
          colors={{scheme: 'purple_blue_green'}}
        />
      </div> */}
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
    // TODO: need to fail silently when a config key isn't found!
    label: config.concentrations[d[0]].label,
    level: d[0],
    value: d[1],
    percent: +(d[1] / total).toFixed(4)
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
    // TODO: need to fail silently when a config key isn't found!
    // getConcentration(key) ... getConcentration()
    label: config.engagements[d[0]].label,
    level: d[0],
    value: d[1],
    percent: +(d[1] / total).toFixed(4)
  }));

  return (
    <div>
      <code>Engagement breakdown over {total} minutes</code>
      {window.debug(data)}
    </div>
  )
}

export {config};

export default [{
  label: 'Timeline',
  value: 'timeline',
  component: Timeline
}, {
  label: 'Interactions',
  value: 'interactions',
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