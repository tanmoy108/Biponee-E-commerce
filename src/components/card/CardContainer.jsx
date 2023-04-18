import React from "react";
import "./CardContainer.scss";

const CardContainer = (props) => {
  const { title, imageUrl } = props.value;
  return (
    <div className="card-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="card-textButton-content">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CardContainer;
