import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../sass/main.scss";
import HorizontalNavigation from "../components/HorizontalNavigation";
import VerticalNavigation from "../components/VerticalNavigation";
import Card from "../components/Card";
import Nutrient from "../components/Nutrient";
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
            Bonjour <span>Thomas</span>
          </h1>
          <p>Félicitation ! vous avez explosé vos objectifs hier &#128079;</p>
        </section>

        <article>
          <article className="leftContent">
            <div className="dailyActivity">
              <DailyActivity />
            </div>
            <div className="informationCards">
              <Card />
            </div>
          </article>
          <article className="rightContent">
            <Nutrient />
          </article>
        </article>
      </main>
    </React.Fragment>
  );
};

export default Profil;
