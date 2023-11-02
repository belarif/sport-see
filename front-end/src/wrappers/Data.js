// standardization duration session data
export const standardizedDurationSessionData = (res) => {
  let weekDays = ["L", "M", "M", "J", "V", "S", "D"];

  return res.sessions.map((item, index) => ({
    ...item,
    day: weekDays[index],
  }));
};

// standardization daily activity data
export const standardizedDailyActivityData = (res) => {
  return res.sessions.map((item, index) => ({
    ...item,
    index: index + 1,
  }));
};

// standardization performance data
export const standardizedPerformanceData = (res) => {
  return res.data.map((item, index) => ({
    ...item,
    kind: Object.values(res.kind)[index],
  }));
};

// standardization score data
export const standardizedScoreData = (userData) => {
  const objectProperties = Object.keys(userData);
  const scoreProperty = objectProperties[2];

  if (scoreProperty === "todayScore") {
    Object.defineProperty(
      userData,
      "score",
      Object.getOwnPropertyDescriptor(userData, "todayScore")
    );
  }
};
