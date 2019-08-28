import React from 'react';
import config from './config';
import { isEmpty, clone } from '../utils';

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

export default Timeline;