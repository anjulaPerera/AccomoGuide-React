import React from "react";
import "../vendors/styles/landlord.css";
import NavBar from "./NavBar";


const LandlordPage: React.FC = () => {
  return (
    <>
    <NavBar />
    <div className="content">
			<h1>Welcome to AccomoGuide</h1><br></br>
            <h3>Get started</h3>
            <div className="landin-btn">
            <a href="add_property" className="btn">Add Property</a><br></br>
            <a href="student_requests" className="btn">Student Requests</a><br></br>
            <a href="property_management" className="btn">Property Management</a><br></br>
            </div>
		</div>
    </>
  );
};

export default LandlordPage;
