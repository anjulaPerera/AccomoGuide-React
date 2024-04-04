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
            <a href="/accomo/landlord/add-property" className="btn">Add Property</a><br></br>
            <a href="/accomo/landlord/student-request" className="btn">Student Requests</a><br></br>
            <a href="/accomo/landlord/property-management" className="btn">Property Management</a><br></br>
            </div>
		</div>
    </>
  );
};

export default LandlordPage;
