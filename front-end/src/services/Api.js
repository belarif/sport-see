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

export default fetchUserData;
