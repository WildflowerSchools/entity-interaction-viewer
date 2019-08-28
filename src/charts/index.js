import React from 'react';
import ActivitiesBar from './ActivitiesBar';
import ActivitiesTimeline from './ActivitiesTimeline';
import AllocationPie from './AllocationPie';
import Interactions from './Interactions';
import config from './config';

export { config };

// TODO: rename these to something more descriptive
export default [{
  name: 'Activities',
  component: ActivitiesBar
}, {
  name: 'Timeline',
  component: ActivitiesTimeline
}, {
  name: 'Interactions',
  component: Interactions
}, {
  name: 'Concentration',
  component: props => <AllocationPie type="concentration" {...props} />
}, {
  name: 'Engagement',
  component: props => <AllocationPie type="engagement" {...props} />
}];