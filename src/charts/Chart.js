import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const charts = {
  engagement: ({el, data, width, height}) => {
    // charts[type]({el, data, width, height});
    // https://github.com/d3/d3/blob/master/API.md#pies
    height = Math.min(width, 600)

    const radius = Math.min(width, height) / 3;
    const viewBox = [-width / 2, -height / 2, width, height];

    // const tooltip = d3.select('body')
    //   .append('div')
    //   .attr('class', 'wfs-tooltip');

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

    const arcs = (d3.pie()
      .value(d => d.value)
      .padAngle(0.005)
    )(data);

    const arc = d3.arc()
      .outerRadius(radius - 1)
      .innerRadius(radius * 0.33);

    const svg = d3.select(el)
      .attr('viewBox', viewBox)

    svg.selectAll('path')
      .data(arcs)
      .join('path')
        .attr('fill', d => color(d.data.name))
        .attr('d', arc)
        .on('mouseover', ({data}) => console.log(data))
        .on('mousemove', ({data}) => data)
        .on('mouseout', ({data}) => data)
        // .on('mouseover', function(){return tooltip.style("visibility", "visible");})
        // .on('mousemove', function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
        // .on('mouseout', function(){return tooltip.style("visibility", "hidden");})

    svg.append('g')
      .attr('font-size', 12)
      .attr('text-anchor', 'middle')
      .selectAll('text')
      .data(arcs)
      .join('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .call(text => text.append('tspan')
          .attr('y', '-0.65em')
          .attr('font-weight', '700')
          .text(d => d.data.name)
        )
        .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append('tspan')
          .attr('x', 0)
          .attr('y', '0.65em')
          .attr('fill-opacity', 0.5)
          .text(d => d.data.value.toLocaleString())
        );
  }
}

function Chart({type, data, width, height}) {

  const ref = useRef();

  useEffect(() => {

    charts[type]({
      el: ref.current,
      data,
      width,
      height
    });

  }, [ref.current])

  return <svg ref={ref} />
}

export default Chart;