import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img
        src={require("./../images/katie-zaferes.png")}
        className="card--image"
      />
      <div className="card-stats">
        <img src={require("./../images/star-big.png")} />
        <span>5.0</span>
        <span>(6) . </span>
        <span>USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>From $136 / person</p>
    </div>
  );
};

export default Card;
