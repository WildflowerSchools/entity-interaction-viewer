import engagement from './engagement';

export default [{
  label: 'Engagement',
  value: 'engagement',
  render: engagement
}, {
  label: 'Timeline',
  value: 'timeline',
  render: () => console.log('render timeline chart')
}];