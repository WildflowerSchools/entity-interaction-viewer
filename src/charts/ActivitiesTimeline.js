import React, { useState , useCallback } from 'react';
import { interactions } from './config';
import { isEmpty, clone, toTitleCase } from '../utils';

export function useToggle(initial = false) {
  const [ on, setState ] = useState(initial);
  const toggle = useCallback(() => setState(on => !on), []);
  return [ on, toggle ];
};

function TimelineItem({
  as: Element = 'div',
  data
}) {

  const [ isExpanded, toggle ] = useToggle();
  const { activity, date, minutes, ...behaviors } = data;

  const h = date.getHours();
  const m = String(date.getMinutes()).padStart(2, '0');
  const time = `${h % 12}:${m} ${h >= 12 ? 'pm' : 'am'}`;

  const content = Object.entries(behaviors).map(([behavior, levels], index) => (
    <div key={index} style={{paddingLeft:20}}>
      <h4>{behavior}</h4>
      <div style={{display: 'flex'}}>
        {Object.keys(levels).map(key => (
          <div key={key} style={{backgroundColor: interactions.levels[key].color, width: `${levels[key] / minutes * 100}%`, height: 5}}></div>
        ))}
      </div>
    </div>
  ))

  return (
    <Element className="wfs-timeline-item">
      <h3 onClick={toggle} style={{cursor: 'pointer'}}>{activity}</h3>
      <small style={{color:'#999'}}> {time} for {minutes} minutes</small>
      <div style={{display: isExpanded ? 'block' : 'none'}}>
        {content}
      </div>
    </Element>
  )
}

function ActivitiesTimeline({
  student,
  dates,
  data
}) {

  // debug queried data
  // return <>{window.debug(data.interactions)}</>;

  const levels = Object.keys(interactions.levels);
  const behaviors = Object.keys(interactions.behaviors);

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
      !isEmpty(level) && entry[behavior][level]++;
    });

    return result;

  }, [])

  // debug parsed data
  // return <>{window.debug(student)}</>;

  const content = data.map((row, index) => {
    // TODO: display date headings if this query spans multiple days
    // will be helpful to see real data and revisit
    const key = `${student}-${index}`;
    return <TimelineItem key={key} as="li" data={row} />
  });

  return (
    <ol className="wfs-timeline">
      {content}
    </ol>
  )
}

export default ActivitiesTimeline;