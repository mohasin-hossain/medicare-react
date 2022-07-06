import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services)

  return (
    <div>
      {<h1>Service Details - {serviceId} {services.length}</h1> }
    </div>
  );
};

export default ServiceDetails;
