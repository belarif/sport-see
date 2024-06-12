import React from "react";
import { Link } from "react-router-dom";
import HorizontalNavigation from "../components/HorizontalNavigation";
import VerticalNavigation from "../components/VerticalNavigation";

const Home = () => {
  return (
    <React.Fragment>
      <HorizontalNavigation />
      <VerticalNavigation />
      <main className="home">
        <h1>
          Cliquez sur un bouton pour visualiser les données de l'utilisateur
        </h1>
        <Link to="/profil/12">
          <button>Profil 12</button>
        </Link>
        <Link to="/profil/18">
          <button>Profil 18</button>
        </Link>
      </main>
    </React.Fragment>
  );
};

export default Home;
