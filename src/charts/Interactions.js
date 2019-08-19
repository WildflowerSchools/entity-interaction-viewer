import React from 'react';
import config from './config';
import { isEmpty, clone } from '../utils';

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
    </React.Fragment>
  )
}

export default Interactions;