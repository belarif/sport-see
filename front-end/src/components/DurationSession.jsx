import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDurationSession } from "../services/Api";
import { LineChart, Line, ResponsiveContainer } from "recharts";

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

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart width={300} height={100} data={durationSession}>
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
