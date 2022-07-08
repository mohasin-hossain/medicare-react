import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useServices from "../../../hooks/useServices";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [services] = useServices();

  const filteredService = services.find(
    (service) => service.id === parseInt(serviceId)
  );

  return (
    <div className="service-details">
      <div>
        <h1>{filteredService?.service}</h1>
        <p>{filteredService?.serviceDetails}</p>
      </div>
      <div>
        <img src={filteredService?.img} alt="" />
      </div>
    </div>
  );
};

export default ServiceDetails;
