import "../sass/main.scss";
import HorizontalNavigation from "../components/HorizontalNavigation";
import VerticalNavigation from "../components/VerticalNavigation";
import React from "react";

const Profil = () => {
  return (
    <React.Fragment>
      <HorizontalNavigation />
      <VerticalNavigation />
    </React.Fragment>
  );
};

export default Profil;
