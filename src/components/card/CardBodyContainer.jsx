import React from "react";
import CardContainer from "./CardContainer.jsx";
import "./CardBodyContainer.scss";

const CardBodyContainer = (props) => {
  const { category } = props;
  return (
    <div className="body-container">
      {category.map((value) => {
        return <CardContainer value={value} key={value.id} />;
      })}
    </div>
  );
};

export default CardBodyContainer;
