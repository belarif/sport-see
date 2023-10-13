import React from "react";
import "../sass/main.scss";
import HorizontalNavigation from "../components/HorizontalNavigation";
import VerticalNavigation from "../components/VerticalNavigation";
import Card from "../components/Card";
import Nutrient from "../components/Nutrient";
import {getUserData} from "../services/Api";
import DailyActivite from "../components/DailyActivite";

const Profil = () => {
  
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const id = 12;
    setLoading(true);
    const request = async () => {
      const res = getUserData(id);
      if (res.error) {
        setLoading(false);
        setError(res.error)
      } else {
        setLoading(false);
        setUserData(res);
      }
    }
    request();
  }, [getUserData]);

  
  console.log(userData);

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
              <DailyActivite />
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
