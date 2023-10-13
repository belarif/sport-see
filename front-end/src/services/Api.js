const baseUrl = "http://localhost:3000/user/";

const getUserData = async (id) => {
  const response = await fetch(`${baseUrl}${id}`);
  if (response) {
    const res = await response.json()
    return res
  } else {
    return {error: 'pb api'}
  }
};


export default {
  getUserData
}
