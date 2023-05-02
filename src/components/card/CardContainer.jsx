import React from "react";
import {useNavigate} from "react-router-dom";
import "./CardContainer.scss";

const CardContainer = (props) => {
  const { title, imageUrl } = props.value;
  const navigate = useNavigate();
  const gotos = ()=>{
    navigate(`/shop/${title.toLowerCase()}`);
  }
   return (
    <div className="card-container" onClick={gotos} >
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
