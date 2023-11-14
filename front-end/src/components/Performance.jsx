import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserPerformance } from "../services/Api";
import { standardizedPerformanceData } from "../mappers/Data";
import { userMockPerformanceData } from "../services/Mock";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const Performance = () => {
  const [performance, setPerformance] = useState([]);
  const [error, setError] = useState(null);
  let { userId } = useParams();

  useEffect(() => {
    const getUserPerformance = async () => {
      try {
        let res = [];

        process.env.REACT_APP_SOURCE_DATA === "api"
          ? (res = await fetchUserPerformance(userId))
          : (res = await userMockPerformanceData(userId));

        setPerformance(standardizedPerformanceData(res));
      } catch (error) {
        if (error.name === "TypeError") {
          setError("impossible de récupérer les données de l'API performance");
        }
      }
    };

    getUserPerformance();
  }, [userId]);

  return (
    <div className="card card-black">
      {error && <div className="errorMessage">{error}</div>}
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
    </div>
  );
};

export default Performance;
