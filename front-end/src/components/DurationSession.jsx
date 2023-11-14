import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDurationSession } from "../services/Api";
import { standardizedDurationSessionData } from "../mappers/Data";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { userMockAverageSessionsData } from "../services/Mock";

const DurationSession = () => {
  const [durationSession, setDurationSession] = useState([]);
  const [error, setError] = useState(null);
  let { userId } = useParams();

  useEffect(() => {
    const getUserDurationSession = async () => {
      try {
        let res = [];

        process.env.REACT_APP_SOURCE_DATA === "api"
          ? (res = await fetchUserDurationSession(userId))
          : (res = await userMockAverageSessionsData(userId));

        setDurationSession(standardizedDurationSessionData(res));
      } catch (error) {
        if (error.name === "TypeError") {
          setError(
            "impossible de récupérer les données de l'API durée des sessions"
          );
        }
      }
    };

    getUserDurationSession();
  }, [userId]);

  /**
   *
   * @param {*} param0
   * @return { HTMLElement }
   */
  const LineChartTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="lineChart-tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="card card-orange">
      {error && (
        <div className="errorMessage" style={{ color: "black" }}>
          {error}
        </div>
      )}
      <ResponsiveContainer>
        <LineChart
          data={durationSession}
          margin={{ bottom: 0, left: 0, right: 0, top: 60 }}
        >
          <Line
            type="bump"
            dataKey="sessionLength"
            stroke="#ffffff"
            opacity={0.6}
            strokeWidth={2}
            dot={false}
            tick={{ fill: "#ffffff" }}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{
              stroke: "#ffffff",
              opacity: "0.6",
              fontSize: "13px",
            }}
            interval="preserveStartEnd"
          />
          <Tooltip content={<LineChartTooltip />} offset={5} cursor={false} />
          <text
            x="10%"
            y="16%"
            style={{
              fontSize: 15,
              fontWeight: 700,
              fill: "#ffffff",
              opacity: 0.6,
            }}
          >
            Durée moyenne des sessions
          </text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DurationSession;
