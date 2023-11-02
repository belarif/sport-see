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
  ReferenceArea,
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

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          width={300}
          height={100}
          data={durationSession}
          margin={{ left: "0", right: "0" }}
        >
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="#ffffff"
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
          <Tooltip content={<LineChartTooltip />} />
          <text
            x="10%"
            y="16%"
            style={{
              fontSize: 15,
              fontWeight: 700,
              fill: "#ffffff",
            }}
          >
            Durée moyenne des sessions
          </text>
          <ReferenceArea
            x1={"S"}
            x2={"D"}
            y1={0}
            y2={100}
            stroke="#000"
            strokeOpacity={0.3}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default DurationSession;
