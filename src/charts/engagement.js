import * as d3 from 'd3';
// import { random } from '../utils';
import { engagements } from './config';

function parse(data) {

  data = data[0].engagement.reduce((result, d) => {
    result[d.level] || (result[d.level] = 0)
    result[d.level]++;
    return result;
  }, {});

  return Object.entries(data).map(d => ({
    level: d[0],
    value: d[1],
    label: engagements[d[0]].label
  }));
}

export default function({svg, data, width, height}) {

  data = parse(data);
  height = Math.min(width, 500)

  const sum = d3.sum(data, d => d.value);
  const center = {x: width / 2, y: height / 2};
  const radius = Math.min(width, height) / 2.5;

  // const color = d3.scaleOrdinal()
  //   .domain(data.map(d => d.level))
  //   .range(['#F00', '#0F0', '#D5E9E5', '#12882A', '#30DAAB', '#00F'])

  const arcs = (d3.pie()
    .value(d => d.value)
    // .sortValues(() => random() > 0.5 ? -1 : 1)
    .padAngle(0.005)
  )(data);

  const arc = d3.arc()
    .cornerRadius(3)
    .outerRadius(radius - 1)
    .innerRadius(radius * 0.25);

  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('perserveAspectRatio', 'xMidYMid')
    .append('g')
      .attr('transform', `translate(${center.x}, ${center.y})`)
      .selectAll('path')
      .data(arcs)
      .join('path')
        .attr('d', arc)
        .attr('fill', d => engagements[d.data.level].color)
        // .attr('fill', d => color(d.data.level))
        .on('mouseover', ({data}) => console.log(data))
        .on('mousemove', ({data}) => data)
        .on('mouseout',  ({data}) => data)
        // .on('mouseover', function() { return tooltip.style('visibility', 'visible'); })
        // .on('mousemove', function() { return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px'); })
        // .on('mouseout',  function() { return tooltip.style('visibility', 'hidden'); })

  svg.append('g')
    .attr('transform', `translate(${center.x}, ${center.y})`)
    .attr('font-size', 12)
    .attr('text-anchor', 'middle')
    .selectAll('text')
    .data(arcs)
    .join('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .call(text => text.append('tspan')
        .attr('y', '-0.25em')
        .attr('font-weight', '700')
        .text(d => d.data.label)
      )
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.3).append('tspan')
        .attr('x', 0)
        .attr('y', '1em')
        .attr('fill-opacity', 0.5)
        .text(d => d3.format(',.2%')(d.value / sum))
        // .text(d => `${d.data.percent}%`)
      );
};