import React from "react";
import "../vendors/styles/warden.css";
import NavBar from "./NavBar";
import home from "../vendors/images/home.jpg";

import "../vendors/styles/login.css";

const WardenPage: React.FC = () => {
  return (
    <>
    <NavBar />
      <div className="container">
        <h1>Advertisements</h1>
        <div className="advertisements">
           
            <div className="advertisement-card">
            <img className="property-img" src={home} alt="Property 1"/>
                <div className="details">
                    <h2>Property Title</h2>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: 10000/month</p>
                    <div className="buttons">
                        <button className="approve-btn">Approve</button>
                        <button className="reject-btn">Reject</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="map"></div>
    </div>
    </>
  );
};

export default WardenPage;
