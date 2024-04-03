import React from "react";
import "../vendors/styles/landlord.css";
import NavBar from "./NavBar";
import home from "../vendors/images/home.jpg";


const PropertyManagement: React.FC = () => {
  return (
    <>
    <NavBar />
    <div className="container">
        <h1>Property Management</h1>
        
        <div className="properties">
            <h2>Your Properties</h2>
            
            <div className="property-card">
                <img className="property-img" src={home} alt="Property 1"/>
                <h3>Property Title</h3>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>Edit</button>
                <button>Delete</button>
                </div>

                {/* <div className="property-card">
                <img src="img/1.jpg" alt="Property 1"></img>
                <h3>Property Title</h3>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>Edit</button>
                <button>Delete</button>
            </div> */}
        
    </div>
    </div>
    </>
  );
};

export default PropertyManagement;
