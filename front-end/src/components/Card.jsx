import React from "react";
import Score from "./Score";
import Performance from "./Performance";

const Card = () => {
  return (
    <React.Fragment>
      <div className="card card-orange">toto</div>
      <div className="card card-black">
        <Performance />
      </div>
      <div className="card card-lightGray">
        <Score />
      </div>
    </React.Fragment>
  );
};

export default Card;
