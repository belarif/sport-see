import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserPerformance } from "../services/Api";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Performance = () => {
  const [performance, setPerformance] = useState({});
  let { userId } = useParams();

  useEffect(() => {
    const getUserPerformance = async () => {
      const res = await fetchUserPerformance(userId);
      setPerformance(res);
    };

    getUserPerformance();
  }, [userId]);

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Performance;
