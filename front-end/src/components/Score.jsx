import React from "react";
import { standardizedScoreData } from "../wrappers/Data";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const Score = ({ userData }) => {
  standardizedScoreData(userData);
  const scoreInPercent = userData.score * 100;
  const data = [
    {
      score: 100,
      fill: "#ffffff",
      innerRadius: 10,
    },
    {
      score: scoreInPercent,
      fill: "#ff0000",
      innerRadius: 70,
    },
  ];

  if (!scoreInPercent) {
    return <div></div>;
  }

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <RadialBarChart
          data={data}
          innerRadius="innerRadius"
          startAngle={90}
          endAngle={360 + 90}
          barSize={13}
          outerRadius="150%"
        >
          <RadialBar
            dataKey="score"
            style={{ paddingTop: "90px" }}
            background
          />
          <text
            x="10%"
            y="16%"
            style={{ fontSize: 15, fontWeight: "bolder", fill: "#20253A" }}
          >
            Score
          </text>
          <text
            x="45%"
            y="45%"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fill: "#282d30",
            }}
          >
            {scoreInPercent}%
          </text>

          <text
            x="35%"
            y="55%"
            style={{
              fontSize: 18,
              fontWeight: "bold",
              fill: "#74798c",
            }}
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Score;
