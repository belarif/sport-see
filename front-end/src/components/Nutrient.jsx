import React from "react";
import caloriesIcon from "../assets/icons/calories-icon.svg";
import proteinsIcon from "../assets/icons/protein-icon.svg";
import glucidesIcon from "../assets/icons/carbs-icon.svg";
import lipidesIcon from "../assets/icons/fat-icon.svg";

const Nutrient = ({ keyData }) => {
  return (
    <React.Fragment>
      <div className="box">
        <figure>
          <img src={caloriesIcon} alt="calories" />
          <figcaption>
            <span>{keyData && keyData.calorieCount}kCal</span>
            <p>Calories</p>
          </figcaption>
        </figure>
      </div>

      <div className="box">
        <figure>
          <img src={proteinsIcon} alt="proteins" />
          <figcaption>
            <span>{keyData && keyData.proteinCount}gr</span>
            <p>Proteins</p>
          </figcaption>
        </figure>
      </div>

      <div className="box">
        <figure>
          <img src={glucidesIcon} alt="glucides" />
          <figcaption>
            <span>{keyData && keyData.carbohydrateCount}gr</span>
            <p>Glucides</p>
          </figcaption>
        </figure>
      </div>

      <div className="box">
        <figure>
          <img src={lipidesIcon} alt="lipides" />
          <figcaption>
            <span>{keyData && keyData.lipidCount}gr</span>
            <p>Lipides</p>
          </figcaption>
        </figure>
      </div>
    </React.Fragment>
  );
};

export default Nutrient;
