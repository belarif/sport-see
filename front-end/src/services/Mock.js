import { USER_MAIN_DATA } from "../mockData/data";
import { USER_ACTIVITY } from "../mockData/data";
import { USER_AVERAGE_SESSIONS } from "../mockData/data";
import { USER_PERFORMANCE } from "../mockData/data";

/**
 *
 * @param { number } userId
 * @return Object
 */
const userMockData = async (userId) => {
  return USER_MAIN_DATA.find((item) => (item.id = userId));
};

/**
 *
 * @param { number } userId
 * @return Object
 */
const userMockActivityData = async (userId) => {
  return USER_ACTIVITY.find((item) => (item.id = userId));
};

/**
 *
 * @param { number } userId
 * @return Object
 */
const userMockAverageSessionsData = async (userId) => {
  return USER_AVERAGE_SESSIONS.find((item) => (item.id = userId));
};

/**
 *
 * @param { number } userId
 * @return Object
 */
const userMockPerformanceData = async (userId) => {
  return USER_PERFORMANCE.find((item) => (item.id = userId));
};

export {
  userMockData,
  userMockActivityData,
  userMockAverageSessionsData,
  userMockPerformanceData,
};
