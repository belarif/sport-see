const baseUrl = "http://localhost:3000/user/";

/**
 * request user data with fetch method
 *
 * @param { Number } userId
 * @return { object | error }
 */
const fetchUserData = async (userId) => {
  const response = await fetch(`${baseUrl}${userId}`);
  const { data } = await response.json();

  return data;
};

/**
 * request daily activity data with fetch method
 *
 * @param { Number } userId
 * @return { object | error }
 */
const fetchUserDailyActivity = async (userId) => {
  const response = await fetch(`${baseUrl}${userId}/activity`);
  const { data } = await response.json();

  return data;
};

/**
 * request performance data with fetch method
 *
 * @param { Number } userId
 * @return { object | error }
 */
const fetchUserPerformance = async (userId) => {
  const response = await fetch(`${baseUrl}${userId}/performance`);
  const { data } = await response.json();

  return data;
};

/**
 * request duration session data with fetch method
 *
 * @param { Number } userId
 * @return { object | error }
 */
const fetchUserDurationSession = async (userId) => {
  const response = await fetch(`${baseUrl}${userId}/average-sessions`);
  const { data } = await response.json();

  return data;
};

export {
  fetchUserData,
  fetchUserDailyActivity,
  fetchUserPerformance,
  fetchUserDurationSession,
};
