import React from "react";
import "../vendors/styles/landlord.css";
import NavBar from "./NavBar";


const StudentRequest: React.FC = () => {
  return (
    <>
    <NavBar />
    <div className="container">
        <h1>Student Requests Management</h1>
        
        <div className="requests">
            <h2>Student Requests</h2>
            
            <div className="request-card">
                <h3>Student Name</h3>
                <p>Requested Property: Property Title</p>
                <button>Accept</button>
                <button>Reject</button>
            </div>
        </div>
    </div>
    </>
  );
};

export default StudentRequest;
