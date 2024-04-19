import React from "react";
import banner from "../assets/banner.jpg";

const Home = () => {
  return (
    <>
      <div className="container">
        <img src={banner} alt="..." className="img1" />
        <div className="content">
          <h4>ANUPAM TOURS & TRAVELS</h4>
          <h1>Experiencee Mahabaleshwar Like</h1>
          <h1>Never Before</h1>
          <p>Trusted Taxi, Cab and Bus Service Await</p>
        </div>
      </div>
    </>
  );
};

export default Home;
