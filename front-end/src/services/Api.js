const baseUrl = "http://localhost:3001/user/";

/**
 * request user data with fetch method
 *
 * @param { Number } userId
 * @return { object | error }
 */
const fetchUserData = async (userId) => {
  const response = await fetch(`${baseUrl}${userId}`);

  if (!response.ok) {
    throw Error("L'utilisateur demandé n'existe pas");
  }

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

  if (!response.ok) {
    throw Error("L'utilisateur demandé n'existe pas");
  }

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

  if (!response.ok) {
    throw Error("L'utilisateur demandé n'existe pas");
  }

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

  if (!response.ok) {
    throw Error("L'utilisateur demandé n'existe pas");
  }

  const { data } = await response.json();

  return data;
};

export {
  fetchUserData,
  fetchUserDailyActivity,
  fetchUserPerformance,
  fetchUserDurationSession,
};
