import React from 'react';
import { ResponsivePie as PieChart } from '@nivo/pie';
import config, { theme } from './config';
import { isEmpty } from '../utils';

const tooltip = d => (
  <div className="wfs-tooltip">
    {d.label}: <strong>{d.value} minute{d.value === 1 ? '' : 's'}</strong>
  </div>
)

function AllocationPie({type, data}) {

  const total = data[type].length;
  const typeConfig = config[type + 's'];

  data = data[type].reduce((result, d) => {
    let key = d.level;
    if (isEmpty(key)) key = 'NO_DATA';
    result[key] || (result[key] = 0);
    result[key]++;
    return result;
  }, {});

  data = Object.entries(data).map(d => {
    // TODO: need to fail silently when a config key isn't found
    const label = typeConfig[d[0]].label;
    return {
      id: label,
      label: label,
      level: d[0],
      value: d[1],
      percent: `${+(d[1] / total).toFixed(4) * 100}%`
    };
  });

  // return ( // data debugging
  //   <React.Fragment>
  //     <p>{type} breakdown over {total} minutes</p>
  //     {window.debug(data)}
  //   </React.Fragment>
  // );

  return (
    <div className="wfs-chart" style={{height:450}}>
      <PieChart
        data={data}
        tooltip={tooltip}
        theme={theme}
        // colors={{scheme: 'red_yellow_green'}}
        colors={d => typeConfig[d.level].color}
        margin={{top: 30, right: 0, bottom: 40, left: 0}}
        innerRadius={0.33}
        cornerRadius={3}
        padAngle={0.5}
        radialLabel="label"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={10}
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        sliceLabel="percent"
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#FFF"
        legends={[{
          anchor: 'bottom-left',
          direction: 'column',
          translateX: 5,
          translateY: 5,
          itemWidth: 150,
          itemHeight: 25,
          itemTextColor: '#808080',
          symbolSize: 18,
          symbolShape: 'circle',
        }]}
      />
    </div>
  )
}

export default AllocationPie;