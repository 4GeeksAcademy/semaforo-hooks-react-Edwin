import React from "react";
import TrafficLight  from "./TrafficLight.jsx";


//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">TrafficLight </h1>
	  <TrafficLight />
    </div>
  );
};

export default Home;
