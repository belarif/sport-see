import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDurationSession } from "../services/Api";
import { standardizedDurationSessionData } from "../wrappers/Data";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";

const DurationSession = () => {
  const [durationSession, setDurationSession] = useState([]);
  let { userId } = useParams();

  useEffect(() => {
    const getUserDurationSession = async () => {
      const res = await fetchUserDurationSession(userId);
      setDurationSession(standardizedDurationSessionData(res));
    };

    getUserDurationSession();
  }, [userId]);

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

  const LineChartLegend = () => {
    return <p className="title">Durée moyenne des sessions</p>;
  };

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={durationSession}
          margin={{ bottom: 0, left: 0, right: 0, top: 25 }}
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
          <Tooltip content={<LineChartTooltip />} cursor={false} />
          <Legend verticalAlign="top" align="left" content={LineChartLegend} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default DurationSession;
