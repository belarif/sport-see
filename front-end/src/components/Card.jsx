import React from "react";
import Score from "./Score";
import Performance from "./Performance";

const Card = () => {
  return (
    <React.Fragment>
      <div className="card1">toto</div>
      <div className="card2">
        <Performance />
      </div>
      <div className="card3">
        <Score />
      </div>
    </React.Fragment>
  );
};

export default Card;
