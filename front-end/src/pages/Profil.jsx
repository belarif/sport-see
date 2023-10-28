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

const Profil = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let { userId } = useParams();

  if (loading) <h1>LOADING...</h1>;

  if (error) console.log(error);

  useEffect(() => {
    setLoading(true);
    const getUserData = async () => {
      const res = await fetchUserData(userId);
      setUserData(res);

      if (res.error) {
        setLoading(false);
        setError(res.error);
      } else {
        setLoading(false);
        setUserData(res);
      }
    };

    getUserData();
  }, [userId]);

  return (
    <React.Fragment>
      <HorizontalNavigation />
      <VerticalNavigation />
      <main className="dashboard">
        <section>
          <h1>
            Bonjour
            <span className="firstName">
              {userData.userInfos && userData.userInfos.firstName}
            </span>
          </h1>
          <p>Félicitation ! vous avez explosé vos objectifs hier &#128079;</p>
        </section>

        <article>
          <article className="leftContent">
            <div className="dailyActivity">
              <DailyActivity />
            </div>
            <div className="informationCards">
              <div className="card card-orange">
                <DurationSession />
              </div>
              <div className="card card-black">
                <Performance />
              </div>
              <div className="card card-lightGray">
                <Score />
              </div>
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
