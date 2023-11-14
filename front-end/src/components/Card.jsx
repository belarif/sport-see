import React from "react";
import PropTypes from "prop-types";
import caloriesIcon from "../assets/icons/calories-icon.svg";
import proteinsIcon from "../assets/icons/protein-icon.svg";
import glucidesIcon from "../assets/icons/carbs-icon.svg";
import lipidesIcon from "../assets/icons/fat-icon.svg";

const Card = ({ keyData, error }) => {
  const nutrients = [
    {
      name: "Calories",
      count: keyData && keyData.calorieCount,
      icone: caloriesIcon,
    },
    {
      name: "Proteins",
      count: keyData && keyData.proteinCount,
      icone: proteinsIcon,
    },
    {
      name: "Glucides",
      count: keyData && keyData.carbohydrateCount,
      icone: glucidesIcon,
    },
    {
      name: "Lipides",
      count: keyData && keyData.lipidCount,
      icone: lipidesIcon,
    },
  ];

  return (
    <React.Fragment>
      {error && <div className="errorMessage">{error}</div>}
      {nutrients.map((nutrient, index) => (
        <div className="box" key={index}>
          <figure>
            <img src={nutrient.icone} alt="calories" />
            <figcaption>
              <span>{nutrient.count}kCal</span>
              <p>{nutrient.name}</p>
            </figcaption>
          </figure>
        </div>
      ))}
    </React.Fragment>
  );
};

Card.propTypes = {
  keyData: PropTypes.object,
  error: PropTypes.string,
};

export default Card;
