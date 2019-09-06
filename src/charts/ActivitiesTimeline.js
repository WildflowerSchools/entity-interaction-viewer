import React from 'react';
import config from './config';
import { isEmpty, clone, toTitleCase } from '../utils';

function TimelineItem({
  as: Element = 'div',
  data
}) {

  const { activity, date, minutes, ...behaviors } = data;

  return (
    <Element>
      {activity} <small style={{color:'#CCC'}}> at {date.getFullYear()} for {minutes} minutes</small>
      {/* {window.debug(behaviors)} */}
    </Element>
  )
}

function Timeline({data}) {

  // debug queried data
  // return <>{window.debug(data.interactions)}</>;

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

  data = data.interactions.reduce((result, row, i) => {

    const activity = toTitleCase(row.activity.trim());
    // TODO: what to dispally for emtpy activity strings?
    if (isEmpty(activity)) return result;

    let entry = result[result.length - 1];

    if (isEmpty(entry) || entry.activity !== activity) {
      // new interaction, initialize with defaults
      // need to deep clone behaviors object or
      // else our levels will all be the same
      entry = Object.assign({
        activity,
        date: new Date(row.at),
        minutes: 0
      }, clone(behaviorsObject));

      result.push(entry);
    }

    entry.minutes++;

    behaviors.forEach(behavior => {
      const level = row[behavior];
      entry[behavior][level]++;
    });

    return result;

  }, [])

  // debug parsed data
  // return <>{window.debug(data)}</>;

  return (
    <ol>
      {data.map((row, index) => <TimelineItem key={index} as="li" data={row} />)}
      <li>{window.debug(data)}</li>
    </ol>
  )
}

export default Timeline;