import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Score = ({ userData }) => {
  const scoreToto = userData.todayScore * 100;

  const data = [
    {
      score: 100,
      fill: "#ffffff",
      innerRadius: 10,
    },
    {
      score: scoreToto,
      fill: "#ff0000",
      innerRadius: 70,
    },
  ];

  const legendData = [data[1]];

  const RadialBarLegend = () => {
    return (
      <ul className="radialBar-legend">
        {legendData.map((entry, index) => (
          <li className="percent" key={`item-${index}`}>
            <b>{`${entry.score}%`}</b>
            <br /> de votre objectif
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ResponsiveContainer>
      <RadialBarChart
        data={data}
        innerRadius="innerRadius"
        startAngle={90}
        endAngle={360 + 90}
        barSize={13}
        outerRadius="150%"
      >
        <RadialBar dataKey="score" radius={60} style={{ paddingTop: "90px" }} />
        <text
          x="8%"
          y="10%"
          dy={+12}
          style={{ fontSize: 15, fontWeight: "bolder", fill: "#20253A" }}
        >
          Score
        </text>
        <Legend
          iconSize={0}
          layout="vertical"
          verticalAlign="middle"
          content={RadialBarLegend}
          wrapperStyle={{ top: "0", width: "inherit", height: "inherit" }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Score;
