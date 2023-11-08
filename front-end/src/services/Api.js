const baseUrl = "http://localhost:3000/user/";

/**
 * request user data with fetch method
 *
 * @param { Number } userId
 * @return { object | error }
 */
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}${userId}`);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * request daily activity data with fetch method
 *
 * @param { Number } userId
 * @return { object | error }
 */
const fetchUserDailyActivity = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}${userId}/activity`);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * request performance data with fetch method
 *
 * @param { Number } userId
 * @return { object | error }
 */
const fetchUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}${userId}/performance`);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * request duration session data with fetch method
 *
 * @param { Number } userId
 * @return { object | error }
 */
const fetchUserDurationSession = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}${userId}/average-sessions`);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export {
  fetchUserData,
  fetchUserDailyActivity,
  fetchUserPerformance,
  fetchUserDurationSession,
};
