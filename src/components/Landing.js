import React from 'react';
import { useAuth } from '../context/auth';
import Button from './Button';
import Chart from './Chart';

// const data = {
//   labels: [
//     '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm'
//   ],
//   datasets: [{
//     name: 'Mikey',
//     type: 'bar',
//     values: [25, 40, 30, 35, 8, 52, 17, 4]
//   }, {
//     name: 'Molly',
//     type: 'bar',
//     values: [23, 50, 10, 15, 18, 32, 27, 14]
//   }, {
//     name: 'Johnny',
//     type: 'line',
//     values: [15, 5, 4, 13, 3, 13, 20, 20]
//   }, {
//     name: 'Jenny',
//     type: 'line',
//     values: [10, 12, 15, 16, 15, 29, 4, 2, 3]
//   }],
//   yMarkers: [{
//     label: 'Extra Credit',
//     value: 55,
//     options: {labelPos: 'left'}
//   }],
//   yRegions: [{
//     label: 'Average',
//     start: 10,
//     end: 30,
//     options: {labelPos: 'left'}
//   }],
// };

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
];

function Landing(props) {

  const { logout } = useAuth();

  return (
    <div>
      <Button onClick={logout}>Logout</Button>
      <Chart data={data} />
    </div>
  );
}

export default Landing;