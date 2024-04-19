import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Middle from "./Components/Middle";
import Service from "./Components/Service";
import Reviews from "./Components/Reviews";

import taxiImage from "./assets/taxi.png";
import busImage from "./assets/bus.png";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Middle />
      <Service
        key="service1"
        id="taxi-cab"
        className="first"
        heading="Taxi & Cab service"
        image={taxiImage}
      />
      <Service
        key="service2"
        id="bus-ticket-booking"
        className="Second"
        heading="Bus ticket Booking"
        image={busImage}
      />
      <Reviews />
    </div>
  );
};

export default App;
