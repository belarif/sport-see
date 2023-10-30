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
  const [activity, setActivity] = useState([]);
  let { userId } = useParams();

  const legendData = [
    {
      itemValue: "Poids (kg)",
      color: "#282d30",
    },
    {
      itemValue: "Calories brulées (kCalories)",
      color: "#e60000",
    },
  ];

  useEffect(() => {
    const getUserDailyActivity = async () => {
      const res = await fetchUserDailyActivity(userId);
      setActivity(
        res.sessions.map((item, index) => ({
          ...item,
          index: index + 1,
        }))
      );
    };

    getUserDailyActivity();
  }, [userId]);

  const BarChartTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="barChart-tooltip">
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kcal`}</p>
        </div>
      );
    }

    return null;
  };

  const BarChartLegend = () => {
    return (
      <div className="title-legend">
        <h1>Activité quotidienne</h1>
        <ul className="barChart-legend">
          {legendData.map((entry, index) => (
            <li style={{ color: entry.color }} key={`item-${index}`}>
              <span
                style={{
                  color: "#74798C",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                {entry.itemValue}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

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
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#dedede"
          />
          <XAxis
            dataKey="index"
            tickLine={false}
            tickMargin={20}
            scale="auto"
            stroke="#dedede"
            tick={{ stroke: "#9B9eac" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            orientation="right"
            tickMargin={45}
            type="number"
            domain={[0, "dataMax"]}
            tick={{ stroke: "#9B9eac" }}
          />
          <Tooltip content={<BarChartTooltip />} />
          <Legend
            verticalAlign="top"
            // iconType="circle"
            content={BarChartLegend}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282d30"
            barSize={7}
            radius={[20, 20, 0, 0]}
          />
          <Bar
            name="Calories brulées (kCalories)"
            dataKey="calories"
            fill="#e60000"
            barSize={7}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default DailyActivity;
