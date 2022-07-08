import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const filteredService = services.find(
    (service) => service.id === parseInt(serviceId)
  );
  console.log(filteredService);

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
