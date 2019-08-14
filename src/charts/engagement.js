import * as d3 from 'd3';
import { round } from '../utils';

const concentrations = {
  CONCENTRATION: 'Concentration',
  DISTRACTED_WORKING: 'Distracted Working',
  DISORDER: 'Disorder'
};

const engagements = {
  GA: 'Group Activity',
  GL: 'Getting Lesson',
  HA: 'Horsing Around',
  Wait: 'Waiting',
  Wd: 'Wandering',
  W: 'Working',
  S: 'Snacking',
  Obs: 'Observing',
  Other: 'Other'
};

const interactions = {
  COMPLETELY: 'Completely',
  PARTIAL: 'Partial',
  NOT: 'Not'
};

export default function({svg, data, width, height}) {

  height = Math.min(width, 600)

  const center = {x: width / 2, y: height / 2};
  const radius = Math.min(width, height) / 2.5;
  const sum = d3.sum(data, d => d.value);

  data = data.map(d => ({
    ...d,
    label: engagements[d.level],
    percent: round(d.value / sum * 100, 2)
  }));

  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.percent))
    .range(d3.quantize(t => d3.interpolateSpectral(t * 0.4 + 0.6), data.length).reverse())

  const arcs = (d3.pie()
    .value(d => d.value)
    // .sortValues(() => random() > 0.5 ? -1 : 1)
    .padAngle(0.005)
  )(data);

  const arc = d3.arc()
    .cornerRadius(3)
    .outerRadius(radius - 1)
    .innerRadius(radius * 0.25);

  svg // .attr('viewBox', [-width / 2, -height / 2, width, height])
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${center.x}, ${center.y})`)
    .selectAll('path')
    .data(arcs)
    .join('path')
      .attr('fill', d => color(d.data.level))
      .attr('d', arc)
      .on('mouseover', ({data}) => console.log(data))
      .on('mousemove', ({data}) => data)
      .on('mouseout', ({data}) => data)
      // .on('mouseover', function(){return tooltip.style("visibility", "visible");})
      // .on('mousemove', function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
      // .on('mouseout', function(){return tooltip.style("visibility", "hidden");})

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
        .text(d => `${d.data.percent}%`)
      );
};