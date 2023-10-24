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
    const getUserDurationSession = async () => {
      const res = await fetchUserDurationSession(userId);
      console.log(res.sessions);
      setDurationSession(
        res.sessions.map((item, day) => ({
          ...item,
          day: "ii",
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
          <XAxis tickLine={false} axisLine={false} />
          <Tooltip content={<LineChartTooltip />} />
          <Legend verticalAlign="top" align="left" content={LineChartLegend} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default DurationSession;
