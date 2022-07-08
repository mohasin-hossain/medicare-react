import React from "react";
import "./Doctor.css";

const Doctor = (props) => {
  const { img, name, type, description, icon } = props.doctor;

  return (
    <div className="doctor">
      <img src={img} alt="" />
      <div>{icon}</div>
      <div className="doctor-content">
        <h3>{type}</h3>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Doctor;
