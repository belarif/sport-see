import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDurationSession } from "../services/Api";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const DurationSession = () => {
  const [durationSession, setDurationSession] = useState({});
  let { userId } = useParams();

  useEffect(() => {
    const getUserDurationSession = async () => {
      const res = await fetchUserDurationSession(userId);
      setDurationSession(res.sessions);
    };

    getUserDurationSession();
  }, [userId]);

  console.log(durationSession);

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
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart width={300} height={100} data={durationSession}>
          <XAxis />
          <Tooltip content={<LineChartTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default DurationSession;
