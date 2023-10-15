import React, { PureComponent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDurationSession } from "../services/Api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DurationSession = () => {
  const [durationSession, setDurationSession] = useState({});
  let { userId } = useParams();

  useEffect(() => {
    const getUserDurationSession = async () => {
      const res = await fetchUserDurationSession(userId);
      setDurationSession(res);
    };

    getUserDurationSession();
  }, [userId]);

  return <SetLineChartData durationSession={durationSession.sessions} />;
};

class SetLineChartData extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/tiny-line-chart-r5z0f";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={this.props.durationSession}>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default DurationSession;
