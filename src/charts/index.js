import React from 'react';
import Activities from './Activities';
import Interactions from './Interactions';
import Timeline from './Timeline';
import PieChart from './PieChart';
import config from './config';

export { config };

export default [{
  label: 'Time on Activities',
  value: 'activities',
  component: Activities
}, {
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
  component: props => <PieChart type="concentration" {...props} />
}, {
  label: 'Engagement',
  value: 'engagement',
  component: props => <PieChart type="engagement" {...props} />
}];