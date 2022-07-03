import React from "react";
import "./Service.css";

const Service = (props) => {
  const { img, serviceDetails, service } = props.service;

  return (
    <div className="service">
      <img src={img} alt="" />
      <div className="service-content">
        <h1>{service}</h1>
        <p>{serviceDetails}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Service;
