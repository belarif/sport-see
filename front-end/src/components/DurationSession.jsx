import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDurationSession } from "../services/Api";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";

const DurationSession = () => {
  const [durationSession, setDurationSession] = useState({});
  let { userId } = useParams();

  useEffect(() => {
    let weekDays = ["L", "M", "M", "J", "V", "S", "D"];

    const getUserDurationSession = async () => {
      const res = await fetchUserDurationSession(userId);

      setDurationSession(
        res.sessions.map((item, index) => ({
          ...item,
          day: weekDays[index],
        }))
      );
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
        <LineChart width={300} height={100} data={durationSession}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#FFFFFF", opacity: "0.8", fontSize: "13px" }}
          />
          <Tooltip content={<LineChartTooltip />} />
          <Legend verticalAlign="top" align="left" content={LineChartLegend} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
            tick={{ fill: "#FFFFFF" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default DurationSession;
