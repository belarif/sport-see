import { useState, useEffect } from "react";

const GetUser = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch("http://localhost:3000/user/12");

      response
        .json()
        .then((userInformation) => setUserData(userInformation.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };

    getUserData();
  }, []);

  return { userData, loading, error };
};

export default GetUser;
