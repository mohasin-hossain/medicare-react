import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, img, serviceDetails, service } = props.service;

  return (
    <div className="service">
      <img src={img} alt="" />
      <div className="service-content">
        <h1>{service}</h1>
        <p>{serviceDetails}</p>
        <Link to={`/services/${id}`}>Learn More</Link>
      </div>
    </div>
  );
};

export default Service;
