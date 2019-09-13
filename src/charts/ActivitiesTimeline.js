import React from 'react';
import { interactions } from './config';
import { useToggle } from '../hooks';
import { isEmpty, format, clone, toTitleCase } from '../utils';

function TimelineDay(props) {
  return <div className="wfs-timeline-day">{format('DDDD, MMMM D, YYYY', props.day)}</div>
}

function TimelineEntry(props) {

  const [ isExpanded, toggle ] = useToggle();
  const { activity, date, minutes, ...behaviors } = props.data;

  // TODO: update utils/format to accomodate additional patterns (A, a / am, pm) and use here
  // https://momentjs.com/docs/#/displaying/
  const h = date.getHours();
  const m = String(date.getMinutes()).padStart(2, '0');
  const time = `${h % 12}:${m} ${h >= 12 ? 'pm' : 'am'}`;

  const details = Object.entries(behaviors).map(([behavior, levels]) => (
    <li key={behavior} className="wfs-timeline-entry-behavior">
      <span>{toTitleCase(behavior)}</span>
      <div className="wfs-timeline-entry-levels">
        {Object.keys(levels).map(key => {
          const width = levels[key] / minutes * 100;
          const color = interactions.levels[key].color;
          return width ? <div key={key} style={{width: `${width}%`,backgroundColor: color}} /> : null
        })}
      </div>
    </li>
  ));

  return (
    <div className="wfs-timeline-entry">
      <header onClick={toggle} className={`wfs-timeline-entry-header${isExpanded ? ' wfs-timeline-entry-header--is-expanded' : ''}`}>
        <div>{activity}</div>
        <time>{time}</time> <span>{minutes} minute{minutes === 1 ? '' : 's'}</span>
      </header>
      <ul className="wfs-timeline-entry-details" style={{display: isExpanded ? 'block' : 'none'}}>
        {details}
      </ul>
    </div>
  );
}

function ActivitiesTimeline({student, dates, data}) {

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
    // TODO: what to display for empty activity strings?
    if (isEmpty(activity)) return result;

    let entry = result[result.length - 1];

    if (isEmpty(entry) || entry.activity !== activity) {

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
  // return <>{window.debug(data)}</>;

  const keyPrefix = `${student}-${format('YYYYMMDD', dates[0])}-${format('YYYYMMDD', dates[1])}`;
  let currentDay; // format('YYYY-MM-DD', data[0].date);

  const content = data.reduce((result, row, index) => {

    const day = format('YYYY-MM-DD', row.date);

    if (day !== currentDay) {
      currentDay = day;
      return result.concat(<TimelineDay key={day} day={day} />);
    }

    const key = `${keyPrefix}-${index}`;
    return result.concat(<TimelineEntry key={key} data={row} />);

  }, []);

  return (
    <div className="wfs-timeline">
      {content}
    </div>
  )
}

export default ActivitiesTimeline;