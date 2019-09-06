import React from 'react';
import ActivitiesBar from './ActivitiesBar';
import ActivitiesTimeline from './ActivitiesTimeline';
import AllocationPie from './AllocationPie';
import config from './config';

// TODO: rename these to something more descriptive
const charts = [{
  name: 'Activities',
  component: ActivitiesBar
}, {
  name: 'Timeline',
  component: ActivitiesTimeline
}, {
  name: 'Concentration',
  component: props => <AllocationPie {...props} type="concentration" />
}, {
  name: 'Engagement',
  component: props => <AllocationPie {...props} type="engagement" />
}];

export default charts;
export { config };