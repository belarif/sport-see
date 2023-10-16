import React from "react";
import VerticalNavigation from "../components/VerticalNavigation";
import HorizontalNavigation from "../components/HorizontalNavigation";

const Error = () => {
  return (
    <React.Fragment>
      <HorizontalNavigation />
      <VerticalNavigation />
      <main>
        <div className="content">
          <h1>Error 404</h1>
          <p>La page recherchée est introuvable</p>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Error;
