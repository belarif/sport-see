import React from "react";
import caloriesIcon from "../assets/icons/calories-icon.svg";
import proteinsIcon from "../assets/icons/protein-icon.svg";
import glucidesIcon from "../assets/icons/carbs-icon.svg";
import lipidesIcon from "../assets/icons/fat-icon.svg";

const Nutrient = () => {
  return (
    <React.Fragment>
      <div className="box">
        <figure>
          <img src={caloriesIcon} alt="calories" />
          <figcaption>
            <span>1,930kCal</span>
            <p>Calories</p>
          </figcaption>
        </figure>
      </div>

      <div className="box">
        <figure>
          <img src={proteinsIcon} alt="proteins" />
          <figcaption>
            <span>155gr</span>
            <p>Proteins</p>
          </figcaption>
        </figure>
      </div>

      <div className="box">
        <figure>
          <img src={glucidesIcon} alt="glucides" />
          <figcaption>
            <span>290gr</span>
            <p>Glucides</p>
          </figcaption>
        </figure>
      </div>

      <div className="box">
        <figure>
          <img src={lipidesIcon} alt="lipides" />
          <figcaption>
            <span>50gr</span>
            <p>Lipides</p>
          </figcaption>
        </figure>
      </div>
    </React.Fragment>
  );
};

export default Nutrient;
