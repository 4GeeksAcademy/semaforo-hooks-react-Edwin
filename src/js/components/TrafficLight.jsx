import React, { useState, useEffect } from "react";

import "../../styles/traffic-light.css";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");
  const [purpleLight, setPurpleLight] = useState(false);

  const changeLight = (prevLight) => {
    if (prevLight === "red") return "orange";
    if (prevLight === "orange") return "green";
    if ((purpleLight === true) && (prevLight === "green")) return "purple";    
    return "red";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prevLight) => changeLight(prevLight));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="position-relative">
      <div className="traffic-light position-absolute start-50 translate-middle-x d-flex flex-column">
        <div
          className={`red light ${activeLight === "red" ? "active" : ""}`}
        ></div>
        <div
          className={`orange light ${activeLight === "orange" ? "active" : ""}`}
        ></div>
        <div
          className={`green light ${activeLight === "green" ? "active" : ""}`}
        ></div>
        {purpleLight && <div className={`purple light ${activeLight === "purple" ? "active" : ""}`}></div>}

        <button
          onClick={() => setActiveLight((prevLight) => changeLight(prevLight))}
          type="button"
          className="btn btn-outline-light my-2"
        >
          Change state
        </button>

        <button
          onClick={() => setPurpleLight(!purpleLight)}
          type="button"
          className="btn btn-outline-light my-2"
        >
          Add purple
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
