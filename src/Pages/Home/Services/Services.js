import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServices();

  return (
    <div className="services">
      <h4>What we can offer to you?</h4>
      <h1 className="services-main-title">Wide range of <span>Medical services</span></h1>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
