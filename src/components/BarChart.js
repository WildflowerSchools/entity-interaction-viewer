import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    "country": "AD",
    "hot dog": 126,
    "hot dogColor": "hsl(317, 70%, 50%)",
    "burger": 81,
    "burgerColor": "hsl(52, 70%, 50%)",
    "sandwich": 176,
    "sandwichColor": "hsl(127, 70%, 50%)",
    "kebab": 104,
    "kebabColor": "hsl(152, 70%, 50%)",
    "fries": 55,
    "friesColor": "hsl(123, 70%, 50%)",
    "donut": 13,
    "donutColor": "hsl(269, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(353, 70%, 50%)",
    "burger": 7,
    "burgerColor": "hsl(244, 70%, 50%)",
    "sandwich": 89,
    "sandwichColor": "hsl(196, 70%, 50%)",
    "kebab": 162,
    "kebabColor": "hsl(90, 70%, 50%)",
    "fries": 62,
    "friesColor": "hsl(259, 70%, 50%)",
    "donut": 93,
    "donutColor": "hsl(43, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 103,
    "hot dogColor": "hsl(349, 70%, 50%)",
    "burger": 155,
    "burgerColor": "hsl(2, 70%, 50%)",
    "sandwich": 191,
    "sandwichColor": "hsl(265, 70%, 50%)",
    "kebab": 29,
    "kebabColor": "hsl(353, 70%, 50%)",
    "fries": 88,
    "friesColor": "hsl(108, 70%, 50%)",
    "donut": 28,
    "donutColor": "hsl(75, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 113,
    "hot dogColor": "hsl(154, 70%, 50%)",
    "burger": 106,
    "burgerColor": "hsl(143, 70%, 50%)",
    "sandwich": 61,
    "sandwichColor": "hsl(260, 70%, 50%)",
    "kebab": 99,
    "kebabColor": "hsl(92, 70%, 50%)",
    "fries": 3,
    "friesColor": "hsl(202, 70%, 50%)",
    "donut": 159,
    "donutColor": "hsl(286, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 112,
    "hot dogColor": "hsl(30, 70%, 50%)",
    "burger": 128,
    "burgerColor": "hsl(77, 70%, 50%)",
    "sandwich": 88,
    "sandwichColor": "hsl(304, 70%, 50%)",
    "kebab": 76,
    "kebabColor": "hsl(195, 70%, 50%)",
    "fries": 23,
    "friesColor": "hsl(235, 70%, 50%)",
    "donut": 49,
    "donutColor": "hsl(113, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 32,
    "hot dogColor": "hsl(229, 70%, 50%)",
    "burger": 58,
    "burgerColor": "hsl(266, 70%, 50%)",
    "sandwich": 103,
    "sandwichColor": "hsl(281, 70%, 50%)",
    "kebab": 44,
    "kebabColor": "hsl(107, 70%, 50%)",
    "fries": 105,
    "friesColor": "hsl(360, 70%, 50%)",
    "donut": 136,
    "donutColor": "hsl(32, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 162,
    "hot dogColor": "hsl(312, 70%, 50%)",
    "burger": 130,
    "burgerColor": "hsl(333, 70%, 50%)",
    "sandwich": 14,
    "sandwichColor": "hsl(125, 70%, 50%)",
    "kebab": 70,
    "kebabColor": "hsl(117, 70%, 50%)",
    "fries": 48,
    "friesColor": "hsl(347, 70%, 50%)",
    "donut": 162,
    "donutColor": "hsl(3, 70%, 50%)"
  }
]

function Chart(props) {
  return (
    <div style={{height:500}}>
      <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'red_purple' }}
        groupMode="grouped"
        defs={[
        {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true
        },
        {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
        }
        ]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
          {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
          {
              on: 'hover',
              style: {
                  itemOpacity: 1
              }
          }
          ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
}

export default Chart;