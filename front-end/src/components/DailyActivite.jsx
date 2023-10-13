import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "1",
    calories: 240,
    kilogram: 80,
  },
  {
    day: "2",
    calories: 220,
    kilogram: 80,
  },
  {
    day: "3",
    calories: 280,
    kilogram: 81,
  },
  {
    day: "4",
    calories: 290,
    kilogram: 81,
  },
  {
    day: "5",
    calories: 160,
    kilogram: 81,
  },
  {
    day: "6",
    calories: 240,
    kilogram: 80,
  },
  {
    day: "7",
    calories: 162,
    kilogram: 78,
  },
  {
    day: "8",
    calories: 240,
    kilogram: 80,
  },
  {
    day: "9",
    calories: 390,
    kilogram: 76,
  },
  {
    day: "10",
    calories: 220,
    kilogram: 68,
  },
];

export default class DailyActivity extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontalCoordinatesGenerator={(props) =>
              props.height > 250 ? [75, 150, 225] : [100, 200]
            }
          />

          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="9"
          />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
          <Bar dataKey="calories" fill="#E60000" barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
