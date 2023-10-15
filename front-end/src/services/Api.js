const baseUrl = "http://localhost:3000/user/";

const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}${userId}`);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const fetchUserDailyActivity = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}${userId}/activity`);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchUserData, fetchUserDailyActivity };
