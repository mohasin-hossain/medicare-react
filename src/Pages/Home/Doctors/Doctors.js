import React from "react";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTeeth,
  faStethoscope,
  faWaveSquare,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const stethoscopeIcon = <FontAwesomeIcon className="doc-icon" icon={faStethoscope} />;
const teethIcon = <FontAwesomeIcon className="doc-icon" icon={faTeeth} />;
const waveIcon = <FontAwesomeIcon className="doc-icon" icon={faWaveSquare} />;
const brainIcon = <FontAwesomeIcon className="doc-icon" icon={faBrain} />;

const doctors = [
  {
    id: 1,
    name: "Audrey Button",
    type: "Dental Surgeon",
    img: "https://i.ibb.co/6XpFmqZ/doctor-1.jpg",
    icon: teethIcon,
    description:
      "Trained to detect diseases that affect the mouth, jaw, teeth.",
  },
  {
    id: 2,
    name: "Burnice Ray",
    type: "Chief Surgeon",
    img: "https://i.ibb.co/61qcJvy/doctor-2.jpg",
    icon: stethoscopeIcon,
    description: "Operate on patients to treat cancerous deformities.",
  },
  {
    id: 3,
    name: "Larissa Lanson",
    type: "Cardiac Surgeon",
    icon: waveIcon,
    img: "https://i.ibb.co/w69kR2z/doctor-3.jpg",
    description: "Perform surgery on the heart and the major blood vessels.",
  },
  {
    id: 4,
    name: "Jason Bolton",
    type: "Neurosurgery",
    icon: brainIcon,
    img: "https://i.ibb.co/NZzJFMf/doctor-4.jpg",
    description: "Treats conditions that affect your bodys nervous system.",
  },
];

const Doctors = () => {
  return (
    <div className="doctors">
      <h4>People you can trust</h4>
      <h1 className="services-main-title">
        Our team of <span>Reliable Doctors</span>
      </h1>
      <div className="doctors-container">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
