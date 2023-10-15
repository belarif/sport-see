import React, { PureComponent } from "react";
import { useState, useEffect } from "react";
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
      setActivity(res);
    };

    getUserDailyActivity();
  }, [userId]);

  return <SetDataBarChart activity={activity.sessions} />;
};

class SetDataBarChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";
  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={this.props.activity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontalCoordinatesGenerator={(props) =>
              props.height > 250 ? [75, 150, 225] : [100, 200]
            }
          />

          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
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
    );
  }
}

export default DailyActivity;
