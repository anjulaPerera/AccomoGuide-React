import React from "react";
import "../vendors/styles/student.css";
import NavBar from "./NavBar";
import home from "../vendors/images/home.jpg";


const StudentPage: React.FC = () => {
  return (
    <>
    <NavBar />
    <header>
        <h1>Welcome to NSBM Green University Accommodation</h1>
    </header>
    
    <div className="container">
        <h2>Advertisements</h2>
        <div className="advertisements">
            
            <div className="advertisement-card">
            <img className="property-img" src={home} alt="Property 1"/>
                <div className="details">
                    <h3>Property Title</h3>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: $1000/month</p>
                    <a href="post_page.html" className="details-btn">View Details</a>
                    <a href="#" className="reserve-btn">Reserve</a>
                </div>
            </div>
			<div className="advertisement-card">
            <img className="property-img" src={home} alt="Property 1"/>
                <div className="details">
                    <h3>Property Title</h3>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: $1000/month</p>
                    <a href="post_page.html" className="details-btn">View Details</a>
                    <a href="#" className="reserve-btn">Reserve</a>
                </div>
            </div>
			<div className="advertisement-card">
            <img className="property-img" src={home} alt="Property 1"/>
                <div className="details">
                    <h3>Property Title</h3>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: $1000/month</p>
                    <a href="post_page.html" className="details-btn">View Details</a>
                    <a href="#" className="reserve-btn">Reserve</a>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default StudentPage;
