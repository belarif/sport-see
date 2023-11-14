import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../sass/main.scss";
import HorizontalNavigation from "../components/HorizontalNavigation";
import VerticalNavigation from "../components/VerticalNavigation";
import Score from "../components/Score";
import Performance from "../components/Performance";
import DurationSession from "../components/DurationSession";
import Card from "../components/Card";
import { fetchUserData } from "../services/Api";
import DailyActivity from "../components/DailyActivite";
import { userMockData } from "../services/Mock";

const Profil = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let { userId } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      try {
        let res = {};

        process.env.REACT_APP_SOURCE_DATA === "api"
          ? (res = await fetchUserData(userId))
          : (res = await userMockData(userId));

        setUserData(res);
        setLoading(false);
      } catch (error) {
        if (error.name === "Error") {
          setError(error.message);
        } else if (error.name === "TypeError") {
          setError(
            "impossible de récupérer les données de l'API user main data"
          );
        }
        setLoading(false);
      }
    };

    getUserData();
  }, [userId]);

  return (
    <React.Fragment>
      <HorizontalNavigation />
      <VerticalNavigation />
      <main className="dashboard">
        {loading && <h1 style={{ textAlign: "center" }}>LOADING...</h1>}
        <section>
          {error && <div className="errorMessage">{error}</div>}
          {userData.userInfos && (
            <div>
              <h1>
                Bonjour
                <span className="firstName">
                  {userData.userInfos.firstName}
                </span>
              </h1>
              <p>
                Félicitation ! vous avez explosé vos objectifs hier &#128079;
              </p>
            </div>
          )}
        </section>

        <article>
          <article className="leftContent">
            <DailyActivity />
            <div className="informationCards">
              <DurationSession />
              <Performance />
              <Score userData={userData} />
            </div>
          </article>
          <article className="rightContent">
            <Card keyData={userData.keyData} />
          </article>
        </article>
      </main>
    </React.Fragment>
  );
};

export default Profil;
