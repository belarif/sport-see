import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserPerformance } from "../services/Api";
import { standardizedPerformanceData } from "../wrappers/Data";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const Performance = () => {
  const [performance, setPerformance] = useState([]);
  let { userId } = useParams();

  useEffect(() => {
    const getUserPerformance = async () => {
      const res = await fetchUserPerformance(userId);
      setPerformance(standardizedPerformanceData(res));
    };

    getUserPerformance();
  }, [userId]);

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance}>
          <PolarGrid
            radialLines={false}
            polarRadius={["10", "24", "47", "69", "92"]}
          />

          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}
          />
          <Radar dataKey="value" fill="#E60000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Performance;
