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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p className="label">''</p>
      </div>
    );
  }
  return null;
};

export default class DailyActivity extends PureComponent {
  //   static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";
  //   static demoUrl =
  //     "https://codesandbox.io/s/tooltip-with-customized-content-lyxvs";

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
