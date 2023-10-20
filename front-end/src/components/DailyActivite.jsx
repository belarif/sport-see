import React, { useState, useEffect } from "react";
import { fetchUserDailyActivity } from "../services/Api";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DailyActivity = () => {
  const [activity, setActivity] = useState({});
  let { userId } = useParams();

  useEffect(() => {
    const getUserDailyActivity = async () => {
      const res = await fetchUserDailyActivity(userId);
      setActivity(res.sessions);
    };

    getUserDailyActivity();
  }, [userId]);

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <BarChart
          data={activity}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} tickMargin={20} />
          <YAxis
            axisLine={false}
            tickLine={false}
            orientation="right"
            tickMargin={45}
          />

          <Tooltip label="" />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="9"
          />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
          <Bar dataKey="calories" fill="#E60000" barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default DailyActivity;
