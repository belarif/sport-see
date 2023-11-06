import React from "react";
import { standardizedScoreData } from "../wrappers/Data";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Score = ({ userData }) => {
  standardizedScoreData(userData);
  const scoreInPercent = userData.score * 100;
  const data = [
    {
      score: 100,
      fill: "#ffffff",
    },
    {
      score: scoreInPercent,
      fill: "#ff0000",
    },
  ];

  if (!scoreInPercent) {
    return <div></div>;
  }

  const legendData = [data[1]];

  const RadialBarLegend = () => {
    return (
      <ul className="radialBar-legend">
        {legendData.map((entry, index) => (
          <li className="percent" key={`item-${index}`}>
            <b>{`${entry.score}%`}</b>
            <br /> de votre
            <br />
            objectif
          </li>
        ))}
      </ul>
    );
  };

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <RadialBarChart
          data={data}
          startAngle={90}
          endAngle={360 + 90}
          barSize={13}
          outerRadius="150%"
          barCategoryGap={0}
        >
          <RadialBar
            dataKey="score"
            style={{ paddingTop: "90px" }}
            background
            cornerRadius={10}
          />
          <Legend
            iconSize={0}
            layout="vertical"
            verticalAlign="middle"
            content={RadialBarLegend}
            wrapperStyle={{ top: "0", width: "inherit", height: "inherit" }}
          />
          <text
            x="10%"
            y="16%"
            style={{ fontSize: 15, fontWeight: "bolder", fill: "#20253A" }}
          >
            Score
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Score;
