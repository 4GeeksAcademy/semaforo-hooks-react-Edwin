import React, { useState, useEffect } from "react";

import "../../styles/traffic-light.css";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prevLight) => {
        if (prevLight === "red") return "orange";
        if (prevLight === "orange") return "green";
        return "red";
      });
    }, 1000); // Cambia cada segundo (puedes ajustar el tiempo)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="position-relative">
      <div className="traffic-light position-absolute start-50 translate-middle-x">
        <div className={`red light ${activeLight === "red" ? "active" : ""}`}></div>
        <div className={`orange light ${activeLight === "orange" ? "active" : ""}`}></div>
        <div className={`green light ${activeLight === "green" ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default TrafficLight;
